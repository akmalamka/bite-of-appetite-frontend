import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { WritingList } from './components';
import { SearchFilterBar } from 'blocks';

const FoodForThought = (): JSX.Element => {
  return (
    <Main colorInvert={false}>
      <SearchFilterBar isRecipeList={false} />
      <Box>
        <Container>
          <WritingList />
        </Container>
      </Box>
    </Main>
  );
};

export default FoodForThought;
