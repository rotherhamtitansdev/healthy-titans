export type ChallengeCategory = "role" | "symptom" | "source" | "false";

export type NutrientActivityCard = {
  id: string;
  text: string;
  category: ChallengeCategory;
  emoji?: string;
};

export type NutrientActivityDocument = {
  slug: string;
  name: string;
  label: string;
  symbol: string;
  symbolBg: string;
  symbolEmoji: string;
  quickRole: string;
  quickSymptoms: string;
  quickSources: string;
  instructions: string;
  cards: NutrientActivityCard[];
};
