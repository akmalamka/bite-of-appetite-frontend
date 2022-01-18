export const PER_PAGE = 5;

export const baseUrl = 'https://api-biteofappetite.com'; //ntar jadi http://api.biteofappetite.com
export const filterMenu = [
  {
    type: 'Cuisine',
    choice: ['Indonesian', 'Japanese', 'Korean', 'Italian', 'Fusion'],
  },
  {
    type: 'Food Type',
    choice: ['Appetizer', 'Main Course', 'Dessert', 'Snacks'],
  },
  {
    type: 'Main Ingredient',
    choice: ['Chicken', 'Beef', 'Seafood', 'Egg', 'Rice', 'Mango'],
  },
  { type: 'Difficulty', choice: ['Easy', 'Medium', 'Hard'] },
];

export const decimalMap = [
  { decimal: '0.25', fraction: '¼' },
  { decimal: '0.33', fraction: '⅓' },
  { decimal: '0.5', fraction: '½' },
  { decimal: '0.66', fraction: '⅔' },
  { decimal: '0.75', fraction: '¾' },
];
//buat ambil desimalnya
// const decimal = n - Math.floor(n)
