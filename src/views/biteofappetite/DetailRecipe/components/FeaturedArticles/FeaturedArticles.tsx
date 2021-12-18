import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useWindowDimensions from './useWindowDimensions';
import SwipeableViews from 'react-swipeable-views';
import RecipeDescription from './RecipeDescription';
import DetailTabs from './DetailTabs';

const mock = ['Easy', 'Indonesian', 'Chicken', 'Dessert'];

const FeaturedArticles = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { height } = useWindowDimensions();

  return (
    <Box>
      {isMd ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1 / 2,
              height: 1,
              flexDirection: 'column',
              mr: 2,
              justifyContent: 'space-evenly',
            }}
          >
            <RecipeDescription />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1 / 2,
              height: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <DetailTabs />
          </Box>
        </Box>
      ) : (
        <SwipeableViews containerStyle={{ height: height - 58 }} axis="y">
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 58,
              flexDirection: 'column',
              mr: 1,
              justifyContent: 'space-evenly',
            }}
          >
            <RecipeDescription />
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 58,
              flexDirection: 'column',
              mr: 1,
              justifyContent: 'space-evenly',
            }}
          >
            <Box>
              <Typography
                variant={'h3'}
                fontWeight={700}
                sx={{
                  paddingY: 1,
                }}
                align={'center'}
              >
                Gluten-Free Carrot Cake
              </Typography>
              <Typography
                variant={'subtitle1'}
                color="text.secondary"
                fontWeight={500}
                align={'center'}
              >
                Almond flour is a wonderfully sweet, nutty complement for fresh
                carrots, walnuts, and raisins.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="overline"
                color="text.primary"
                align="center"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  fontWeight: 400,
                  fontSize: 10,
                  width: 1,
                }}
              >
                Inspired By Joshua Weissman
              </Typography>
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
                  // paddingY: 1,
                  letterSpacing: 0.4,
                  // fontWeight: 400,
                  // fontSize: 14,
                }}
              >
                Total Time: 60 minutes
              </Typography>
            </Box>
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
                    mt: 1,
                  }}
                />
              ))}
            </Box>
            <IconButton sx={{ p: 0 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 58,
              flexDirection: 'column',
              mr: 1,
              justifyContent: 'space-evenly',
            }}
          >
            <Box>
              <Typography
                variant={'h4'}
                fontWeight={700}
                sx={{
                  paddingY: 1,
                }}
                align={'center'}
              >
                Story About This Dish
              </Typography>
              <Typography
                variant={'subtitle1'}
                color="text.secondary"
                fontWeight={500}
                align={'center'}
              >
                Almond flour is a wonderfully sweet, nutty complement for fresh
                carrots, walnuts, and raisins.
              </Typography>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 58,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <DetailTabs />
          </Box>
        </SwipeableViews>
      )}
    </Box>
  );
};

export default FeaturedArticles;
