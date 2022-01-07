import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import { ImageWithDescription } from 'blocks';
import { text } from 'stream/consumers';

const About = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main colorInvert={false} isTransparent={true} menuColor={'text.primary'}>
        <ImageWithDescription imagePosition={'right'} />
      </Main>
    </Box>
  );
};

export default About;
