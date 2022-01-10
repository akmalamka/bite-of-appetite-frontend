import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { RecipeDescription } from './components';
import { RecipeCarousel, ImageWithDescription } from 'blocks';

const DetailRecipe = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box>
      <Main colorInvert={false}>
        <ImageWithDescription
          imagePosition={'left'}
          isContent={true}
          isRecipe={true}
        />

        <Container paddingY={2}>
          <RecipeDescription />
        </Container>
        <Container>
          <RecipeCarousel isHome={false} />
        </Container>
      </Main>
    </Box>
  );
};

export default DetailRecipe;
