import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import { RecipeDescription } from './components';
import { RecipeCarousel, ImageWithDescription } from 'blocks';

const DetailRecipe = (): JSX.Element => {
  const theme = useTheme();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box>
      <Main colorInvert={false}>
        <ImageWithDescription
          imagePosition={'left'}
          isContent={true}
          isRecipe={true}
        />

        <Container>
          <RecipeDescription />
        </Container>
        {/* <Box>
          <Container>
            <RecipeCard />
          </Container>
        </Box> */}
        <Container>
          <RecipeCarousel isHome={false} />
        </Container>
      </Main>
    </Box>
  );
};

export default DetailRecipe;
