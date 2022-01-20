import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ImageWithDescription, RecipeCarousel } from 'blocks';
import {
  setRecipeTitle,
  fetchRecipeList,
} from 'redux-toolkit/slices/recipeSlice';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const set = () => dispatch(fetchRecipeList());
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main
        colorInvert={false}
        isParentPage={true}
        isContent={false}
        menuColor={'text.secondary'}
      >
        <ImageWithDescription imagePosition={'left'} />
        <Container>
          <RecipeCarousel isHome={true} />
        </Container>
        <Box bgcolor={'secondary.main'} sx={{ p: 4 }}>
          <Typography
            color={'text.secondary'}
            variant={'h5'}
            align={'center'}
            sx={{ p: 4 }}
            gutterBottom
          >
            When practiced to its fullest, mindful eating turns a simple meal
            into a spiritual experience, giving us a deep appreciation of all
            that went into the meal’s creation as well a deep understanding of
            the relationship between the food on our table, our own health, and
            our planet’s health.
          </Typography>
          <Typography color={'text.secondary'} variant={'h5'} align={'center'}>
            Nhat Hanh
          </Typography>
          <Button onClick={set}>aaaa</Button>
        </Box>
      </Main>
    </Box>
  );
};

export default Home;
