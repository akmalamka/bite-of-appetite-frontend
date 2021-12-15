import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SwipeableViews from 'react-swipeable-views';
// import TabPanel from '@mui/lab/TabPanel';

const mock = ['Easy', 'Indonesian', 'Chicken'];

const ingredients = [
  {
    ingredients: 'Smoked Beef',
    measurement: 75,
    unit: 'gr',
  },
  {
    ingredients: 'All Purpose Flour',
    measurement: 150,
    unit: 'gr',
  },
  {
    ingredients: 'Chocolate',
    measurement: 150,
    unit: 'gr',
  },
  {
    ingredients: 'Salt',
    measurement: 5,
    unit: 'gr',
  },
  {
    ingredients: 'Vanilla',
    measurement: 2,
    unit: 'sprigs',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabLabelProps {
  children?: React.ReactNode;
}

function TabLabel(props: TabLabelProps) {
  const { children, ...other } = props;

  return (
    <Typography
      variant="overline"
      color="text.primary"
      sx={{
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        fontWeight: 400,
      }}
    >
      {children}
    </Typography>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const FeaturedArticles = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [value, setValue] = useState(0);
  const [portion, setPortion] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangePortion = (add) => {
    if (add) {
      setPortion(portion + 1);
    } else {
      setPortion(portion - 1);
    }
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 1 / 2,
          flexDirection: 'column',
          m: 2,
        }}
      >
        <Box
          sx={{
            // width: { xs: 1, md: '75%' },
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
              // maxHeight: { xs: 530, md: 1 },
              maxHeight: 370,
              borderRadius: 2,
              justifyContent: 'center',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="overline"
              color="text.primary"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                fontWeight: 400,
                fontSize: 10,
              }}
            >
              Food Photography and Food Styling by Muhammad Akmal
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant={'h4'}
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
          }}
        >
          <Typography
            variant="overline"
            color="text.primary"
            align="center"
            sx={{
              paddingY: 1,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              fontWeight: 400,
              fontSize: 10,
              width: 1 / 2,
            }}
          >
            By Muhammad Akmal
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ border: '1px solid', height: '16px' }}
          />
          <Typography
            variant="overline"
            color="text.primary"
            align="center"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              fontWeight: 400,
              fontSize: 10,
              width: 1 / 2,
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
            variant="subtitle1"
            color="text.secondary"
            sx={{
              paddingY: 1,
              letterSpacing: 0.4,
              fontWeight: 400,
              fontSize: 14,
            }}
          >
            September 20, 2021
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginY: 0.5,
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
                marginRight: 1,
                color:
                  mode === 'light'
                    ? theme.palette.text.primary
                    : theme.palette.common.white,
              }}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: 1 / 2,
          flexDirection: 'column',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="ingredients and steps tab"
            centered={isMd}
          >
            <Tab
              label={<TabLabel>Story Behind The Dish</TabLabel>}
              {...a11yProps(0)}
              wrapped
            />
            <Tab label={<TabLabel>Ingredients</TabLabel>} {...a11yProps(1)} />
            <Tab label={<TabLabel>Steps</TabLabel>} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            <Typography
              variant={'body1'}
              color="text.primary"
              m={2}
              sx={{
                lineHeight: 1.8,
              }}
              align={'left'}
              paragraph
            >
              Why choose between the two greats, vanilla and chocolate? Each
              bite of this art deco shortbread has just the right amount of
              both. Stacking the dough in alternating colors and then smushing
              them into a roll is as easy as making shapes with Play-Doh. The
              method makes for a fancy-looking swirl that novices can succeed at
              too.
              <br />
              <br />
              Why choose between the two greats, vanilla and chocolate? Each
              bite of this art deco shortbread has just the right amount of
              both. Stacking the dough in alternating colors and then smushing
              them into a roll is as easy as making shapes with Play-Doh. The
              method makes for a fancy-looking swirl that novices can succeed at
              too.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: 1,
                }}
              >
                <IconButton
                  disabled={portion == 0}
                  onClick={() => handleChangePortion(false)}
                >
                  <RemoveIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
                <Typography sx={{ marginX: 1 }}>Serves {portion}</Typography>
                <IconButton onClick={() => handleChangePortion(true)}>
                  <AddIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: 1 }}>
                {ingredients.map((item, i) => (
                  <div key={i}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        m: 1,
                        // justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          variant={'subtitle1'}
                          color="text.primary"
                          fontWeight={600}
                          align={'center'}
                          sx={{ pr: 1 }}
                          // sx={{ m: 1 }}
                        >
                          {item.ingredients}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          // display: 'flex',
                          flexGrow: 1,
                          transform: 'rotate(180deg)',
                          pt: 1,
                          // alignItems: 'flex-end',
                        }}
                      >
                        <Divider
                          // orientation="horizontal"
                          sx={{
                            border: '0.1px dashed',
                            // transform: 'rotate(90deg)',
                            // flexGrow: 1,
                            // width: 1,
                          }}
                          flexItem
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant={'subtitle1'}
                          color="text.primary"
                          fontWeight={500}
                          align={'center'}
                          sx={{ pl: 1 }}
                        >
                          {item.measurement} {item.unit}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
};

export default FeaturedArticles;
