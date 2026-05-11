import React from 'react';
import { Node, Link, DATA } from '../data';
import { motion } from 'motion/react';
import { X, Globe, Calendar, Music, Users, Disc, Tag, Quote } from 'lucide-react';

interface DetailPanelProps {
  node: Node | null;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ node, onClose }) => {
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

  return (
    <motion.aside
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="w-full sm:w-80 bg-black/40 backdrop-blur-xl border-l border-white/10 p-6 z-50 flex flex-col h-full overflow-hidden shrink-0"
    >
      <div className="flex justify-end mb-4">
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mb-8">
        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
          {node.type}
        </span>
        <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none mb-4">
          {node.name}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed font-serif italic">
          {node.details.znacaj}
        </p>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
        {/* Stats card pattern from design */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <div className="text-[10px] uppercase text-slate-500 mb-1">
            {node.type === 'Musician' ? 'Instrumenti' : node.type === 'Band' ? 'Sjedište' : 'Izdanje'}
          </div>
          <div className="text-lg font-mono text-cyan-400 uppercase">
            {node.type === 'Musician' ? node.details.instrumenti?.join(', ') : 
             node.type === 'Band' ? node.details.sjediste : 
             node.details.godina}
          </div>
        </div>

        {node.type === 'Band' && (
           <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="text-[10px] uppercase text-slate-500 mb-1">Period</div>
            <div className="text-lg font-mono text-fuchsia-400 uppercase">{node.details.period}</div>
          </div>
        )}

        <div>
          <div className="text-[10px] uppercase text-slate-500 mb-4 tracking-widest border-b border-white/10 pb-2">
            Povezani entiteti
          </div>
          <ul className="space-y-1">
            {relatedNodes.map((item, idx) => (
              <li key={idx} className="flex flex-col py-3 border-b border-white/5 group hover:bg-white/5 px-2 transition-all -mx-2 rounded">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold group-hover:text-cyan-400 transition-colors uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.node?.name}
                  </span>
                  <span className={`text-[10px] uppercase px-2 py-0.5 rounded ${
                    item.node?.type === 'Band' ? 'bg-cyan-500/10 text-cyan-400' : 
                    item.node?.type === 'Musician' ? 'bg-slate-500/10 text-slate-400' : 
                    'bg-fuchsia-500/10 text-fuchsia-400'
                  }`}>
                    {item.node?.type}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 italic">
                   {item.link.description || item.link.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="w-full py-4 mt-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all uppercase tracking-widest text-[10px]"
      >
        Zatvori panel
      </button>
    </motion.aside>
  );
};

export default DetailPanel;
