import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    recipes: Array<PageItem>;
    foodforthought: Array<PageItem>;
    about: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    recipes: recipePages,
    foodforthought: foodForThoughtPages,
    about: aboutPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'recipes'}
            id={'recipes-pages'}
            items={recipePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'food for thought'}
            id={'food-for-thought-pages'}
            items={foodForThoughtPages}
            colorInvert={colorInvert}
          />
        </Box>
        {/* <Box
          marginLeft={4}
          sx={{
            fontFamily: 'HVCocktail',
          }}
        >
          Raleway
        </Box> */}
        <Box marginLeft={4}>
          <NavItem
            title={'about'}
            id={'about-pages'}
            items={aboutPages}
            colorInvert={colorInvert}
          />
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
