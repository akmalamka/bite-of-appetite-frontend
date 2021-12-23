import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import VideoCard from 'blocks/VideoCard';

import Container from 'components/Container';

interface Props {
  video: boolean;
}

const ImageWithDescription = ({ video }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Container>
          <Box
            display={'flex'}
            alignItems="center"
            flexDirection={{ xs: 'column', lg: 'row' }}
          >
            <Box
              maxWidth={{
                xs: 1,
                sm: 1,
                md: `${video ? 1 : '40%'}`,
                lg: `${video ? '55%' : '40%'}`,
              }}
              m={4}
            >
              <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                {video ? 'Welcome to my food' : 'about this'}
                <br />{' '}
                {video && (
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                    sx={{
                      background: `linear-gradient(180deg, transparent 82%, ${alpha(
                        theme.palette.secondary.main,
                        0.3,
                      )} 0%)`,
                    }}
                  >
                    <Typed
                      strings={['heaven.', 'repertoire.', 'wonderland.']}
                      typeSpeed={80}
                      loop={true}
                    />
                  </Typography>
                )}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
              >
                {video
                  ? 'Food is my way to tell stories and connect with people who share the same passion as I do. Whether its because youre hungry at midnight or trying to learn how to cook, I hope you enjoy watching my content and recipes.'
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
              </Typography>
            </Box>
            <Box
              maxWidth={{
                xs: 1,
                sm: 1,
                md: `${video ? 1 : '60%'}`,
                lg: `${video ? '45%' : '60%'}`,
              }}
            >
              <Box display={'flex'} m={4}>
                {video ? (
                  <VideoCard />
                ) : (
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
                      objectFit: 'contain',
                      maxHeight: { xs: 530, md: 1 },
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default ImageWithDescription;
