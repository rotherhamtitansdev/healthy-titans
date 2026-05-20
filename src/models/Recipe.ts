/* eslint-disable max-len */
export type RecipeMealType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export interface RecipeItem {
  key: number;
  id: string;
  name: string;
  description: string;
  tags?: string[];
  firebaseName?: string;
  firebaseVideoName?: string;
  calories?: string;
  ingredients: string[];
  method: string[];
  prepTime?: string;
  servings?: string;
  mealType: RecipeMealType;
}

type UnknownRecord = Record<string, unknown>;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const asString = (value: unknown): string | undefined => {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  return undefined;
};

const asBoolean = (value: unknown): boolean | undefined => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }
  return undefined;
};

const isHttpUrl = (value: string): boolean => /^https?:\/\//i.test(value);

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toTextList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter(isNonEmptyString).map((item) => item.trim());
  }

  if (isNonEmptyString(value)) {
    return value
      .split(/\r?\n|•|;|\|/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  return [];
};

const getRecipeId = (item: UnknownRecord, name: string, index: number): string => {
  const explicitId = asString(item.id) || asString(item.slug);
  if (explicitId) return slugify(explicitId);

  const legacyPath = asString(item.path);
  if (legacyPath && !isHttpUrl(legacyPath)) return slugify(legacyPath);

  const nameSlug = slugify(name);
  if (nameSlug) return nameSlug;

  const docId = asString(item.docId);
  if (docId) return slugify(docId);

  return `recipe-${index + 1}`;
};

const getFallbackIngredients = (name: string): string[] => [
  `2 cups base ingredient for ${name.toLowerCase()}`,
  "1 tbsp olive oil",
  "1 onion, finely chopped",
  "2 cloves garlic, minced",
  "1 tsp mixed herbs",
  "Salt and pepper to taste",
];

const getFallbackMethod = (name: string): string[] => [
  "Prepare all ingredients and preheat oven or pan if needed.",
  "Heat oil in a pan and cook onion and garlic for 2 to 3 minutes.",
  `Add the main ingredients for ${name.toLowerCase()} and stir well.`,
  "Cook until ingredients are fully done, stirring occasionally.",
  "Taste, season, and serve with your preferred side.",
];

const getFallbackCalories = (index: number): string => String(320 + (index % 5) * 40);

const normalizeMealType = (value: string): RecipeMealType | undefined => {
  const lower = value.toLowerCase();
  if (lower.includes("breakfast")) return "Breakfast";
  if (lower.includes("lunch")) return "Lunch";
  if (lower.includes("dinner")) return "Dinner";
  if (lower.includes("snack")) return "Snacks";
  return undefined;
};

const inferMealType = (item: UnknownRecord, name: string, index: number): RecipeMealType => {
  const explicit = asString(item.mealType) || asString(item.category) || asString(item.meal);
  if (explicit) {
    const normalized = normalizeMealType(explicit);
    if (normalized) return normalized;
  }

  const lowerName = name.toLowerCase();
  if (/(breakfast|oat|porridge|toast|pancake|egg)/.test(lowerName)) return "Breakfast";
  if (/(lunch|sandwich|wrap|salad|soup)/.test(lowerName)) return "Lunch";
  if (/(dinner|curry|pasta|stir|rice|chicken)/.test(lowerName)) return "Dinner";
  if (/(snack|bar|bite|fruit|smoothie|yogurt)/.test(lowerName)) return "Snacks";

  const fallback: RecipeMealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  return fallback[index % fallback.length];
};

const inferDiabetesFriendly = (
  name: string,
  description: string,
  ingredients: string[]
): boolean => {
  const text = `${name} ${description} ${ingredients.join(" ")}`.toLowerCase();
  const highSugarKeywords = ["sugar", "syrup", "chocolate", "sweet", "dessert", "honey", "cake"];
  const fiberProteinKeywords = [
    "veg",
    "vegetable",
    "salad",
    "lentil",
    "bean",
    "chickpea",
    "oat",
    "wholegrain",
    "brown rice",
    "pasta",
    "fish",
    "chicken",
    "yogurt",
    "nuts",
    "seeds",
  ];

  const hasHighSugar = highSugarKeywords.some((kw) => text.includes(kw));
  const hasFiberProtein = fiberProteinKeywords.some((kw) => text.includes(kw));

  return !hasHighSugar && hasFiberProtein;
};

const getDiabetesFriendly = (
  item: UnknownRecord,
  name: string,
  description: string,
  ingredients: string[]
): boolean => {
  const explicit =
    asBoolean(item.diabetesFriendly) ??
    asBoolean(item.isDiabetesFriendly) ??
    asBoolean(item.diabeticFriendly);

  if (typeof explicit === "boolean") return explicit;

  return inferDiabetesFriendly(name, description, ingredients);
};

export const normalizeRecipeData = (data: unknown[]): RecipeItem[] =>
  data.reduce<RecipeItem[]>((acc, rawItem, index) => {
    if (!rawItem || typeof rawItem !== "object") return acc;

    const item = rawItem as UnknownRecord;
    const name = asString(item.name);
    if (!name) return acc;

    const ingredients = toTextList(item.ingredients || item.ingredientList || item.ingredientsList);
    const method = toTextList(item.method || item.steps || item.instructions || item.howToMake);

    const normalizedDescription =
      asString(item.description) ||
      `${name} is a simple, family-friendly meal with balanced ingredients and easy steps.`;

    const tags: string[] = [];
    if (getDiabetesFriendly(item, name, normalizedDescription, ingredients)) {
      tags.push("Diabetes friendly");
    }

    const normalized: RecipeItem = {
      key: typeof item.key === "number" ? item.key : index,
      id: getRecipeId(item, name, index),
      name,
      description: normalizedDescription,
      tags,
      firebaseName: asString(item.firebaseName),
      firebaseVideoName: asString(item.firebaseVideoName),
      calories: asString(item.calories) || asString(item.kcal) || getFallbackCalories(index),
      ingredients: ingredients.length > 0 ? ingredients : getFallbackIngredients(name),
      method: method.length > 0 ? method : getFallbackMethod(name),
      prepTime: asString(item.prepTime) || asString(item.preparationTime) || "20 mins",
      servings: asString(item.servings) || asString(item.serves) || "2 to 4",
      mealType: inferMealType(item, name, index),
    };

    acc.push(normalized);
    return acc;
  }, []);
