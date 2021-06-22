/**
 * Assumptions:
 * - Calories for a single serving of each food
 * - Estimated caltories for an average serving
 */

export type FoodData = {
  calories: number;
};

export const foods: { [name: string]: FoodData } = {
  banana: {
    calories: 100,
  },
  chickenBreast: {
    calories: 150,
  },
  apple: {
    calories: 95,
  },
  grapes: {
    calories: 104,
  },
  orange: {
    calories: 62,
  },
  chickenNuggetsTen: {
    calories: 590,
  },
  chickenNuggetsFive: {
    calories: 295,
  },
  cheeseBurger: {
    calories: 410,
  },
  fries: {
    calories: 222,
  },
  pizzaSlice: {
    calories: 168,
  },
  milk: {
    calories: 149,
  },
  almondMilk: {
    calories: 40,
  },
  yogurt: {
    calories: 138,
  },
  beefSteak: {
    calories: 407,
  },
  chickenDrumstick: {
    calories: 131,
  },
  vanillaIceCream: {
    calories: 145,
  },
  chocolateIceCream: {
    calories: 156,
  },
  cola: {
    calories: 149,
  },
  water: {
    calories: 0,
  },
  appleJuice: {
    calories: 110,
  },
  potato: {
    calories: 165,
  },
  broccoli: {
    calories: 207,
  },
  onion: {
    calories: 34,
  },
  tomato: {
    calories: 20,
  },
  bagel: {
    calories: 252
  },
  englishMuffin: {
    calories: 129
  },
  pancake: {
    calories: 89
  }
};
