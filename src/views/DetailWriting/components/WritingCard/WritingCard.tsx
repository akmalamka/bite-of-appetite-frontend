/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WritingCard = (): JSX.Element => {
  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        sx={{
          display: 'flex',
          width: 1 / 2,
          justifyContent: 'center',
          flexDirection: 'row',
          marginY: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant={'body1'}
          color="text.primary"
          fontFamily={'Inter'}
          align={'justify'}
          paragraph
          sx={{ lineHeight: 1.8 }}
        >
          {chosenWriting.story}
        </Typography>
      </Box>
    </Box>
  );
};

export default WritingCard;
