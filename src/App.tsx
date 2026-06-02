import { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import DetailPanel from './components/DetailPanel';
import ArchiveExplorer from './components/ArchiveExplorer';
import { Node } from './data';
import { AnimatePresence, motion } from 'motion/react';
import { Info, ListMusic, X, Eye, HelpCircle, Archive, Map } from 'lucide-react';

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState<'map' | 'archive'>('map');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050508] text-slate-200 font-sans flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Background Atmosphere */}
      <div className="bg-atmosphere">
        <div className="top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[120px]" />
        <div className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/15 blur-[150px]" />
        <div className="top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-900/10 blur-[100px]" />
      </div>

      {/* Top Navigation / Header */}
      <header className="h-16 flex items-center justify-between px-6 sm:px-8 bg-black/40 backdrop-blur-md border-b border-white/10 z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer" onClick={() => setShowWelcome(true)}>
            <span className="font-black text-xs text-white uppercase tracking-wider">YU</span>
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-black tracking-tight uppercase leading-none text-white flex items-center gap-2">
              Mreža Yu Scene
              <span className="text-[9px] bg-cyan-500/10 text-cyan-400 font-mono py-0.5 px-1.5 rounded-full border border-cyan-500/10 font-bold hidden xs:inline">ARHIV v3.2</span>
            </h1>
          </div>
        </div>

        {/* Tab switcher navigation in Header */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <div className="flex bg-white/5 border border-white/5 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('map')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${
                activeTab === 'map' 
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Map size={13} />
              <span className="hidden md:inline">Grafička Mreža</span>
            </button>
            <button 
              onClick={() => setActiveTab('archive')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${
                activeTab === 'archive' 
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Archive size={13} />
              <span className="hidden md:inline">Katalog Arhiva</span>
            </button>
          </div>

          <div className="h-5 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>

          <button 
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg bg-white/5 border border-white/5 hover:border-white/10" 
            onClick={() => setShowWelcome(true)}
            title="O Projektu"
          >
            <HelpCircle size={16} />
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex relative overflow-hidden z-10">
        {/* Dynamic content tab view */}
        <div className="flex-1 relative overflow-hidden h-full">
          <AnimatePresence mode="wait">
            {activeTab === 'map' ? (
              <motion.div
                key="map-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <NetworkGraph 
                  onNodeSelect={setSelectedNode} 
                  selectedNodeId={selectedNode?.id || null} 
                />
              </motion.div>
            ) : (
              <motion.div
                key="archive-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <ArchiveExplorer 
                  onNodeSelect={setSelectedNode} 
                  selectedNodeId={selectedNode?.id || null}
                  onSwitchToMap={() => setActiveTab('map')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar / Info Panel */}
        <AnimatePresence>
          {selectedNode && (
            <DetailPanel 
              node={selectedNode} 
              onClose={() => setSelectedNode(null)} 
              onNodeSelect={setSelectedNode}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Bar / Metadata with fully interactive category tags */}
      <footer className="h-12 bg-black/60 backdrop-blur-md border-t border-white/10 px-6 sm:px-8 flex items-center justify-between z-20 shrink-0">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase text-slate-500 font-mono font-bold">Način rada:</span>
            <div className="flex bg-white/5 rounded-full p-0.5 border border-white/5 text-xs font-bold">
              <button 
                onClick={() => setActiveTab('map')}
                className={`px-3 py-1 rounded-full text-[10px] transition-all uppercase ${
                  activeTab === 'map' 
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 font-black' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Mreža
              </button>
              <button 
                onClick={() => setActiveTab('archive')}
                className={`px-3 py-1 rounded-full text-[10px] transition-all uppercase ${
                  activeTab === 'archive' 
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 font-black' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Arhiv
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] uppercase text-slate-500 font-mono font-bold">Glavna središta:</span>
            <span className="text-[10px] text-slate-300 font-medium">Sarajevo, Zagreb, Beograd, Rijeka, Skoplje</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 font-mono">
          {selectedNode ? (
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              {selectedNode.type}: {selectedNode.name}
            </span>
          ) : (
            <span>ARHIV JUGOSLAVENSKOG ROCKA</span>
          )}
        </div>
      </footer>

      {/* Welcome Modal */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="max-w-2xl w-full bg-[#080810] border border-white/10 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Star details or subtle glow inside */}
              <div className="absolute top-0 right-0 p-4">
                 <button 
                  onClick={() => setShowWelcome(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-slate-500 hover:text-white border border-transparent hover:border-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-600 mb-6" />
                  <h2 className="text-4xl sm:text-6xl font-display text-white tracking-tighter leading-none uppercase italic">
                    Arhiv Yu <br /> <span className="text-cyan-400">Rocka</span>
                  </h2>
                </div>

                <div className="space-y-6 text-slate-300 font-serif text-lg sm:text-xl leading-relaxed">
                  <p>
                    Ovaj interaktivni prostor mapira složenu mrežu suradnji, utjecaja, obiteljskih i umjetničkih veza te članstava koja su gradila glazbeni identitet Jugoslavije.
                  </p>
                  <p className="text-sm sm:text-base text-slate-500">
                    Istražite kroz upečatljivu dvofaznu vizualizaciju: grafička mreža daje vizualni uvid u suodnose, dok pretraživi katalog pruža studioznu pretragu po gradovima, ulogama i diskografskim stavkama.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => {
                      setActiveTab('map');
                      setShowWelcome(false);
                    }}
                    className="flex-1 px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-cyan-500 hover:to-indigo-600 text-white font-bold uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2.5 rounded-lg shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
                  >
                    <Eye size={16} />
                    Istraži Mrežu
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('archive');
                      setShowWelcome(false);
                    }}
                    className="flex-1 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-bold uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2.5 rounded-lg border border-white/10 hover:border-white/20 active:scale-[0.98]"
                  >
                    <ListMusic size={16} className="text-cyan-400" />
                    Otvori Katalog
                  </button>
                </div>
              </div>

              {/* Decorative background visual elements */}
              <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
