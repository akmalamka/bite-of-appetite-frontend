import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useWindowDimensions from 'utils/useWindowDimensions';
import SwipeableViews from 'react-swipeable-views';
import RecipeDescription from './RecipeDescriptionSwipeable';
import DetailTabs from './DetailTabs';
import { TabLabel, a11yProps } from './DetailTabs';
import { RecipeCarousel } from 'blocks';

const RecipeDetail = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { height } = useWindowDimensions();
  const [indexMobile, setIndexMobile] = useState(0);
  const [indexTab, setIndexTab] = useState(0);

  const chosenRecipe = useSelector((state: any) => state.recipe.chosenRecipe);

  const handleChangeIndexMobile = (index: number) => {
    setIndexMobile(index);
  };

  const handleChangeTab = (event, newValue) => {
    setIndexTab(newValue);
    if (indexMobile == 2) {
      handleChangeIndexMobile(3);
    }
  };

  const handleChangeIndexTab = (index: number) => {
    setIndexTab(index);
  };

  useEffect(() => {
    handleChangeIndexMobile(0);
  }, []);
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
              data={chosenRecipe}
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
              data={chosenRecipe}
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
              data={chosenRecipe}
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
              data={chosenRecipe}
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
                justifyContent: 'space-evenly',
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
                align={'justify'}
                px={2}
                paragraph
              >
                {chosenRecipe.story}
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
              data={chosenRecipe}
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
            <RecipeCarousel isHome={false} />
          </Box>
        </SwipeableViews>
      )}
    </Box>
  );
};

export default RecipeDetail;
