import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './components';
import { RecipeCarousel } from 'blocks/productGrids';

const IndexView = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
        <Container>
          <RecipeCarousel isHome={true} />
        </Container>
      </Main>
    </Box>
  );
};

export default IndexView;
