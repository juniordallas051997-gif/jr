
import { Question } from './types';

export const EVOLUTION_QUESTIONS: Question[] = [
  { id: 1, type: 'personal', text: "Qual o seu foco inegociável para os próximos 12 meses?", options: ["Liberdade Financeira Total", "Equilíbrio e Saúde Mental", "Domínio de Carreira", "Experiências e Viagens"], weight: 10 },
  { id: 2, type: 'mindset', text: "Como você lida com obstáculos inesperados?", options: ["Analiso e crio novo plano", "Fico ansioso mas continuo", "Busco ajuda externa imediata", "Tento ignorar e sigo o fluxo"], weight: 15 },
  { id: 3, type: 'professional', text: "O que te impede de dobrar seus ganhos hoje?", options: ["Falta de estratégia clara", "Medo do próximo nível", "Ambiente limitante", "Procrastinação"], weight: 20 },
  { id: 4, type: 'lifestyle', text: "Como é o seu ambiente de trabalho/vida?", options: ["Focado e minimalista", "Bastante caótico", "Funcional mas cansativo", "Não tenho local fixo"], weight: 15 },
  { id: 5, type: 'personal', text: "Quanto você investe em si mesmo mensalmente?", options: ["Mais de 20% da renda", "Apenas o necessário", "Quase nada ultimamente", "Quero mas não consigo"], weight: 25 },
  { id: 6, type: 'professional', text: "Qual a sua maior ambição profissional para 2025?", options: ["Liderar um novo mercado", "Trocar de carreira por propósito", "Aumentar autoridade digital", "Apenas estabilidade"], weight: 20 },
  { id: 7, type: 'mindset', text: "Você se sente no controle do seu tempo?", options: ["Totalmente, domino minha agenda", "Sou escravo das tarefas", "Tento equilibrar mas falho", "O tempo me controla"], weight: 15 },
  { id: 8, type: 'lifestyle', text: "Qual hábito você precisa eliminar com urgência?", options: ["Uso excessivo de telas", "Alimentação inflamatória", "Falta de exercícios", "Dormir tarde/acordar tarde"], weight: 10 },
  { id: 9, type: 'professional', text: "Se você fosse um ativo, estaria em alta ou baixa?", options: ["Em forte valorização", "Estável no momento", "Precisando de reestruturação", "Em queda livre"], weight: 20 },
  { id: 10, type: 'personal', text: "Sua vida hoje reflete quem você quer ser daqui a 5 anos?", options: ["Sim, estou no trilho", "Parcialmente", "Não, preciso mudar tudo", "Estou perdido no caminho"], weight: 30 }
];
