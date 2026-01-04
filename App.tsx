
import React, { useState, useEffect } from 'react';
import { TestState, UserAnswers, AssessmentResult } from './types';
import { EVOLUTION_QUESTIONS } from './constants';
import { generateDetailedAnalysis } from './services/geminiService';
import LandingView from './components/LandingView';
import TestView from './components/TestView';
import AnalyzingView from './components/AnalyzingView';
import CheckoutView from './components/CheckoutView';
import ResultView from './components/ResultView';

const App: React.FC = () => {
  const [state, setState] = useState<TestState>(TestState.LANDING);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state === TestState.LANDING || state === TestState.TESTING) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [state]);

  const finishTest = async (finalAnswers: UserAnswers) => {
    setAnswers(finalAnswers);
    setState(TestState.ANALYZING);
    
    let rawScore = 70;
    EVOLUTION_QUESTIONS.forEach(q => {
      if (finalAnswers[q.id] === 0) rawScore += q.weight;
      else if (finalAnswers[q.id] === 1) rawScore += (q.weight / 1.4);
    });

    const data = await generateDetailedAnalysis(Math.round(rawScore), finalAnswers);
    setResult(data);
    setState(TestState.CHECKOUT);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#020617] overflow-x-hidden selection:bg-cyan-500/30">
      <div className="w-full max-w-6xl py-10">
        {state === TestState.LANDING && <LandingView onStart={() => setState(TestState.TESTING)} />}
        {state === TestState.TESTING && <TestView questions={EVOLUTION_QUESTIONS} onFinish={finishTest} />}
        {state === TestState.ANALYZING && <AnalyzingView />}
        {state === TestState.CHECKOUT && result && <CheckoutView resultPreview={result} onComplete={() => setState(TestState.RESULT)} />}
        {state === TestState.RESULT && result && <ResultView result={result} />}
      </div>

      {showNotification && (
        <div className="fixed bottom-10 left-10 z-[100] notification-anim">
          <div className="glass p-5 rounded-3xl border-l-4 border-emerald-500 shadow-2xl flex items-center gap-4 min-w-[300px]">
             <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
             </div>
             <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Geração Confirmada</p>
                <p className="text-sm font-bold text-white italic">"Fiquei assustada com a precisão..."</p>
                <p className="text-[9px] font-bold text-emerald-500 uppercase">Aline M. (Florianópolis, SC)</p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
