import React from 'react';
import { Node, Link, DATA } from '../data';
import { motion } from 'motion/react';
import { X, Globe, Calendar, Music, Users, Disc, Tag, Radio, MapPin, Heart } from 'lucide-react';

interface DetailPanelProps {
  node: Node | null;
  onClose: () => void;
  onNodeSelect?: (node: Node | null) => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ node, onClose, onNodeSelect }) => {
  if (!node) return null;

  // Find related links and nodes
  const relatedLinks = DATA.links.filter(l => l.source === node.id || l.target === node.id);
  const relatedNodes = relatedLinks.map(l => {
    const otherId = l.source === node.id ? l.target : l.source;
    return {
      node: DATA.nodes.find(n => n.id === otherId),
      link: l
    };
  }).filter(item => item.node);

  // Set colors based on node types
  const getThemeColor = () => {
    switch (node.type) {
      case 'Band': return 'cyan';
      case 'Musician': return 'indigo';
      case 'Album': return 'fuchsia';
      case 'Song': return 'rose';
      default: return 'cyan';
    }
  };

  const color = getThemeColor();

  return (
    <motion.aside
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="w-full sm:w-96 bg-[#090911]/90 backdrop-blur-2xl border-l border-white/10 p-6 z-40 flex flex-col h-full overflow-hidden shrink-0 shadow-[20px_0_40px_rgba(0,0,0,0.5)]"
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-1.5">
          <Radio size={12} className="text-cyan-500 animate-pulse" />
          <span>Profil arhivske stavke</span>
        </span>
        <button 
          onClick={onClose}
          className="p-1.5 bg-white/5 hover:bg-white/15 rounded-full text-slate-400 hover:text-white transition-all border border-white/5"
        >
          <X size={18} />
        </button>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2 mb-6">
        {/* Animated Visual Record Header */}
        <div className="relative flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden group">
          {/* Subtle colored background shadow inside cards */}
          <div className={`absolute -right-10 -bottom-10 w-24 h-24 bg-${color}-500/10 rounded-full blur-2xl`}></div>

          {/* Vinyl Disc Visual */}
          {(node.type === 'Band' || node.type === 'Album') ? (
            <div className="relative w-20 h-20 shrink-0 select-none">
              <div className="w-full h-full rounded-full bg-slate-950 border-4 border-[#12121e] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.6)] animate-[spin_8s_linear_infinite]">
                {/* Vinyl Grooves inside the decorative element */}
                <div className="w-16 h-16 rounded-full border border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 bg-${color}-500 rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#050508] border border-white/30 rounded-full"></div>
            </div>
          ) : (
            <div className={`relative w-20 h-20 shrink-0 rounded-2xl bg-${color}-950/40 border border-${color}-500/30 flex items-center justify-center text-3xl font-display uppercase italic text-${color}-400`}>
              {node.name.charAt(0)}
            </div>
          )}

          <div className="min-w-0 pr-4">
            <span className={`text-[9px] font-bold text-${color}-400 bg-${color}-500/10 border border-${color}-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1.5`}>
              {node.type}
            </span>
            <h2 className="text-2xl font-black italic tracking-tight uppercase leading-none text-white break-words">
              {node.name}
            </h2>
          </div>
        </div>

        {/* Significance / Meaning text */}
        <div className="space-y-2">
          <span className="text-[9px] uppercase tracking-widest text-[#64748b] font-bold font-mono">Značaj i Biografija</span>
          <p className="text-sm text-slate-300 leading-relaxed font-serif italic bg-white/5 border border-white/5 p-4 rounded-xl">
            {node.details?.znacaj}
          </p>
        </div>

        {/* General attributes metadata */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block mb-1">
              {node.type === 'Musician' ? 'Instrumenti' : node.type === 'Band' ? 'Sjedište' : 'Izdanje'}
            </span>
            <span className="text-sm font-bold text-white tracking-tight uppercase whitespace-nowrap overflow-hidden text-ellipsis block">
              {node.type === 'Musician' ? node.details?.instrumenti?.join(', ') : 
               node.type === 'Band' ? node.details?.sjediste : 
               node.details?.godina}
            </span>
          </div>

          {(node.type === 'Band' || node.type === 'Musician') ? (
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block mb-1">
                {node.type === 'Band' ? 'Aktivni Period' : 'Uloge'}
              </span>
              <span className="text-sm font-bold text-white tracking-tight uppercase whitespace-nowrap overflow-hidden text-ellipsis block">
                {node.type === 'Band' ? node.details?.period : node.details?.uloge?.join(', ')}
              </span>
            </div>
          ) : (
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-[9px] uppercase text-slate-500 font-mono font-bold block mb-1">
                Izvođači
              </span>
              <span className="text-sm font-bold text-white tracking-tight uppercase whitespace-nowrap overflow-hidden text-ellipsis block">
                {node.details?.izvodjac || node.details?.izvodjaci?.join(', ') || 'Ex-Yu Scena'}
              </span>
            </div>
          )}
        </div>

        {/* Connected relationships list */}
        <div className="space-y-3">
          <div className="text-[9px] uppercase text-slate-500 tracking-widest font-mono font-bold border-b border-white/10 pb-2 flex justify-between items-center">
            <span>Povezani arhivski rekordi</span>
            <span className="bg-white/5 text-slate-400 px-1.5 py-0.5 rounded font-bold text-[9px]">{relatedNodes.length}</span>
          </div>
          
          {relatedNodes.length === 0 ? (
            <p className="text-xs text-slate-500 font-serif italic pl-1">Trenutno nema mapiranih odnosa.</p>
          ) : (
            <ul className="space-y-2">
              {relatedNodes.map((item, idx) => {
                if (!item.node) return null;
                const rColor = item.node.type === 'Band' ? 'cyan' : 
                               item.node.type === 'Musician' ? 'indigo' : 
                               item.node.type === 'Album' ? 'fuchsia' : 'rose';

                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => onNodeSelect?.(item.node || null)}
                      className="w-full text-left flex flex-col p-3 rounded-xl bg-white/5 hover:bg-white/12 border border-white/5 hover:border-white/15 transition-all group/item"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                          {item.node.name}
                        </span>
                        <span className={`text-[8px] uppercase font-mono font-black scale-90 px-1.5 py-0.5 rounded bg-${rColor}-500/10 text-${rColor}-400 border border-${rColor}-500/20`}>
                          {item.node.type}
                        </span>
                      </div>
                      
                      <span className="text-[10px] text-slate-400 mt-1.5 font-serif italic max-w-full overflow-hidden text-ellipsis group-hover/item:text-slate-200 transition-colors flex items-center gap-1">
                        {item.link.type === 'brak' && <Heart size={10} className="text-rose-500 fill-rose-500 shrink-0" />}
                        <span>{item.link.description || item.link.type}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <button 
        onClick={onClose}
        className={`w-full py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-cyan-500 hover:to-indigo-600 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg transition-all uppercase tracking-widest text-[10px] font-mono border border-white/10`}
      >
        Dovrši istraživanje
      </button>
    </motion.aside>
  );
};

export default DetailPanel;
