import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import { fetchWritingState } from 'redux/actions/writingActions';
import { ImageWithDescription } from 'blocks';
import { WritingCard } from './components';

const DetailWriting = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWritingState());
  }, [dispatch]);
  return (
    <Box>
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
