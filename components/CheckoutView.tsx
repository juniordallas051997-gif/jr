
import React, { useState, useEffect } from 'react';
import { AssessmentResult } from '../types';

const CheckoutView: React.FC<{ resultPreview: AssessmentResult, onComplete: () => void }> = ({ resultPreview }) => {
  const checkoutUrl = "https://pay.kirvano.com/bc8bec0b-14c3-406d-81ec-37a2a78eadf7";
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-in pb-24 max-w-6xl mx-auto px-4">
      <div className="flex-[1.6] space-y-8">
        <div className="glass p-12 rounded-[4rem] border-cyan-500/30">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.4em] border border-cyan-500/20 italic">Dados Confidenciais Gerados</div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-white tracking-tighter">
            VOCÊ ESTÁ <span className="text-cyan-400">OPERANDO</span> A <br/> 30% DO SEU POTENCIAL.
          </h2>
          
          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-10 font-light">
            O algoritmo identificou que sua principal barreira é a <span className="text-white font-bold italic">"{resultPreview.focusArea}"</span>. Sem ajustar isso, 2025 será apenas uma repetição de 2024.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="cyber-border p-8 rounded-3xl bg-slate-900/40">
              <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-[0.3em]">Nível de Realização 2025:</p>
              <div className="flex items-center gap-4">
                <span className="text-6xl font-black text-white blur-md">98%</span>
                <span className="text-[10px] font-black text-white bg-red-600 px-3 py-1 rounded-lg uppercase tracking-tighter">Bloqueado</span>
              </div>
            </div>
            <div className="cyber-border p-8 rounded-3xl bg-slate-900/40">
              <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-[0.3em]">Custo da Oportunidade:</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-white blur-md">R$ 150k+</span>
                <span className="text-[10px] font-black text-white bg-red-600 px-3 py-1 rounded-lg uppercase tracking-tighter">Bloqueado</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-cyan-400 uppercase text-xs tracking-[0.5em] mb-4">O PROTOCOLO INCLUI:</h4>
            {[
              {t: "Blueprint Neural 2025", d: "O guia passo a passo da sua transição profissional."},
              {t: "Diagnóstico de Ponto Cego", d: "A verdade que ninguém tem coragem de te dizer sobre sua postura."},
              {t: "Cronograma de Ações Trimestrais", d: "O que fazer em Jan, Abr, Jul e Out para não perder o foco."},
              {t: "BÔNUS: Mentoria em Áudio IA", d: "Acesso a um mentor treinado no seu perfil (Somente hoje)."}
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-7 rounded-[2.5rem] bg-slate-900/30 border border-slate-800/50 hover:bg-cyan-500/5 transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                </div>
                <div>
                  <p className="text-xl font-black text-slate-100 uppercase tracking-tighter">{item.t}</p>
                  <p className="text-sm text-slate-500 font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[450px]">
        <div className="sticky top-10 glass p-12 rounded-[4rem] border-cyan-500 border-[2px] shadow-[0_0_150px_rgba(6,182,212,0.15)] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="mono text-red-500 font-black text-xs animate-pulse">SESSÃO EXPIRA EM: {formatTime(timeLeft)}</span>
            </div>

            <div className="bg-red-500/10 text-red-400 text-[10px] font-black px-6 py-2.5 rounded-full inline-block mb-10 uppercase tracking-[0.2em] border border-red-500/20">
              ⚡ Oferta Especial para Novos Mapeamentos
            </div>
            
            <div className="space-y-4 mb-10">
                <p className="text-slate-500 text-sm font-bold line-through">VALOR ORIGINAL: R$ 497,00</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-white">R$</span>
                    <span className="text-[120px] font-black text-white leading-none tracking-tighter">29</span>
                    <span className="text-4xl font-black text-white">,90</span>
                </div>
                <p className="text-cyan-400 text-xs font-black uppercase tracking-widest mt-6">Acesso Imediato ao seu Futuro</p>
            </div>
            
            <button 
              onClick={() => window.open(checkoutUrl, '_blank')} 
              className="pulse w-full py-10 bg-cyan-600 hover:bg-cyan-500 text-white rounded-[2.5rem] font-black text-3xl transition-all scale-105 shadow-[0_30px_90px_-15px_rgba(6,182,212,0.7)] mb-10 flex items-center justify-center gap-4 active:scale-95"
            >
                LIBERAR MEU MAPA
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>

            <div className="space-y-8">
                <div className="flex justify-center gap-6 opacity-40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 mt-1" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="MC" className="h-6" />
                </div>
                <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-loose">
                    Seu mapa será enviado imediatamente para o e-mail cadastrado após a confirmação.
                </div>
            </div>
        </div>

        {/* Live Social Proof Notification */}
        <div className="mt-8 notification-anim">
          <div className="glass p-5 rounded-3xl flex items-center gap-4 border-l-4 border-cyan-500">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-cyan-500 text-xl">JD</div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Acabou de liberar o mapa:</p>
              <p className="text-sm font-bold text-white">João D. (São Paulo, SP)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
