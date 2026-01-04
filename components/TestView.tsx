
import React, { useState, useEffect } from 'react';
import { Question, UserAnswers } from '../types';

const TestView: React.FC<{ questions: Question[], onFinish: (a: UserAnswers) => void }> = ({ questions, onFinish }) => {
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState<UserAnswers>({});
  const [showInsight, setShowInsight] = useState(false);
  const [insightText, setInsightText] = useState("");

  const insights = [
    "Interessante... sua resposta sugere um perfil executor acima da média.",
    "Atenção: Detectamos uma pequena inconsistência entre ambição e rotina.",
    "Padrão de resiliência identificado. Você suporta mais pressão do que imagina.",
    "Seu Ponto Cego Profissional está começando a se tornar visível aqui...",
    "Quase lá. O algoritmo está finalizando sua projeção de ganhos para 2025."
  ];

  const handleSelect = (optIdx: number) => {
    const newAns = { ...ans, [questions[idx].id]: optIdx };
    setAns(newAns);
    
    if (idx % 2 === 0 && idx !== 0) {
      setInsightText(insights[Math.floor(Math.random() * insights.length)]);
      setShowInsight(true);
      setTimeout(() => {
        setShowInsight(false);
        setIdx(idx + 1);
      }, 2000);
    } else {
      if (idx < questions.length - 1) setIdx(idx + 1);
      else onFinish(newAns);
    }
  };

  const progress = ((idx + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[3.5rem] space-y-12 animate-in relative overflow-hidden">
      {/* Insight Overlay */}
      {showInsight && (
        <div className="absolute inset-0 z-50 bg-[#050b1a]/95 flex flex-col items-center justify-center p-10 text-center animate-in">
          <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-8"></div>
          <h3 className="text-cyan-400 font-black text-2xl uppercase tracking-widest animate-pulse">{insightText}</h3>
        </div>
      )}

      <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      
      <div className="flex justify-between items-center">
        <span className="mono text-cyan-500 text-xs font-bold tracking-widest bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 uppercase">
          Neural Scan: Questão {idx + 1}
        </span>
        <span className="text-slate-500 text-xs font-black uppercase tracking-widest">{Math.round(progress)}% Completo</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">{questions[idx].text}</h2>
      
      <div className="grid gap-4">
        {questions[idx].options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleSelect(i)} 
            className="w-full text-left p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all flex items-center gap-6 group active:scale-[0.98]"
          >
            <span className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-slate-500 group-hover:bg-cyan-600 group-hover:text-white transition-all text-2xl">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="text-xl md:text-2xl font-bold text-slate-200">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestView;
