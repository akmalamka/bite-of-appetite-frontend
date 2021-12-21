import React from 'react';
import Typed from 'react-typed';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { VideoSection } from '../index';

import Container from 'components/Container';

const Hero = (): JSX.Element => {
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
            <Box maxWidth={{ xs: 1, sm: 1, md: 1, lg: '55%' }} m={4}>
              <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Welcome to my food
                <br />{' '}
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
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
              >
                Food is my way to tell stories and connect with people who share
                the same passion as I do. Whether it’s because you’re hungry at
                midnight or trying to learn how to cook, I hope you enjoy
                watching my content and recipes.
              </Typography>
            </Box>
            <Box maxWidth={{ xs: 1, sm: 1, md: 1, lg: '45%' }}>
              <Box display={'flex'} m={4}>
                <VideoSection />
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

export default Hero;
