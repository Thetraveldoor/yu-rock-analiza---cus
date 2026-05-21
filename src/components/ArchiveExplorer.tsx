import React, { useState, useMemo } from 'react';
import { DATA, Node } from '../data';
import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Music, Users, Disc, SlidersHorizontal, ArrowUpDown, Sparkles, Guitar, Hash } from 'lucide-react';

interface ArchiveExplorerProps {
  onNodeSelect: (node: Node | null) => void;
  selectedNodeId: string | null;
  onSwitchToMap: () => void;
}

export default function ArchiveExplorer({ onNodeSelect, selectedNodeId, onSwitchToMap }: ArchiveExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Band' | 'Musician' | 'Album' | 'Song'>('All');
  const [cityFilter, setCityFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'type'>('name');

  // Extract unique cities from bands
  const cities = useMemo(() => {
    const list = new Set<string>();
    DATA.nodes.forEach(n => {
      if (n.type === 'Band' && n.details?.sjediste) {
        list.add(n.details.sjediste);
      }
    });
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & search nodes
  const filteredNodes = useMemo(() => {
    return DATA.nodes
      .filter(node => {
        // Search filter
        const matchesSearch = 
          node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          node.details?.znacaj?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (node.details?.uloge && node.details.uloge.some((u: string) => u.toLowerCase().includes(searchTerm.toLowerCase()))) ||
          (node.details?.zanrovi && node.details.zanrovi.some((z: string) => z.toLowerCase().includes(searchTerm.toLowerCase())));

        // Type filter
        const matchesType = typeFilter === 'All' || node.type === typeFilter;

        // City filter
        const matchesCity = cityFilter === 'All' || 
          (node.type === 'Band' && node.details?.sjediste === cityFilter) ||
          (node.type === 'Musician' && node.details?.bend === cityFilter);

        return matchesSearch && matchesType && matchesCity;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a.type.localeCompare(b.type);
        }
      });
  }, [searchTerm, typeFilter, cityFilter, sortBy]);

  const handleCardClick = (node: Node) => {
    onNodeSelect(node);
  };

  return (
    <div className="w-full h-full flex flex-col bg-transparent overflow-hidden">
      {/* Sub-Header with search & controls */}
      <div className="p-6 bg-black/30 border-b border-white/5 backdrop-blur-md shrink-0 space-y-4">
        {/* Search and Sort controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Pretraži arhiv (npr. Azra, vokalist, Sarajevo, novi val)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 hover:bg-white/10 focus:bg-white/10 text-white rounded-lg border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder-slate-500 text-sm font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
              <ArrowUpDown size={14} />
              <span>Poredaj:</span>
            </div>
            <div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
              <button 
                onClick={() => setSortBy('name')}
                className={`px-3 py-1.5 rounded-md transition-colors ${sortBy === 'name' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                Abecedno
              </button>
              <button 
                onClick={() => setSortBy('type')}
                className={`px-3 py-1.5 rounded-md transition-colors ${sortBy === 'type' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                Kategoriji
              </button>
            </div>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/5 border border-white/5 rounded-full p-1 scrollbar-none max-w-full overflow-x-auto">
            <button
              onClick={() => setTypeFilter('All')}
              className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[10px] font-bold ${typeFilter === 'All' ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Sve ({DATA.nodes.length})
            </button>
            <button
              onClick={() => setTypeFilter('Band')}
              className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5 ${typeFilter === 'Band' ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-cyan-400'}`}
            >
              <Users size={12} />
              Sastavi
            </button>
            <button
              onClick={() => setTypeFilter('Musician')}
              className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5 ${typeFilter === 'Musician' ? 'bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]' : 'text-slate-400 hover:text-indigo-400'}`}
            >
              <Guitar size={12} />
              Glazbenici
            </button>
            <button
              onClick={() => setTypeFilter('Album')}
              className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5 ${typeFilter === 'Album' ? 'bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(217,70,239,0.4)]' : 'text-slate-400 hover:text-fuchsia-400'}`}
            >
              <Disc size={12} />
              Albumi
            </button>
            <button
              onClick={() => setTypeFilter('Song')}
              className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5 ${typeFilter === 'Song' ? 'bg-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.4)]' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <Music size={12} />
              Pjesme
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>

          {/* City filtering */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 uppercase tracking-widest text-[10px]">Lokacija:</span>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-slate-300 font-medium focus:border-cyan-500 focus:text-white outline-none transition-all cursor-pointer text-xs"
            >
              {cities.map((city) => (
                <option key={city} value={city} className="bg-[#0c0c16] text-slate-300">
                  {city === 'All' ? 'Sve Scerne / Gradovi' : city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid listing */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {filteredNodes.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
            <SlidersHorizontal size={40} className="text-slate-600 animate-pulse" />
            <p className="text-slate-400 font-serif italic text-lg">Nema rezultata za odabrane kriterije.</p>
            <button 
              onClick={() => { setSearchTerm(''); setTypeFilter('All'); setCityFilter('All'); }}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 rounded-md transition-colors"
            >
              Poništi filtere
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNodes.map((node, index) => {
              const isSelected = selectedNodeId === node.id;
              
              if (node.type === 'Band') {
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.4) }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => handleCardClick(node)}
                    className={`cursor-pointer group flex flex-col justify-between p-5 bg-[#090911] border rounded-xl overflow-hidden relative transition-all ${
                      isSelected 
                        ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50' 
                        : 'border-white/5 hover:border-cyan-500/30 hover:shadow-lg'
                    }`}
                  >
                    {/* Retro poster grid style */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all"></div>
                    
                    <div className="space-y-3 z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded-full font-bold">
                          Sastav
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                          <MapPin size={10} className="text-slate-600" />
                          <span>{node.details?.sjediste}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-display uppercase tracking-tight text-white leading-none pt-1 group-hover:text-cyan-300 transition-colors">
                        {node.name}
                      </h3>
                      
                      <p className="text-xs text-slate-400 line-clamp-2 font-serif italic text-ellipsis">
                        {node.details?.znacaj}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center z-10 text-[10px] text-slate-500 font-mono">
                      <span>Period: {node.details?.period || '1980-ih'}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNodeSelect(node);
                          onSwitchToMap();
                        }}
                        className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-cyan-950/60 hover:bg-cyan-500/20 text-[9px] text-cyan-400 font-bold uppercase tracking-widest rounded border border-cyan-500/20 transition-all"
                      >
                        Mreža →
                      </button>
                    </div>
                  </motion.div>
                );
              }

              if (node.type === 'Musician') {
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.4) }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => handleCardClick(node)}
                    className={`cursor-pointer group flex flex-col justify-between p-5 bg-[#090911] border rounded-xl overflow-hidden relative transition-all ${
                      isSelected 
                        ? 'border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/50' 
                        : 'border-white/5 hover:border-indigo-500/30 hover:shadow-lg'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-all"></div>
                    
                    <div className="space-y-3 z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-800/30 px-2 py-0.5 rounded-full font-bold">
                          Glazbenik
                        </span>
                        {node.details?.nadimak && (
                          <span className="text-[9px] text-indigo-300 font-bold italic font-mono uppercase bg-indigo-950/20 px-1.5 py-0.5 rounded">
                            "{node.details.nadimak}"
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-white leading-tight pt-1 group-hover:text-indigo-300 transition-colors uppercase">
                        {node.name}
                      </h3>
                      
                      <p className="text-xs text-slate-400 line-clamp-2 font-serif italic text-ellipsis">
                        {node.details?.znacaj}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex flex-col gap-1.5 z-10 text-[10px] text-slate-500">
                      <div className="flex justify-between items-center font-mono">
                        <span className="text-slate-500 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                          {node.details?.instrumenti ? `Instrumenti: ${node.details?.instrumenti.join(', ')}` : node.details?.uloge ? `Uloga: ${node.details?.uloge[0]}` : 'Solo artist'}
                        </span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onNodeSelect(node);
                            onSwitchToMap();
                          }}
                          className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-indigo-950/60 hover:bg-indigo-500/20 text-[9px] text-indigo-400 font-bold uppercase tracking-widest rounded border border-indigo-500/20 transition-all"
                        >
                          Mreža →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (node.type === 'Album') {
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.4) }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => handleCardClick(node)}
                    className={`cursor-pointer group flex flex-col justify-between p-5 bg-[#090911] border rounded-xl overflow-hidden relative transition-all ${
                      isSelected 
                        ? 'border-fuchsia-500 shadow-[0_0_20px_rgba(192,38,211,0.15)] ring-1 ring-fuchsia-500/50' 
                        : 'border-white/5 hover:border-fuchsia-500/30 hover:shadow-lg'
                    }`}
                  >
                    {/* Vinyl Slipcase Peek effect */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center p-1 group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
                        <div className="w-3 h-3 bg-fuchsia-600 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-3 z-10 pr-12">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-fuchsia-400 bg-fuchsia-950/40 border border-fuchsia-800/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <Disc size={9} />
                          Album
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono font-bold">
                          {node.details?.godina}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white leading-snug pt-1 group-hover:text-fuchsia-400 transition-colors uppercase italic font-serif">
                        "{node.name}"
                      </h3>
                      
                      <p className="text-xs text-slate-400 line-clamp-2 font-serif italic text-ellipsis">
                        {node.details?.znacaj}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center z-10 text-[10px] font-mono text-slate-500">
                      <span className="text-fuchsia-400/80 font-bold max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {node.details?.izvodjac || node.details?.izvodjaci?.join(', ')}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNodeSelect(node);
                          onSwitchToMap();
                        }}
                        className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-fuchsia-950/60 hover:bg-fuchsia-500/20 text-[9px] text-fuchsia-400 font-bold uppercase tracking-widest rounded border border-fuchsia-500/20 transition-all"
                      >
                        Mreža →
                      </button>
                    </div>
                  </motion.div>
                );
              }

              // Songs/Other
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.4) }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => handleCardClick(node)}
                  className={`cursor-pointer group flex flex-col justify-between p-5 bg-[#090911] border rounded-xl overflow-hidden relative transition-all ${
                    isSelected 
                      ? 'border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)] ring-1 ring-rose-500/50' 
                      : 'border-white/5 hover:border-rose-500/30 hover:shadow-lg'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-rose-500/10 transition-all"></div>
                  
                  <div className="space-y-3 z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-widest text-rose-400 bg-rose-950/40 border border-rose-800/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Music size={9} />
                        Pjesma
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">
                        {node.details?.godina}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-white leading-snug pt-1 group-hover:text-rose-400 transition-colors uppercase">
                      {node.name}
                    </h3>
                    
                    <p className="text-xs text-slate-400 line-clamp-2 font-serif italic text-ellipsis">
                      {node.details?.znacaj}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center z-10 text-[10px] font-mono text-slate-500">
                    <span className="text-rose-400/80 font-bold max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {node.details?.izvodjac || 'Razni izvođači'}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onNodeSelect(node);
                        onSwitchToMap();
                      }}
                      className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-rose-950/60 hover:bg-rose-500/20 text-[9px] text-rose-400 font-bold uppercase tracking-widest rounded border border-rose-500/20 transition-all"
                    >
                      Mreža →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
