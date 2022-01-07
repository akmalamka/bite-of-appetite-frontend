import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const theme = useTheme();
export const PER_PAGE = 5;

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

export const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  defaultMatches: true,
});
export const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
  defaultMatches: true,
});

export const isXs = useMediaQuery(theme.breakpoints.down('sm'), {
  defaultMatches: true,
});
