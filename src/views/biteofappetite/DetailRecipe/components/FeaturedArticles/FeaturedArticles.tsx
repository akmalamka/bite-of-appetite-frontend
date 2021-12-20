import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useWindowDimensions from './useWindowDimensions';
import SwipeableViews from 'react-swipeable-views';
import RecipeDescription from './RecipeDescription';
import DetailTabs from './DetailTabs';
import { TabLabel, a11yProps } from './DetailTabs';

const FeaturedArticles = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { height } = useWindowDimensions();
  const [indexMobile, setIndexMobile] = useState(0);
  const [indexTab, setIndexTab] = useState(0);

  const handleChangeIndexMobile = (index: number) => {
    setIndexMobile(index);
  };

  const handleChangeTab = (event, newValue) => {
    setIndexTab(newValue);
    console.log('index', newValue);
    if (indexMobile == 2) {
      handleChangeIndexMobile(3);
    }
  };

  const handleChangeIndexTab = (index: number) => {
    console.log('index', index);
    setIndexTab(index);
  };

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
            <RecipeDescription
              index={0}
              onChangeIndexMobile={handleChangeIndexMobile}
            />
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
            <DetailTabs
              indexTab={indexTab}
              onChangeTab={handleChangeTab}
              onChangeIndexTab={handleChangeIndexTab}
            />
          </Box>
        </Box>
      ) : (
        <SwipeableViews
          containerStyle={{ height: height - 90 }}
          axis="y"
          index={indexMobile}
          onChangeIndex={handleChangeIndexMobile}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: 1,
              height: height - 90,
              flexDirection: 'column',
            }}
          >
            <RecipeDescription
              index={0}
              onChangeIndexMobile={handleChangeIndexMobile}
            />
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
            <RecipeDescription
              index={1}
              onChangeIndexMobile={handleChangeIndexMobile}
            />
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
            <Tabs
              value={indexMobile == 2 ? -1 : indexTab}
              onChange={handleChangeTab}
              TabIndicatorProps={{ style: { display: 'none' } }}
              aria-label="ingredients and steps tab"
              centered={false}
              variant={'fullWidth'}
            >
              <Tab label={<TabLabel>Ingredients</TabLabel>} {...a11yProps(0)} />
              <Tab label={<TabLabel>Steps</TabLabel>} {...a11yProps(1)} />
            </Tabs>
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
            <DetailTabs
              indexTab={indexTab}
              onChangeTab={handleChangeTab}
              onChangeIndexTab={handleChangeIndexTab}
            />
          </Box>
        </SwipeableViews>
      )}
    </Box>
  );
};

export default FeaturedArticles;
