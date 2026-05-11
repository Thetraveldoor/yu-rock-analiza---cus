import { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import DetailPanel from './components/DetailPanel';
import { Node } from './data';
import { AnimatePresence, motion } from 'motion/react';
import { Info, ListMusic, X } from 'lucide-react';

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050508] text-slate-200 font-sans flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Background Atmosphere */}
      <div className="bg-atmosphere">
        <div className="top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20" />
        <div className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 blur-[150px]" />
        <div className="top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-900/10 blur-[100px]" />
      </div>

      {/* Top Navigation / Header */}
      <header className="h-16 flex items-center justify-between px-8 bg-black/40 backdrop-blur-md border-b border-white/10 z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="font-black text-white">YU</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight uppercase">Mreža Yu Rock Zvuka</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest text-slate-400">
          <button className="text-cyan-400 border-b border-cyan-400 pb-1">Vizualizacija</button>
          <button className="hover:text-white transition-colors" onClick={() => setShowWelcome(true)}>O Projektu</button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex relative overflow-hidden z-10">
        {/* Network Visualizer */}
        <div className="flex-1 relative">
          <NetworkGraph 
            onNodeSelect={setSelectedNode} 
            selectedNodeId={selectedNode?.id || null} 
          />
        </div>

        {/* Sidebar / Info Panel */}
        <AnimatePresence mode="wait">
          {selectedNode && (
            <DetailPanel 
              node={selectedNode} 
              onClose={() => setSelectedNode(null)} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Bar / Metadata */}
      <footer className="h-12 bg-black/60 backdrop-blur-md border-t border-white/10 px-8 flex items-center justify-between z-20 shrink-0">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase text-slate-500">Kategorije:</span>
            <div className="flex bg-white/5 rounded-full p-0.5">
              <span className="px-3 py-1 rounded-full text-[10px] bg-white/10 text-white">Mreža</span>
              <span className="px-3 py-1 rounded-full text-[10px] text-slate-500">Arhiv</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] uppercase text-slate-500">Scena:</span>
            <span className="text-[10px] text-slate-300">Zagreb, Sarajevo, Beograd, Ljubljana, Rijeka</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono">
          {selectedNode ? `Fokus na: ${selectedNode.name}` : `ARHIV JUGOSLAVENSKOG ROCKA`}
        </div>
      </footer>

      {/* Welcome Modal */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-2xl w-full bg-[#050508] border border-white/10 p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                 <button 
                  onClick={() => setShowWelcome(false)}
                  className="p-2 text-slate-500 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="w-16 h-1 w-24 bg-gradient-to-r from-cyan-500 to-fuchsia-600 mb-6" />
                  <h2 className="text-6xl font-display text-white tracking-tighter leading-none uppercase italic">
                    Arhiv Yu <br /> <span className="text-cyan-400">Rocka</span>
                  </h2>
                </div>

                <div className="space-y-6 text-slate-400 font-serif text-xl leading-relaxed">
                  <p>
                    Ovaj projekt mapira složenu mrežu suradnji, utjecaja i članstava koja je gradila glazbeni identitet Jugoslavije.
                  </p>
                  <p className="text-lg">
                    Od alternativnih klupskih scena do stadionskih spektakala — istražite poveznice koje su preživjele vrijeme.
                  </p>
                </div>

                <button
                  onClick={() => setShowWelcome(false)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 rounded-md shadow-lg shadow-cyan-500/10"
                >
                  <ListMusic size={20} />
                  Pokreni arhiv
                </button>
              </div>

              {/* Decorative background elements */}
              <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

