
export enum TestState {
  LANDING = 'LANDING',
  TESTING = 'TESTING',
  ANALYZING = 'ANALYZING',
  CHECKOUT = 'CHECKOUT',
  RESULT = 'RESULT'
}

export interface Question {
  id: number;
  type: 'personal' | 'professional' | 'mindset' | 'lifestyle';
  text: string;
  options: string[];
  weight: number;
}

export interface UserAnswers {
  [questionId: number]: number;
}

export interface AssessmentResult {
  yearlyForecast: string;
  personalEvolution: string[];
  professionalEvolution: string[];
  powerPhrase: string;
  energyLevel: number;
  focusArea: string;
  topSkills: string[];
  careerRoadmap: string[];
}
