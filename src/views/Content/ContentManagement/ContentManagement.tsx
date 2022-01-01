import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Page, WritingsField } from './components';
import RecipeField from './components/RecipeField';
import Main from 'layouts/Main';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe: boolean;
  isAddContent: boolean;
}

const ContentManagement = ({ isRecipe, isAddContent }: Props): JSX.Element => {
  return (
    <Main>
      <Page isRecipe={isRecipe} isAddContent={isAddContent}>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            It`s time to {isAddContent ? 'add' : 'edit'}{' '}
            {isRecipe ? 'recipe' : 'writing'}! Yeayy
          </Typography>
          <Box paddingY={2}>
            <Divider />
          </Box>
          {isRecipe ? <RecipeField /> : <WritingsField />}
        </Box>
      </Page>
    </Main>
  );
};

export default ContentManagement;
