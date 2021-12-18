import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const mock = ['Easy', 'Indonesian', 'Chicken', 'Dessert'];

const RecipeDescription = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box component="div">
      <Box
        sx={{
          '& .lazy-load-image-loaded': {
            display: 'flex !important',
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={
            'https://assets.bonappetit.com/photos/61aa54511beaef6a9ff6d6b4/1:1/w_2240,c_limit/20211123%20Jalebi%20LEDE.jpg'
          }
          alt="..."
          effect="blur"
          sx={{
            objectFit: 'cover',
            maxHeight: { xs: 320, sm: 370 },
            borderRadius: 2,
            justifyContent: 'center',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="caption"
            color="text.primary"
            sx={{
              letterSpacing: 1.5,
              fontWeight: 400,
              fontSize: 10,
              pt: 1,
            }}
            align="center"
          >
            Food Photography and Food Styling by Muhammad Akmal
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant={isMd ? 'h4' : 'h3'}
          fontWeight={700}
          sx={{
            paddingY: 1,
          }}
          align={'center'}
        >
          Gluten-Free Carrot Cake
        </Typography>
        {isMd && (
          <Typography
            variant={'subtitle1'}
            color="text.secondary"
            fontWeight={500}
            align={'center'}
          >
            Almond flour is a wonderfully sweet, nutty complement for fresh
            carrots, walnuts, and raisins.
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: isMd ? 'row' : 'column',
        }}
      >
        <Typography
          variant="overline"
          color="text.primary"
          align="center"
          sx={{
            paddingY: isMd ? 1 : 0.5,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            fontWeight: 400,
            fontSize: 10,
            width: isMd ? 1 / 2 : 1,
          }}
        >
          By Muhammad Akmal
        </Typography>
        {isMd && (
          <Divider
            orientation="vertical"
            sx={{
              border: '1px solid',
              height: '16px',
            }}
          />
        )}
        {isMd && (
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
            Inspired By Joshua Weissman
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{
            letterSpacing: 0.4,
          }}
        >
          September 20, 2021
        </Typography>
      </Box>
      {!isMd && (
        <IconButton sx={{ p: 0 }}>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      )}
      {isMd && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginY: 0.5,
            flexWrap: 'wrap',
            columnGap: 1,
            rowGap: 1,
          }}
        >
          {mock.map((item) => (
            <Chip
              key={item}
              label={item}
              component="a"
              size={'medium'}
              variant={'outlined'}
              sx={{
                color:
                  mode === 'light'
                    ? theme.palette.text.primary
                    : theme.palette.common.white,
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RecipeDescription;
