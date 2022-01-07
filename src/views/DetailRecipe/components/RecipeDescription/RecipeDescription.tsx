import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useWindowDimensions from 'utils/useWindowDimensions';
import SwipeableViews from 'react-swipeable-views';
import DetailTabs from './DetailTabs';
import { TabLabel, a11yProps } from './DetailTabs';
import { RecipeCarousel } from 'blocks';
import './accordion.css';

const RecipeDescription = (): JSX.Element => {
  const [expanded, setExpanded] = useState<any>(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const chosenRecipe = useSelector((state: any) => state.recipe.chosenRecipe);
  return (
    <Grid container rowSpacing={2} columnSpacing={4}>
      <Grid item xs={12}>
        <Divider sx={{ marginY: 4 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          fontFamily={'Inter'}
          variant={'body1'}
          align={'center'}
          sx={{ p: 4 }}
        >
          {chosenRecipe.story}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ marginY: 4 }} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Grid container sx={{ paddingX: 2 }}>
          <Grid item xs={6}>
            <Typography variant={'h6'} align={'left'}>
              Ingredients
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              display={'flex'}
              justifyContent={'flex-end'}
              fontFamily={'Inter'}
              variant={'overline'}
              sx={{ fontWeight: 600 }}
            >
              Serves {chosenRecipe.serves}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ marginY: 1, border: '1px solid' }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {chosenRecipe.ingredients.map((item, i) =>
              chosenRecipe.isIngredientsWithComponent ? (
                <Accordion
                  sx={{
                    boxShadow: 'none',
                    width: 1,
                  }}
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === `panel${i}` ? <RemoveIcon /> : <AddIcon />
                    }

                    // aria-controls={"`panel${i}a-content`"}
                    // id="panel1a-header"
                  >
                    <Typography
                      fontFamily={'Inter'}
                      variant={'subtitle1'}
                      align={'left'}
                    >
                      {item.component}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.ingredients.map((item, j) => (
                      // <Box key={j}>
                      //   <Typography fontFamily={'Inter'} variant={'subtitle1'}>
                      //     {item.name}
                      //   </Typography>
                      // </Box>
                      <Box key={j}>
                        <Grid container>
                          <Grid item xs={9}>
                            <Typography
                              fontFamily={'Inter'}
                              variant={'subtitle1'}
                            >
                              {item.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography
                              fontFamily={'Inter'}
                              variant={'subtitle1'}
                              align={'right'}
                            >
                              {item.measurement} {item.unit}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Grid item key={i} xs={12}>
                  <Grid container>
                    <Grid item xs={9}>
                      <Typography fontFamily={'Inter'} variant={'subtitle1'}>
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        fontFamily={'Inter'}
                        variant={'subtitle1'}
                        align={'right'}
                      >
                        {item.measurement} {item.unit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ),
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid item xs={6}>
          <Typography variant={'h6'} align={'left'}>
            Steps
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ marginY: 1, border: '1px solid' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeDescription;
