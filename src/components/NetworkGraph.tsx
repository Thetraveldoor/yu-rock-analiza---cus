import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { DATA, Node, Link } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, Music, Users, Disc, Heart, Zap, Search, Compass, Trash2, Maximize2, Sparkles, Filter, Sliders } from 'lucide-react';

interface NetworkGraphProps {
  onNodeSelect: (node: Node | null) => void;
  selectedNodeId: string | null;
}

// Extend D3 types for force simulation
interface D3Node extends d3.SimulationNodeDatum, Node {}
interface D3Link extends d3.SimulationLinkDatum<D3Node> {
  type: string;
  description?: string;
  year?: number;
}

// BFS lookup algorithm to find the shortest path between two nodes in our network
const findShortestPath = (startId: string, endId: string) => {
  if (!startId || !endId || startId === endId) return null;

  // Build adjacency list for both directions (rock graph is undirected for connection mapping)
  const adj: { [key: string]: { node: string; link: any }[] } = {};
  DATA.nodes.forEach(n => {
    adj[n.id] = [];
  });

  DATA.links.forEach(l => {
    const sId = typeof l.source === 'object' ? (l.source as any).id || l.source : l.source;
    const tId = typeof l.target === 'object' ? (l.target as any).id || l.target : l.target;
    
    if (adj[sId] && adj[tId]) {
      adj[sId].push({ node: tId, link: l });
      adj[tId].push({ node: sId, link: l });
    }
  });

  const queue: string[] = [startId];
  const visited = new Set<string>([startId]);
  const parent: { [key: string]: { node: string; link: any } } = {};

  while (queue.length > 0) {
    const curr = queue.shift()!;
    if (curr === endId) {
      const pathNodes: string[] = [];
      const pathLinks: any[] = [];
      let temp = endId;
      while (temp !== startId) {
        pathNodes.unshift(temp);
        const p = parent[temp];
        pathLinks.unshift(p.link);
        temp = p.node;
      }
      pathNodes.unshift(startId);
      return { pathNodes, pathLinks };
    }

    const neighbors = adj[curr] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.node)) {
        visited.add(neighbor.node);
        parent[neighbor.node] = { node: curr, link: neighbor.link };
        queue.push(neighbor.node);
      }
    }
  }
  return null;
};

const NetworkGraph: React.FC<NetworkGraphProps> = ({ onNodeSelect, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Connection Filtering States
  const [relationFilter, setRelationFilter] = useState<'all' | 'membership' | 'collaboration' | 'influence' | 'personal'>('all');
  
  // Search & Navigation States
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Path Finder Wizard States
  const [isPathFinderOpen, setIsPathFinderOpen] = useState(false);
  const [pathStartNodeId, setPathStartNodeId] = useState<string>('');
  const [pathEndNodeId, setPathEndNodeId] = useState<string>('');

  // Auto zoom on selected node or path start/end
  const handleCenterNode = (nodeId: string) => {
    const nodeObj = DATA.nodes.find(n => n.id === nodeId);
    if (!nodeObj || !svgRef.current || !containerRef.current) return;
    
    const svgEl = d3.select(svgRef.current);
    const selection = svgEl.selectAll<SVGGElement, D3Node>('g.node-group')
      .filter((d: any) => d.id === nodeId);
      
    if (!selection.empty()) {
      const d: any = selection.datum();
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const scale = 1.35;
      const x = width / 2 - d.x * scale;
      const y = height / 2 - d.y * scale;
      
      svgEl.transition()
        .duration(850)
        .ease(d3.easeCubicOut)
        .call(
          d3.zoom().transform as any,
          d3.zoomIdentity.translate(x, y).scale(scale)
        );

      const realNode = DATA.nodes.find(n => n.id === nodeId) || null;
      if (realNode) onNodeSelect(realNode);
    }
  };

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Initial Zoom Placement helper to center everything nicely.
    svg.call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(0.95));

    // Data preparation with copies
    const nodes: D3Node[] = DATA.nodes.map(d => ({ ...d }));
    const links: D3Link[] = DATA.links.map(d => ({
      source: d.source,
      target: d.target,
      type: d.type,
      description: d.description,
      year: d.year
    }));

    // Setup force simulation
    const simulation = d3.forceSimulation<D3Node>(nodes)
      .force('link', d3.forceLink<D3Node, D3Link>(links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-380))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(60));

    // Definitions (Glow filter, volumetric radial gradients)
    const defs = svg.append('defs');

    // Glow filter
    const glow = defs.append('filter').attr('id', 'glow');
    glow.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
    const feMerge = glow.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'blur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Volumetric Gradients for each concept style
    const createGradient = (id: string, color1: string, color2: string, color3: string) => {
      const grad = defs.append('radialGradient')
        .attr('id', `grad-${id}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', '50%');
      grad.append('stop').attr('offset', '0%').attr('stop-color', color1);
      grad.append('stop').attr('offset', '80%').attr('stop-color', color2);
      grad.append('stop').attr('offset', '100%').attr('stop-color', color3);
    };

    createGradient('Band', '#083344', '#155e75', '#06b6d4');       // Dark cyan to light cyan
    createGradient('Musician', '#1e1b4b', '#312e81', '#6366f1');   // Indigo
    createGradient('Album', '#3b0764', '#581c87', '#d946ef');      // Purple/Fuchsia
    createGradient('Song', '#4c0519', '#881337', '#f43f5e');       // Dark pink to rose

    // Shortest path finder calculation
    const activePath = (pathStartNodeId && pathEndNodeId) 
      ? findShortestPath(pathStartNodeId, pathEndNodeId) 
      : null;

    const isLinkInActivePath = (l: any) => {
      if (!activePath) return false;
      const lSource = l.source.id || l.source;
      const lTarget = l.target.id || l.target;
      return activePath.pathLinks.some((pl: any) => {
        const plSource = pl.source.id || pl.source;
        const plTarget = pl.target.id || pl.target;
        return (plSource === lSource && plTarget === lTarget) || (plSource === lTarget && plTarget === lSource);
      });
    };

    const isNodeInActivePath = (nId: string) => {
      if (!activePath) return false;
      return activePath.pathNodes.includes(nId);
    };

    // Filter checks
    const isLinkMatchingFilter = (l: any) => {
      if (relationFilter === 'all') return true;
      const type = l.type;
      
      if (relationFilter === 'membership') {
        return ['pripadnost', 'clanstvo_kratko', 'clanstvo', 'rivalstvo/clanstvo'].includes(type);
      }
      if (relationFilter === 'collaboration') {
        return [
          'suradnja', 
          'umjetnicka_suradnja', 
          'tekstopisac_↔_pjevac', 
          'autorstvo/pjesma', 
          'producent_↔_izvodjac', 
          'sudjelovanje',
          'izdavanje',
          'izdanje_pjesme'
        ].includes(type);
      }
      if (relationFilter === 'influence') {
        return ['rivalstvo', 'prijateljstvo/utjecaj', 'tematska_poveznica', 'stil_teksta'].includes(type);
      }
      if (relationFilter === 'personal') {
        return ['brak', 'obiteljska_veza', 'prijateljstvo/ljubavna_veza'].includes(type);
      }
      return true;
    };

    const hasActiveConnections = (nId: string) => {
      return links.some((l: any) => {
        const sId = l.source.id || l.source;
        const tId = l.target.id || l.target;
        return (sId === nId || tId === nId) && isLinkMatchingFilter(l);
      });
    };

    const isConnected = (aId: string, bId: string) => {
      if (aId === bId) return true;
      return links.some((l: any) => {
        const sId = l.source.id || l.source;
        const tId = l.target.id || l.target;
        return (sId === aId && tId === bId) || (sId === bId && tId === aId);
      });
    };

    // Links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', (d: any) => {
        if (activePath) {
          return isLinkInActivePath(d) ? '#10b981' : 'rgba(255, 255, 255, 0.02)';
        }
        if (!isLinkMatchingFilter(d)) return 'rgba(255, 255, 255, 0.02)';
        
        if (d.type === 'pripadnost' || d.type === 'clanstvo_kratko' || d.type === 'rivalstvo/clanstvo') return '#06b6d4';
        if (d.type === 'suradnja' || d.type === 'umjetnicka_suradnja' || d.type === 'tekstopisac_↔_pjevac' || d.type === 'autorstvo/pjesma' || d.type === 'producent_↔_izvodjac' || d.type === 'izdavanje' || d.type === 'izdanje_pjesme' || d.type === 'sudjelovanje') return '#d946ef';
        if (d.type === 'brak' || d.type === 'obiteljska_veza' || d.type === 'prijateljstvo/ljubavna_veza') return '#f43f5e';
        if (d.type === 'tematska_poveznica' || d.type === 'stil_teksta') return '#eab308';
        return '#cbd5e1';
      })
      .attr('class', (d: any) => {
        if (activePath && isLinkInActivePath(d)) {
          return 'path-highlight-link';
        }
        return '';
      })
      .attr('stroke-opacity', (d: any) => {
        if (activePath) {
          return isLinkInActivePath(d) ? 1.0 : 0.05;
        }
        if (!isLinkMatchingFilter(d)) return 0.05;
        if (selectedNodeId === null) return 0.65;
        const sId = (d.source as any).id || d.source;
        const tId = (d.target as any).id || d.target;
        return (sId === selectedNodeId || tId === selectedNodeId) ? 0.95 : 0.08;
      })
      .attr('stroke-width', (d: any) => {
        if (activePath) {
          return isLinkInActivePath(d) ? 6.5 : 1.5;
        }
        if (!isLinkMatchingFilter(d)) return 1.5;
        if (selectedNodeId === null) return d.type === 'pripadnost' ? 3.8 : 2.5;
        const sId = (d.source as any).id || d.source;
        const tId = (d.target as any).id || d.target;
        return (sId === selectedNodeId || tId === selectedNodeId) ? 5.5 : 1.5;
      })
      .attr('stroke-dasharray', d => {
        if (activePath && isLinkInActivePath(d)) return null; 
        return (d.type === 'suradnja' || d.type === 'umjetnicka_suradnja' || d.type === 'prijateljstvo/utjecaj' || d.type === 'tematska_poveznica' || d.type === 'stil_teksta' ? '4,4' : null);
      });

    // Node groups
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node-group transition-[opacity] duration-300')
      .style('cursor', 'pointer')
      .style('opacity', (d: any) => {
        if (activePath) {
          return isNodeInActivePath(d.id) ? 1.0 : 0.12;
        }
        if (relationFilter !== 'all' && !hasActiveConnections(d.id)) {
          return 0.12;
        }
        if (selectedNodeId === null) return 1.0;
        
        const isSelf = d.id === selectedNodeId;
        const linked = links.some((l: any) => {
          const sId = l.source.id || l.source;
          const tId = l.target.id || l.target;
          const isConnectedLink = (sId === selectedNodeId && tId === d.id) || (sId === d.id && tId === selectedNodeId);
          return isConnectedLink && isLinkMatchingFilter(l);
        });
        
        return (isSelf || linked) ? 1.0 : 0.15;
      })
      .call(d3.drag<SVGGElement, D3Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Base Node Circles with specialized volumetric gradient fill
    node.append('circle')
      .attr('class', 'main-circle')
      .attr('r', d => d.type === 'Band' ? 36 : d.type === 'Musician' ? 24 : 18)
      .attr('fill', d => `url(#grad-${d.type})`)
      .attr('stroke', d => {
        if (activePath && isNodeInActivePath(d.id)) return '#34d399'; // brilliant emerald for paths
        if (d.id === selectedNodeId) return '#ffffff';
        switch(d.type) {
          case 'Band': return '#06b6d4';
          case 'Musician': return '#6366f1';
          case 'Album': return '#d946ef';
          case 'Song': return '#f43f5e';
          default: return '#cbd5e1';
        }
      })
      .attr('stroke-width', d => {
        if (activePath && isNodeInActivePath(d.id)) return 4.0;
        return d.id === selectedNodeId ? 3.5 : 1.5;
      })
      .attr('filter', d => {
        if (activePath && isNodeInActivePath(d.id)) return 'url(#glow)';
        return d.id === selectedNodeId ? 'url(#glow)' : null;
      });

    // Add extra "groove" detailing for visual vinyl effect on Bands and Albums
    const vinylNodes = node.filter((d: any) => d.type === 'Band' || d.type === 'Album');
    
    // Concentric grooves
    vinylNodes.append('circle')
      .attr('r', d => d.type === 'Band' ? 24 : 12)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255, 255, 255, 0.15)')
      .attr('stroke-width', 0.8)
      .attr('stroke-dasharray', '2,3');

    vinylNodes.append('circle')
      .attr('r', d => d.type === 'Band' ? 14 : 7)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255, 255, 255, 0.12)')
      .attr('stroke-width', 0.8);

    // Central spindle hole
    vinylNodes.append('circle')
      .attr('r', 3)
      .attr('fill', '#050508')
      .attr('stroke', 'rgba(255, 255, 255, 0.4)')
      .attr('stroke-width', 0.5);

    // Node labels
    node.append('text')
      .text(d => d.name)
      .attr('x', 0)
      .attr('y', d => d.type === 'Band' ? 56 : 42)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-[10px] font-bold fill-slate-200 pointer-events-none select-none uppercase tracking-widest')
      .style('text-shadow', '0 0 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.9)')
      .style('opacity', (d: any) => {
        if (activePath) {
          return isNodeInActivePath(d.id) ? 1.0 : 0.4;
        }
        if (relationFilter !== 'all' && !hasActiveConnections(d.id)) {
          return 0.3;
        }
        if (selectedNodeId === null) return 1.0;
        const isSelf = d.id === selectedNodeId;
        const linked = links.some((l: any) => {
          const sId = l.source.id || l.source;
          const tId = l.target.id || l.target;
          return ((sId === selectedNodeId && tId === d.id) || (sId === d.id && tId === selectedNodeId)) && isLinkMatchingFilter(l);
        });
        return (isSelf || linked) ? 1.0 : 0.3;
      });

    node.on('click', (event, d) => {
      onNodeSelect(d);
      event.stopPropagation();
    });

    svg.on('click', () => onNodeSelect(null));

    // Force updates on position calculation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [selectedNodeId, onNodeSelect, relationFilter, pathStartNodeId, pathEndNodeId]);

  // Alpha ordered elements for dropdowns
  const sortedDropdownNodes = [...DATA.nodes].sort((a, b) => a.name.localeCompare(b.name));

  // Build the live step register description
  const activePath = (pathStartNodeId && pathEndNodeId) 
    ? findShortestPath(pathStartNodeId, pathEndNodeId) 
    : null;

  // Search autocomplete list
  const filteredSearchNodes = searchQuery.trim() === '' 
    ? [] 
    : DATA.nodes.filter(n => n.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);

  return (
    <div ref={containerRef} className="w-full h-full bg-transparent overflow-hidden relative">
      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Search & Direct Center Focus Bar */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-2">
        <div className="relative">
          <div className="flex items-center bg-[#090911]/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 w-64 sm:w-80 shadow-lg">
            <Search size={14} className="text-slate-400 mr-2 shrink-0" />
            <input 
              type="text" 
              placeholder="Pronađi i centriraj na grafu..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              className="bg-transparent text-xs text-slate-100 outline-none w-full placeholder-slate-500 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                className="p-0.5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors ml-1"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Autocomplete drop results */}
          <AnimatePresence>
            {showSearchResults && filteredSearchNodes.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute top-11 left-0 right-0 bg-[#0c0c16] border border-white/15 rounded-xl mt-1 shadow-2xl overflow-hidden backdrop-blur-xl z-50 text-xs"
              >
                <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold px-3.5 py-2 border-b border-white/5 bg-black/20">Rezultati pretrage</div>
                <ul>
                  {filteredSearchNodes.map((n) => {
                    const nodeColor = n.type === 'Band' ? 'text-cyan-400' :
                                      n.type === 'Musician' ? 'text-indigo-400' :
                                      n.type === 'Album' ? 'text-fuchsia-400' : 'text-rose-400';
                    return (
                      <li key={n.id}>
                        <button
                          type="button"
                          onClick={() => {
                            handleCenterNode(n.id);
                            setShowSearchResults(false);
                            setSearchQuery('');
                          }}
                          className="w-full text-left px-3.5 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5 flex items-center justify-between group"
                        >
                          <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors uppercase tracking-wide">{n.name}</span>
                          <span className={`${nodeColor} text-[9px] font-mono font-bold bg-white/5 px-1.5 py-0.5 rounded uppercase tracking-wider`}>{n.type}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Interactive Relations Filters Bar */}
      <div className="absolute top-6 right-6 z-30 flex gap-2">
        <div className="bg-[#090911]/85 backdrop-blur-md border border-white/10 p-1 rounded-xl flex items-center gap-1 shadow-xl">
          <div className="p-1 px-2 text-[9px] font-bold font-mono text-slate-500 uppercase flex items-center gap-1">
            <Filter size={10} className="text-cyan-500" />
            <span>Veze:</span>
          </div>
          <button
            onClick={() => setRelationFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${
              relationFilter === 'all' 
                ? 'bg-white/10 text-white border border-white/10' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            Sve
          </button>
          <button
            onClick={() => setRelationFilter('membership')}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all flex items-center gap-1.5 ${
              relationFilter === 'membership' 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/25' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Users size={11} />
            <span className="hidden xs:inline">Članstva</span>
          </button>
          <button
            onClick={() => setRelationFilter('collaboration')}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all flex items-center gap-1.5 ${
              relationFilter === 'collaboration' 
                ? 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/25' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Music size={11} />
            <span className="hidden xs:inline">Suradnje</span>
          </button>
          <button
            onClick={() => setRelationFilter('influence')}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all flex items-center gap-1.5 ${
              relationFilter === 'influence' 
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/25' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Zap size={11} />
            <span className="hidden xs:inline">Utjecaji</span>
          </button>
          <button
            onClick={() => setRelationFilter('personal')}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all flex items-center gap-1.5 ${
              relationFilter === 'personal' 
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/25' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Heart size={11} />
            <span className="hidden xs:inline">Privatno</span>
          </button>
        </div>

        {/* Pathfinder Wizard Button Toggle */}
        <button
          onClick={() => {
            setIsPathFinderOpen(!isPathFinderOpen);
            // Auto setup start node if user had already selected one on screen
            if (selectedNodeId && !pathStartNodeId) {
              setPathStartNodeId(selectedNodeId);
            }
          }}
          className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 shadow-xl font-bold text-xs uppercase tracking-widest ${
            isPathFinderOpen || (pathStartNodeId && pathEndNodeId)
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
              : 'bg-[#090911]/85 backdrop-blur-md text-slate-300 border-white/10 hover:text-white'
          }`}
          title="Putokaz Veza (Degrees of Separation)"
        >
          <Compass size={14} className={isPathFinderOpen ? "animate-spin" : ""} style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline">Putokaz Veza</span>
        </button>
      </div>

      {/* Pathfinder Wizard Control Panel Card */}
      <AnimatePresence>
        {isPathFinderOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 10 }}
            className="absolute top-20 right-6 z-40 w-80 sm:w-96 bg-[#08080f]/95 border border-white/10 p-5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2.5">
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={11} className="animate-pulse text-emerald-400" />
                <span>Degrees of separation</span>
              </span>
              <button 
                onClick={() => setIsPathFinderOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"
              >
                <X size={14} />
              </button>
            </div>

            <p className="text-[10.5px] text-slate-400 mb-4 font-serif italic">
              Izaberi dva povijesna zapisa i otkrij lanac suradnji i utjecaja koji ih međusobno povezuju.
            </p>

            <div className="space-y-3.5 text-xs">
              {/* Start node choice container */}
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-mono">Početna točka (A)</label>
                <div className="flex gap-1.5">
                  <select
                    value={pathStartNodeId}
                    onChange={(e) => setPathStartNodeId(e.target.value)}
                    className="w-full bg-[#121220]/80 border border-white/15 rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 outline-none focus:border-cyan-500/50"
                  >
                    <option value="">[ Izaberi zapis ]</option>
                    {sortedDropdownNodes.map(n => (
                      <option key={n.id} value={n.id}>{n.name} ({n.type})</option>
                    ))}
                  </select>
                  {pathStartNodeId && (
                    <button
                      onClick={() => handleCenterNode(pathStartNodeId)}
                      className="p-2 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white transition-colors"
                      title="Centriraj"
                    >
                      <Maximize2 size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* End node choice container */}
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-mono">Završna točka (B)</label>
                <div className="flex gap-1.5">
                  <select
                    value={pathEndNodeId}
                    onChange={(e) => setPathEndNodeId(e.target.value)}
                    className="w-full bg-[#121220]/80 border border-white/15 rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 outline-none focus:border-cyan-500/50"
                  >
                    <option value="">[ Izaberi zapis ]</option>
                    {sortedDropdownNodes.map(n => (
                      <option key={n.id} value={n.id} disabled={n.id === pathStartNodeId}>{n.name} ({n.type})</option>
                    ))}
                  </select>
                  {pathEndNodeId && (
                    <button
                      onClick={() => handleCenterNode(pathEndNodeId)}
                      className="p-2 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white transition-colors"
                      title="Centriraj"
                    >
                      <Maximize2 size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Clear paths or action handles */}
              {(pathStartNodeId || pathEndNodeId) && (
                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => {
                      setPathStartNodeId('');
                      setPathEndNodeId('');
                      onNodeSelect(null);
                    }}
                    className="text-[9px] uppercase tracking-widest font-mono font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 bg-red-500/5 px-2.5 py-1.5 rounded-lg border border-red-500/10"
                  >
                    <Trash2 size={10} />
                    Ponisti put
                  </button>
                </div>
              )}

              {/* Path findings list or error statement */}
              {pathStartNodeId && pathEndNodeId && (
                <div className="mt-4 border-t border-white/5 pt-4">
                  {activePath ? (
                    <div className="space-y-4">
                      <div className="text-[9px] uppercase tracking-[0.2em] text-emerald-400 font-mono font-black flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Putokaz je aktiviran ({activePath.pathNodes.length - 1} stupanj veza)</span>
                      </div>
                      
                      <div className="space-y-3 pl-3 border-l border-emerald-500/30 ml-1.5 relative">
                        {activePath.pathNodes.map((nId, idx) => {
                          const stepsNode = DATA.nodes.find(n => n.id === nId);
                          if (!stepsNode) return null;
                          const nextLink = idx < activePath.pathNodes.length - 1 ? activePath.pathLinks[idx] : null;

                          return (
                            <div key={idx} className="relative group/n pr-1">
                              {/* Glowing node pointer */}
                              <div className="absolute -left-[17px] top-[4px] w-2 h-2 rounded-full bg-emerald-550 border border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                              
                              <div className="flex justify-between items-center bg-white/5 px-2 py-1.5 rounded-lg border border-white/5 hover:border-emerald-550/20 hover:bg-[#121220]/50 transition-all">
                                <button
                                  type="button"
                                  onClick={() => handleCenterNode(stepsNode.id)}
                                  className="font-bold text-left text-slate-100 hover:text-emerald-400 transition-colors uppercase tracking-wide truncate max-w-[190px]"
                                >
                                  {stepsNode.name}
                                </button>
                                <span className="text-[8px] bg-white/5 text-slate-400 font-mono font-bold px-1 rounded uppercase tracking-wider scale-90">{stepsNode.type}</span>
                              </div>

                              {nextLink && (
                                <div className="mt-1 pl-1 text-[10px] text-emerald-400 font-serif italic py-0.5 rounded px-2 bg-emerald-500/5 border border-emerald-500/10 max-w-[90%] truncate">
                                  ↳ {nextLink.description || nextLink.type}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-red-950/25 border border-red-500/15 rounded-xl text-[11px] text-red-400 font-serif italic flex items-center gap-1.5">
                      <span>Nema direktno mapiranih veza u arhivu između ova dva zapisa. Istraži druge parove.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend Container */}
      <div className="absolute bottom-6 left-6 bg-[#090911]/85 p-4 border border-white/10 rounded-2xl backdrop-blur-md pointer-events-none z-30 shadow-xl max-w-xs xl:max-w-md">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-mono font-bold">Arhivska Legenda</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-300">SASTAV</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-300">GLAZBENIK</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-300">ALBUM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-300">PJESMA</span>
          </div>
          
          <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-5 h-0.5 bg-[#06b6d4]"></span>
              <span className="text-[9px] uppercase font-mono font-semibold text-slate-400">Članstva & Pripadnost</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-0.5 border-t border-dashed border-[#d946ef]"></span>
              <span className="text-[9px] uppercase font-mono font-semibold text-slate-400">Suradnje & Izdanja</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-0.5 border-t border-dashed border-[#eab308]"></span>
              <span className="text-[9px] uppercase font-mono font-semibold text-[#eab308]">Poetske & Tematske Veze</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-0.5 bg-[#f43f5e]"></span>
              <span className="text-[9px] uppercase font-mono font-semibold text-slate-400">Privatne / Obiteljske Veze</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-0.5 bg-slate-400"></span>
              <span className="text-[9px] uppercase font-mono font-semibold text-slate-400">Ostali utjecaji</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkGraph;
