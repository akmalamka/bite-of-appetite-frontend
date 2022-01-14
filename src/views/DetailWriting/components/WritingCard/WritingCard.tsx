/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WritingCard = (): JSX.Element => {
  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );
  const splitStory = chosenWriting.story
    .split('\n')
    .filter((item) => item.length > 0);
  // console.log('chosenwriting ', chosenWriting.story.split('\n'));
  console.log('splitStory ', splitStory);
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        width={{ xs: 0.9, sm: 3 / 4, md: 1 / 2 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginY: { xs: 2, md: 4 },
        }}
      >
        <Typography
          color={'text.primary'}
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 600,
          }}
          gutterBottom
        >
          {chosenWriting.title}
        </Typography>
        {splitStory.map((item, i) => (
          <Typography
            key={i}
            variant={'body1'}
            color="text.primary"
            fontFamily={'Inter'}
            align={'justify'}
            paragraph
            sx={{ lineHeight: 1.8 }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default WritingCard;
