
import React, { useEffect, useState } from 'react';

const AnalyzingView: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = ["Processando matriz de ambição...", "Projetando cenários de carreira...", "Sincronizando biohacking pessoal...", "Consolidando seu Blueprint 2025..."];

  useEffect(() => {
    const int = setInterval(() => setStep(s => (s < steps.length - 1 ? s + 1 : s)), 1500);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="text-center space-y-12 animate-in py-20">
      <div className="relative w-40 h-40 mx-auto">
        <div className="absolute inset-0 border-[6px] border-cyan-500/10 rounded-full"></div>
        <div className="absolute inset-0 border-[6px] border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-8 bg-cyan-500/5 rounded-full animate-pulse flex items-center justify-center">
            <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
      </div>
      <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-white">{steps[step]}</h2>
    </div>
  );
};

export default AnalyzingView;
