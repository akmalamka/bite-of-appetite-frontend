import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { WritingList } from './components';
import { fetchWritingState } from 'redux/actions/writingActions';

const FoodForThought = (): JSX.Element => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchWritingState());
  // }, []);
  return (
    <Main colorInvert={false} isParentPage={true}>
      <Box display={'flex'} m={4} justifyContent={'space-between'}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            Food for Thought
          </Typography>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ color: 'primary.main', border: '1px solid' }} />
      </Box>
      <Box>
        <Container>
          <WritingList />
        </Container>
      </Box>
    </Main>
  );
};

export default FoodForThought;
