import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFound = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Main>
      <Box
        // sx={{
        //   width: 1,
        //   height: 1,
        //   overflow: 'hidden',
        // }}
        display={'flex'}
        alignItems={'center'}
        minHeight={{ xs: 550, md: 'calc(100vh - 58px)' }}
        sx={{
          // flex: { xs: '0 0 100%', md: '0 0 50%' },
          // position: 'relative',
          // maxWidth: { xs: '100%', md: '50%' },
          // order: { xs: 1, md: 2 },
          // height: { xs: '550', md: 'calc(100vh - 58px)' },
          width: 1,
          // overflow: 'hidden',
        }}
        bgcolor={'#ff8261'}
      >
        <Container>
          <Box>
            <Typography
              color={'text.secondary'}
              variant="h1"
              component={'h1'}
              align={'center'}
              sx={{ fontWeight: 700, fontSize: { xs: 80, md: 150 } }}
            >
              404
            </Typography>
            <Box display={'flex'} justifyContent={'center'}>
              <Typography
                variant="h4"
                component="p"
                color="text.secondary"
                align={'center'}
                fontWeight={600}
                marginRight={1}
              >
                Oops! Looks like you followed
              </Typography>
              <Typography
                fontFamily={'Yournotes'}
                variant="h4"
                component="p"
                color="text.secondary"
                align={'center'}
              >
                a bad link.
              </Typography>
            </Box>

            <Box marginTop={4} display={'flex'} justifyContent={'center'}>
              <Button
                component={Link}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 10,
                  border: 2,
                  borderColor: 'primary.main',
                  my: 2,
                  px: 2,
                  '&:hover': {
                    border: 2,
                  },
                }}
                href={'/'}
              >
                <Typography
                  variant="button"
                  color="text.primary"
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: 1.2,
                    fontWeight: 400,
                  }}
                >
                  Back Home
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
        {/* <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <Box>
                  <Typography
                    variant="h1"
                    component={'h1'}
                    align={isMd ? 'left' : 'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    404
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    align={isMd ? 'left' : 'center'}
                  >
                    Oops! Looks like you followed a bad link.
                  </Typography>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <Button
                      component={Link}
                      variant="outlined"
                      color="primary"
                      sx={{
                        borderRadius: 10,
                        border: 2,
                        borderColor: 'primary.main',
                        my: 2,
                        px: 2,
                        '&:hover': {
                          border: 2,
                        },
                      }}
                      href={'/'}
                    >
                      <Typography
                        variant="button"
                        color="text.primary"
                        sx={{
                          textTransform: 'uppercase',
                          letterSpacing: 1.2,
                          fontWeight: 400,
                        }}
                      >
                        Back Home
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
                minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box
                        component={LazyLoadImage}
                        effect="blur"
                        src={
                          'https://assets.bonappetit.com/photos/6192e2a9cac90dfe15673f38/1:1/w_2240,c_limit/Prime-Rib-Roast.jpg'
                        }
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container> */}
      </Box>
    </Main>
  );
};

export default NotFound;
