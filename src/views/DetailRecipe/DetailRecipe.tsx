import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { fetchRecipeState } from 'redux/actions/recipeActions';
import { RecipeDescription } from './components';
import { RecipeCarousel, ImageWithDescription } from 'blocks';

const DetailRecipe = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipeState());
  }, []);

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
