import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';

import Container from 'components/Container';
import './placeholder.css';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Box
      position={'relative'}
      // sx={{
      //   backgroundImage:
      //     'url("https://assets.maccarianagency.com/backgrounds/img52.jpg")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   marginTop: -13,
      //   paddingTop: 13,
      //   '&:after': {
      //     position: 'absolute',
      //     content: '" "',
      //     width: '100%',
      //     height: '100%',
      //     top: 0,
      //     right: 0,
      //     bottom: 0,
      //     left: 0,
      //     zIndex: 1,
      //     background: '#161c2d',
      //     opacity: 0.6,
      //   },
      // }}
    >
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={{ xs: 150, sm: 200, md: 400 }}
        maxHeight={400}
      >
        <Box
          width={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            marginBottom={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              recipes
            </Typography>
          </Box>
          <Box
            padding={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
            marginTop={4}
          >
            <Box
              width={{ xs: 0.9, md: 0.6 }}
              sx={{
                display: 'flex',
                border: '3px solid',
                boxShadow: 2,
                borderRadius: 6,
                borderColor:
                  mode === 'light'
                    ? theme.palette.primary.light
                    : theme.palette.common.white,
              }}
            >
              <Box width={1} marginRight={1}>
                <TextField
                  sx={{
                    height: 54,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: '0 !important',
                    },
                    input: {
                      '&::placeholder': {
                        fontSize: {
                          xs: '14px',
                          md: '16px',
                        },
                        color:
                          mode === 'light'
                            ? theme.palette.text.primary
                            : theme.palette.common.white,
                      },
                    },
                  }}
                  variant="outlined"
                  size="medium"
                  placeholder="Search Nasi Goreng"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          sx={{
                            color:
                              mode === 'light'
                                ? theme.palette.primary.light
                                : theme.palette.common.white,
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  sx={{
                    mx: 2,
                    color:
                      mode === 'light'
                        ? theme.palette.primary.light
                        : theme.palette.common.white,
                  }}
                  color="primary"
                  size="medium"
                >
                  <FilterListIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        width={1}
        maxHeight={120}
        bottom={0}
        position={'absolute'}
        zIndex={2}
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
