import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
  useEffect(() => {
    console.log(height);
  }, [height]);

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
            }}
          >
            <RecipeDescription index={0} />
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
        <SwipeableViews containerStyle={{ height: height - 90 }} axis="y">
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 90,
              flexDirection: 'column',
            }}
          >
            <RecipeDescription index={0} />
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 90,
              flexDirection: 'column',
            }}
          >
            <RecipeDescription index={1} />
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 90,
              flexDirection: 'column',
              mr: 1,
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                height: 1,
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
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
            <IconButton sx={{ pb: 1 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 90,
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
