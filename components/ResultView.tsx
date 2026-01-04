
import React from 'react';
import { AssessmentResult } from '../types';

const ResultView: React.FC<{ result: AssessmentResult }> = ({ result }) => (
  <div className="max-w-5xl mx-auto space-y-12 animate-in pb-32 px-4">
    <div className="glass-card p-16 rounded-[4rem] text-center border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-transparent">
        <h2 className="text-cyan-400 font-black text-[12px] uppercase tracking-[0.5em] mb-10">Blueprint de Evolução Liberado</h2>
        <div className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">"{result.yearlyForecast}"</div>
        <div className="w-full max-w-md mx-auto h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]" style={{ width: `${result.energyLevel}%` }}></div>
        </div>
        <p className="text-slate-400 text-lg font-bold">Nível de Realização Projetada: <span className="text-cyan-400">{result.energyLevel}%</span></p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-10 rounded-[3rem] space-y-8">
            <h3 className="text-blue-400 font-black uppercase text-[11px] tracking-widest">Evolução Profissional</h3>
            {result.professionalEvolution.map((p, i) => (
                <div key={i} className="flex gap-5 p-6 bg-slate-900/60 rounded-3xl border border-slate-800 text-white font-bold text-lg">
                    <span className="text-blue-500">0{i+1}</span> {p}
                </div>
            ))}
        </div>
        <div className="glass-card p-10 rounded-[3rem] space-y-8">
            <h3 className="text-emerald-400 font-black uppercase text-[11px] tracking-widest">Evolução Pessoal</h3>
            {result.personalEvolution.map((p, i) => (
                <div key={i} className="flex gap-5 p-6 bg-slate-900/60 rounded-3xl border border-slate-800 text-white font-bold text-lg">
                    <span className="text-emerald-500">0{i+1}</span> {p}
                </div>
            ))}
        </div>
    </div>

    <div className="glass-card p-12 rounded-[3.5rem] border-cyan-500/20">
        <h3 className="text-4xl font-black text-white mb-10">Roadmap Estratégico</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {result.careerRoadmap.map((step, i) => (
                <div key={i} className="p-10 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 hover:border-cyan-500/40 transition-all">
                    <div className="text-cyan-500 font-black text-4xl mb-6 opacity-40 italic">MÊS {i*4 + 1}</div>
                    <p className="text-slate-200 text-xl font-bold leading-relaxed">{step}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="text-center py-10 space-y-12">
        <p className="text-4xl md:text-6xl font-black italic text-slate-700">"{result.powerPhrase}"</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-14 py-8 bg-white text-slate-900 rounded-[2rem] font-black text-xl hover:bg-slate-100 transition-all active:scale-95 shadow-2xl">
                DOWNLOAD BLUEPRINT (PDF)
            </button>
            <button className="px-14 py-8 bg-cyan-600 text-white rounded-[2rem] font-black text-xl hover:bg-cyan-500 transition-all active:scale-95 shadow-2xl shadow-cyan-600/20">
                FALAR COM MENTOR IA
            </button>
        </div>
    </div>
  </div>
);

export default ResultView;
