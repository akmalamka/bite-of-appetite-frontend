export interface Recipe {
  // eslint-disable-next-line @typescript-eslint/ban-types
  image: string;
  description: string;
  title: string;
  tags: string[];
  time: string;
  foodPhotographyBy: string;
  foodStylingBy: string;
  recipeBy: string;
  inspiredByExist: boolean;
  inspiredBy: string;
  story: string;
  date: string;
  serves: number;
  isIngredientsWithComponent: boolean;
  ingredients: Ingredient[];
  directions: Direction[];
}

interface Ingredient {
  name: string;
  measurement: number;
  unit: string;
}

interface Direction {
  title: string;
  step: string;
  tips: string;
}
