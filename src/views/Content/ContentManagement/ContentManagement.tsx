import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Page, WritingsField } from './components';
import RecipeField from './components/RecipeField';
import Main from 'layouts/Main';
import {
  fetchRecipeByName,
  resetChosenRecipe,
} from 'redux-toolkit/slices/recipeSlice';
import {
  fetchWritingByName,
  resetChosenWriting,
} from 'redux-toolkit/slices/writingSlice';
// import { resetChosenRecipe } from 'redux/actions/recipeActions';
// import { resetChosenWriting } from 'redux/actions/writingActions';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe: boolean;
  isAddContent: boolean;
}

const ContentManagement = ({ isRecipe, isAddContent }: Props): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAddContent) {
      isRecipe ? dispatch(resetChosenRecipe()) : dispatch(resetChosenWriting());
    }
  }, []);

  return (
    <Main isParentPage={true}>
      <Page isRecipe={isRecipe} isAddContent={isAddContent}>
        <Box>
          <Typography
            fontFamily={'Inter'}
            variant="h6"
            gutterBottom
            fontWeight={700}
          >
            It`s time to {isAddContent ? 'add' : 'edit'}{' '}
            {isRecipe ? 'recipe' : 'writing'}! Yeayy
          </Typography>
          <Box paddingY={2}>
            <Divider />
          </Box>
          {isRecipe ? (
            <RecipeField isAddContent={isAddContent} />
          ) : (
            <WritingsField isAddContent={isAddContent} />
          )}
        </Box>
      </Page>
    </Main>
  );
};

export default ContentManagement;
