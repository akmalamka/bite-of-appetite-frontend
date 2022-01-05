import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import useWindowDimensions from 'utils/useWindowDimensions';
import VideoCard from '../VideoCard/VideoCard';
import Container from 'components/Container';
import { ButtonComponent } from 'blocks';

interface Props {
  video: boolean;
}

const ImageWithDescription = ({ video }: Props): JSX.Element => {
  const theme = useTheme();
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: -13,
      }}
    >
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: video ? 'row' : 'row-reverse' }}
        bgcolor={'primary.main'}
        height={{ xs: 1, md: height }}
      >
        <Box display={'flex'} width={{ xs: 1, md: 1 / 2 }}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={
              'https://assets.bonappetit.com/photos/61afad39d0b93410e18acd94/1:1/w_2240,c_limit/20211123%20Eggplant%20Biryani%20LEDE.jpg'
            }
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          width={{ xs: 1, md: 1 / 2 }}
          height={1}
          m={{ xs: 4, md: 0 }}
          p={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: { xs: 0, md: 13 },
          }}
        >
          <Box
            height={1 / 2}
            display={'flex'}
            justifyContent={'flex-end'}
            flexDirection={'column'}
          >
            <Typography variant="h2" color="text.secondary" gutterBottom>
              {video ? 'Welcome to' : 'About'}
              <br /> {video ? 'my food ' : ''}
              {video && (
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
          <Box
            height={1 / 2}
            width={{ xs: 2 / 3, md: video ? 1 / 2 : 2 / 3 }}
            display={'flex'}
            justifyContent={video ? 'flex-end' : 'flex-start'}
            flexDirection={'column'}
            rowGap={2}
          >
            <Typography
              variant="subtitle1"
              component="p"
              color="text.secondary"
              sx={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              {video
                ? 'Food is my way to tell stories and connect with people who share the same passion as I do. Whether its because youre hungry at midnight or trying to learn how to cook, I hope you enjoy watching my content and recipes.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
            </Typography>
            {!video && (
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
        </Box>
      </Box>
    </Box>
  );
};

export default ImageWithDescription;
