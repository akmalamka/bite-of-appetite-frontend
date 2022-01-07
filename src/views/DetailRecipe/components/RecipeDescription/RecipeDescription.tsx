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
  const [expandedIngredients, setExpandedIngredients] = useState<any>(false);
  const [expandedDirections, setExpandedDirections] = useState<any>(false);

  const handleChange = (panel, type) => (event, isExpanded) => {
    type === 'ingredients'
      ? setExpandedIngredients(isExpanded ? panel : false)
      : setExpandedDirections(isExpanded ? panel : false);
  };
  const chosenRecipe = useSelector((state: any) => state.recipe.chosenRecipe);
  return (
    <Grid container rowSpacing={2} columnSpacing={4} sx={{ paddingX: 2 }}>
      <Grid item xs={12}>
        <Divider sx={{ marginY: { xs: 2, md: 4 } }} />
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
        <Divider sx={{ marginY: { xs: 2, md: 4 } }} />
      </Grid>
      <Grid item xs={12} md={3}>
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
                  expanded={expandedIngredients === `panel${i}`}
                  onChange={handleChange(`panel${i}`, 'ingredients')}
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={
                      expandedIngredients === `panel${i}` ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
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
                      <Grid container key={j} sx={{ paddingY: 0.5 }}>
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
      <Grid item xs={12} md={9}>
        <Grid item xs={12} sx={{ paddingX: 2 }}>
          <Typography variant={'h6'} align={'left'}>
            Steps
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ marginY: 1, border: '1px solid' }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {chosenRecipe.directions.map((item, i) => (
              <Accordion
                key={i}
                sx={{
                  boxShadow: 'none',
                  width: 1,
                }}
                expanded={expandedDirections === `panel${i}`}
                onChange={handleChange(`panel${i}`, 'directions')}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={
                    expandedDirections === `panel${i}` ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )
                  }
                >
                  <Typography
                    fontFamily={'Inter'}
                    variant={'subtitle1'}
                    align={'left'}
                    sx={{ fontWeight: 600 }}
                  >
                    {i + 1}. {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                      <Typography fontFamily={'Inter'} variant={'body1'}>
                        {item.step}
                      </Typography>
                    </Grid>
                    {item.tips && (
                      <Grid item xs={12}>
                        <Typography
                          fontFamily={'Inter'}
                          variant={'body1'}
                          align={'left'}
                          sx={{ fontWeight: 500 }}
                        >
                          Tips: {item.tips}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeDescription;
