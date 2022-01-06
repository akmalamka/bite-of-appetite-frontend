import React from 'react';
import Typed from 'react-typed';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import useWindowDimensions from 'utils/useWindowDimensions';
import { ButtonComponent } from 'blocks';

interface Props {
  imagePosition: string;
  isRecipe: boolean;
  isContent?: boolean;
  data?: any;
}

const Description = ({
  imagePosition,
  isRecipe,
  isContent,
  data,
}: Props): JSX.Element => {
  const theme = useTheme();

  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );
  return (
    <Box
      width={{ xs: 1, md: 1 / 2 }}
      height={1}
      m={{ xs: 4, md: isContent ? 4 : 0 }}
      p={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: { xs: 0, md: 13 },
      }}
    >
      {isContent && isRecipe && <Box></Box>}
      {isContent && !isRecipe && (
        <Box
          display={'flex'}
          height={'90%'}
          sx={{
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          <Typography
            color={'text.secondary'}
            variant="subtitle1"
            align={'center'}
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            Food for Thought
          </Typography>
          <Typography
            color={'text.secondary'}
            variant="h4"
            align={'center'}
            sx={{
              fontWeight: 600,
            }}
          >
            Built of toasted nuts, creamy ricotta, and salty Parmesan, you don’t
            even need a food processor to make this riff on the normal pesto you
            know and love.
          </Typography>
          <Box>
            <Typography
              color={'text.secondary'}
              variant="overline"
              align={'center'}
              display={'flex'}
              justifyContent={'center'}
              sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
              }}
            >
              By Muhammad Akmal
            </Typography>
            <Typography
              color={'text.secondary'}
              variant="subtitle2"
              align={'center'}
              sx={{
                fontFamily: 'Inter',
                textTransform: 'uppercase',
              }}
            >
              September 20, 2021
            </Typography>
          </Box>
        </Box>
      )}
      {!isContent && (
        <Box
          height={1 / 2}
          display={'flex'}
          justifyContent={'flex-end'}
          flexDirection={'column'}
        >
          <Typography variant="h2" color="text.secondary" gutterBottom>
            {imagePosition === 'left' ? 'Welcome to' : 'About'}
            <br /> {imagePosition === 'left' ? 'my food ' : ''}
            {imagePosition === 'left' && (
              <Typography
                color={'text.secondary'}
                component={'span'}
                variant={'inherit'}
                fontFamily={'Yournotes'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                <Typed
                  strings={['heaven.', 'repertoire.', 'wonderland.']}
                  typeSpeed={70}
                  loop={true}
                />
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      {!isContent && (
        <Box
          height={1 / 2}
          width={{ xs: 2 / 3, md: imagePosition === 'left' ? 1 / 2 : 2 / 3 }}
          display={'flex'}
          justifyContent={imagePosition === 'left' ? 'flex-end' : 'flex-start'}
          flexDirection={'column'}
          rowGap={2}
        >
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontFamily: 'Inter', fontWeight: 400 }}
          >
            {imagePosition === 'left'
              ? 'Food is my way to tell stories and connect with people who share the same passion as I do. Whether its because youre hungry at midnight or trying to learn how to cook, I hope you enjoy watching my content and recipes.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
          </Typography>
          {imagePosition === 'right' && (
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:akmalmuhammad51@gmail.com';
                e.preventDefault();
              }}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <ButtonComponent text={'Let’s collab'} />
              </Box>
            </Link>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Description;
