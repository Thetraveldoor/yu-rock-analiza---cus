import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { DATA, Node, Link } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, Music, Users,Disc, Mic2, Info } from 'lucide-react';

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

const NetworkGraph: React.FC<NetworkGraphProps> = ({ onNodeSelect, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    // Data preparation
    const nodes: D3Node[] = DATA.nodes.map(d => ({ ...d }));
    const links: D3Link[] = DATA.links.map(d => ({
      source: d.source,
      target: d.target,
      type: d.type,
      description: d.description,
      year: d.year
    }));

    const simulation = d3.forceSimulation<D3Node>(nodes)
      .force('link', d3.forceLink<D3Node, D3Link>(links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(60));

    // Links
    const link = g.append('g')
      .attr('stroke', (d: any) => d.type === 'pripadnost' ? 'rgba(34, 211, 238, 0.4)' : 'rgba(192, 38, 211, 0.3)')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => d.type === 'pripadnost' ? 2 : 1)
      .attr('stroke-dasharray', d => d.type === 'suradnja' ? '4,4' : null);

    // Node groups
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node-group')
      .call(d3.drag<SVGGElement, D3Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Node circles/shapes
    node.append('circle')
      .attr('r', d => d.type === 'Band' ? 35 : d.type === 'Musician' ? 24 : 18)
      .attr('fill', d => {
        switch(d.type) {
          case 'Band': return 'rgba(34, 211, 238, 0.1)'; 
          case 'Musician': return 'rgba(0, 0, 0, 0.6)';
          case 'Album': return 'rgba(192, 38, 211, 0.1)';
          case 'Song': return 'rgba(255, 255, 255, 0.05)';
          default: return 'rgba(255, 255, 255, 0.1)';
        }
      })
      .attr('stroke', d => {
        if (d.id === selectedNodeId) return '#fff';
        switch(d.type) {
          case 'Band': return '#22d3ee'; // cyan
          case 'Musician': return '#94a3b8'; // slate
          case 'Album': return '#c026d3'; // fuchsia
          case 'Song': return '#f472b6'; // pink
          default: return '#334155';
        }
      })
      .attr('stroke-width', d => d.id === selectedNodeId ? 3 : 1.5)
      .attr('filter', d => d.type === 'Band' ? 'url(#glow)' : null);

    // Glow filter
    svg.append('defs')
      .append('filter')
      .attr('id', 'glow')
      .append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur')
      .append('feMerge')
      .selectAll('feMergeNode')
      .data(['coloredBlur', 'SourceGraphic'])
      .join('feMergeNode')
      .attr('in', d => d);

    // Node labels
    node.append('text')
      .text(d => d.name)
      .attr('x', 0)
      .attr('y', d => d.type === 'Band' ? 55 : 45)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-[10px] font-bold fill-slate-300 pointer-events-none select-none uppercase tracking-widest')
      .style('text-shadow', '0 0 5px rgba(0,0,0,0.8)');

    node.on('click', (event, d) => {
      onNodeSelect(d);
      event.stopPropagation();
    });

    svg.on('click', () => onNodeSelect(null));

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
  }, [selectedNodeId, onNodeSelect]);

  return (
    <div ref={containerRef} className="w-full h-full bg-transparent overflow-hidden relative">
      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      <div className="absolute bottom-6 left-6 bg-black/40 p-4 border border-white/10 rounded-lg backdrop-blur-lg pointer-events-none z-30">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-bold">Legenda</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-400">SASTAV</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-400">GLAZBENIK</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(192,38,211,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-400">ALBUM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]"></span>
            <span className="text-[10px] uppercase font-bold text-slate-400">PJESMA</span>
          </div>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-3">
            <span className="w-4 h-0.5 bg-cyan-400/40"></span>
            <span className="text-[9px] uppercase text-slate-500">Pripadnost</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-0.5 border-t border-dashed border-fuchsia-400/40"></span>
            <span className="text-[9px] uppercase text-slate-500">Suradnja</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkGraph;
