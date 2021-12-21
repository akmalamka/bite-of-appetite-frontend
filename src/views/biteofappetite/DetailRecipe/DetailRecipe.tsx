import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { RecipeCard } from './components';
import { RecipeCarousel } from 'blocks/productGrids';

const DetailRecipe = (): JSX.Element => {
  const theme = useTheme();
  window.scrollTo(0, 0);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Box>
        <Container>
          <RecipeCard />
        </Container>
      </Box>
      {isMd && (
        <Box>
          <Container>
            <RecipeCarousel isHome={false} />
          </Container>
        </Box>
      )}
    </Main>
  );
};

export default DetailRecipe;
