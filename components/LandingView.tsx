
import React, { useState, useEffect } from 'react';

const LandingView: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [spots, setSpots] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots(s => (s > 3 ? s - 1 : s));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-12 animate-in py-12 px-4 max-w-5xl mx-auto relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full mb-4">
        <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping"></span>
        <span className="text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">IA Ativa: 1,402 usuários mapeando agora</span>
      </div>

      <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] mb-8">
        EXISTE UMA <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">VERSÃO ELITE</span><br/>
        DE VOCÊ EM 2025.
      </h1>

      <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
        Nossa IA detectou que 97% das pessoas falham por ignorar o <span className="text-white font-bold underline decoration-cyan-500">"Ponto Cego de Carreira"</span>. Você está pronto para ver o seu blueprint real?
      </p>

      <div className="flex flex-col items-center gap-8 py-10">
        <button 
          onClick={onStart} 
          className="pulse px-16 py-10 bg-white text-black rounded-3xl font-black text-3xl hover:scale-105 transition-all active:scale-95 shadow-[0_0_100px_rgba(255,255,255,0.2)] flex flex-col items-center"
        >
          DESCOBRIR MEU MAPA
          <span className="text-[10px] text-slate-500 uppercase tracking-widest block mt-2 font-bold">Tempo estimado: 2 minutos</span>
        </button>
        
        <div className="bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl">
          <p className="text-red-400 text-sm font-bold animate-pulse uppercase tracking-tighter">
            Restam apenas {spots} vagas para o Mapeamento Gratuito de hoje.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all pt-10 border-t border-slate-800/50">
        {['Forbes Tech', 'Wired', 'MIT Insight', 'Fast Company'].map(m => (
          <div key={m} className="text-lg font-black text-slate-500 uppercase tracking-tighter italic">{m}</div>
        ))}
      </div>
    </div>
  );
};

export default LandingView;
