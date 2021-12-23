import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import ImageWithDescription from 'blocks/ImageWithDescription';
import { RecipeCarousel } from 'blocks/productGrids';

const Home = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <ImageWithDescription video={true} />
        <Container>
          <RecipeCarousel isHome={true} />
        </Container>
      </Main>
    </Box>
  );
};

export default Home;
