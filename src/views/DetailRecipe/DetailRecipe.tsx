import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { RecipeDescription } from './components';
import { RecipeCarousel, ImageWithDescription } from 'blocks';
import {
  fetchRecipeByName,
  selectChosenRecipeTitle,
} from 'redux-toolkit/slices/recipeSlice';

const DetailRecipe = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const dispatch = useDispatch();
  const { recipeTitle } = useParams<{ recipeTitle: string }>();
  const recentChosenRecipeTitle = useSelector(selectChosenRecipeTitle);
  useEffect(() => {
    dispatch(fetchRecipeByName(recipeTitle));
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
