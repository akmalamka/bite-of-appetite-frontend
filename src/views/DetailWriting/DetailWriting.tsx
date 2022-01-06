import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ImageWithDescription } from 'blocks';
import { WritingCard } from './components';

const DetailWriting = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main colorInvert={true}>
        <ImageWithDescription
          imagePosition={'left'}
          isContent={true}
          isRecipe={false}
        />
        <Box marginX={{ xs: 4, md: 8 }} marginY={{ xs: 2, md: 4 }}>
          <WritingCard />
        </Box>
      </Main>
    </Box>
  );
};

export default DetailWriting;
