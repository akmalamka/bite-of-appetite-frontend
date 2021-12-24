import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { WritingCard } from './components';

const DetailWriting = (): JSX.Element => {
  return (
    <Main colorInvert={false}>
      <Box>
        <Container>
          <WritingCard />
        </Container>
      </Box>
    </Main>
  );
};

export default DetailWriting;
