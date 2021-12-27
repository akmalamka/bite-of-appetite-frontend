/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WritingCard = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );

  return (
    <Box>
      <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {chosenWriting.title}
        </Typography>
      </Box>
      <Box
        sx={{
          '& .lazy-load-image-loaded': {
            display: 'flex !important',
            justifyContent: 'center',
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={chosenWriting.image}
          alt="..."
          effect="blur"
          sx={{
            objectFit: 'cover',
            maxHeight: { xs: 300, sm: 450, md: 600 },
            maxWidth: { xs: 400, sm: 600, md: 900 },
            borderRadius: 2,
            justifyContent: 'center',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          rowGap: 1,
          m: 4,
        }}
      >
        <Typography
          variant={isMd ? 'subtitle1' : 'h6'}
          color="text.secondary"
          fontWeight={500}
          align={'center'}
          sx={{ width: 3 / 5 }}
        >
          {chosenWriting.description}
        </Typography>
        <Typography
          variant="overline"
          color="text.primary"
          align="center"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            fontWeight: 400,
            fontSize: 10,
            width: isMd ? 1 / 2 : 1,
          }}
        >
          By {chosenWriting.writingsBy}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{
            letterSpacing: 0.4,
          }}
        >
          {chosenWriting.date}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: 1,
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant={'subtitle1'}
          color="text.primary"
          fontWeight={500}
          fontSize={{ sm: '18px', md: '21px' }}
          align={'justify'}
          paragraph
          sx={{ width: 3 / 5 }}
        >
          {chosenWriting.story}
        </Typography>
        <Typography
          variant={'subtitle1'}
          color="text.primary"
          fontWeight={500}
          fontSize={{ sm: '18px', md: '21px' }}
          align={'justify'}
          paragraph
          sx={{ width: 3 / 5 }}
        >
          {chosenWriting.story}
        </Typography>
      </Box>
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
