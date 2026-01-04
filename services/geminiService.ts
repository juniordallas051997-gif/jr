
import { GoogleGenAI, Type } from "@google/genai";
import { AssessmentResult } from "../types";

export const generateDetailedAnalysis = async (score: number, answers: any): Promise<AssessmentResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O usuário respondeu a um questionário de mapeamento de destino 2025. Score de ambição: ${score}/180.
      Gere um laudo estratégico personalizado em Português (Brasil).
      Formato JSON obrigatório com:
      1. yearlyForecast (string motivadora e clara sobre o ano dele)
      2. personalEvolution (array de 3 strings com dicas de vida pessoal)
      3. professionalEvolution (array de 3 strings com dicas de carreira)
      4. powerPhrase (uma frase de impacto)
      5. energyLevel (number 0-100)
      6. focusArea (string curta)
      7. topSkills (array de 2 strings)
      8. careerRoadmap (array de 3 strings para o ano)`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            yearlyForecast: { type: Type.STRING },
            personalEvolution: { type: Type.ARRAY, items: { type: Type.STRING } },
            professionalEvolution: { type: Type.ARRAY, items: { type: Type.STRING } },
            powerPhrase: { type: Type.STRING },
            energyLevel: { type: Type.NUMBER },
            focusArea: { type: Type.STRING },
            topSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
            careerRoadmap: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["yearlyForecast", "personalEvolution", "professionalEvolution", "powerPhrase", "energyLevel", "focusArea", "topSkills", "careerRoadmap"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      yearlyForecast: "2025 será o seu ano de reconstrução estratégica. Prepare-se para colher os frutos de decisões ousadas feitas agora.",
      personalEvolution: ["Estabelecer limite de 1h de redes sociais", "Praticar atividade física em jejum", "Leitura de 20 páginas por dia"],
      professionalEvolution: ["Networking com 5 figuras de autoridade", "Dominar o uso de IA no seu fluxo diário", "Revisão semanal de metas financeiras"],
      powerPhrase: "A direção é mais importante que a velocidade.",
      energyLevel: 85,
      focusArea: "Mentalidade de Execução",
      topSkills: ["Foco Extremo", "Inteligência Emocional"],
      careerRoadmap: ["Q1: Planejamento e Poda", "Q2: Expansão e Visibilidade", "Q3: Colheita e Reinvestimento"],
    };
  }
};
