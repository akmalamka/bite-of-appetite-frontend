/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { isMd } from 'utils/constants';

const WritingCard = (): JSX.Element => {
  const theme = useTheme();
  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box marginY={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {chosenWriting.title}
        </Typography>
      </Box>
      <Grid container columnSpacing={4} rowSpacing={2}>
        <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          display: 'flex',
          width: 1,
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography
          variant={'body1'}
          color="text.primary"
          // fontWeight={500}
          align={'justify'}
          paragraph
          sx={{ width: 1 / 2, m: 4 }}
        >
          {chosenWriting.story}
        </Typography>
        <Typography
          variant={'subtitle1'}
          color="text.primary"
          fontWeight={500}
          align={'justify'}
          paragraph
          sx={{ width: 1 / 2, m: 4 }}
        >
          {chosenWriting.story}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default WritingCard;
