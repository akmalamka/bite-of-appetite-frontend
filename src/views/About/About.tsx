import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import { ImageWithDescription } from 'blocks';

const About = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main
        colorInvert={false}
        isContent={false}
        menuColor={'text.primary'}
        logoColor={'white'}
        isParentPage={true}
      >
        <ImageWithDescription imagePosition={'right'} />
      </Main>
    </Box>
  );
};

export default About;
