import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SwipeableViews from 'react-swipeable-views';

const ingredients = [
  {
    name: 'Smoked Beef',
    measurement: 75,
    unit: 'gr',
  },
  {
    name: 'All Purpose Flour',
    measurement: 150,
    unit: 'gr',
  },
  {
    name: 'Chocolate',
    measurement: 150,
    unit: 'gr',
  },
  {
    name: 'Salt',
    measurement: 5,
    unit: 'gr',
  },
  {
    name: 'Vanilla',
    measurement: 2,
    unit: 'sprigs',
  },
];

const ingredientsWithComponent = [
  {
    component: 'Brown Butter Mousse',
    ingredients: [
      {
        name: 'Smoked Beef',
        measurement: 75,
        unit: 'gr',
      },
      {
        name: 'All Purpose Flour',
        measurement: 150,
        unit: 'gr',
      },
      {
        name: 'Chocolate',
        measurement: 150,
        unit: 'gr',
      },
      {
        name: 'Salt',
        measurement: 5,
        unit: 'gr',
      },
      {
        name: 'Vanilla',
        measurement: 2,
        unit: 'sprigs',
      },
    ],
  },
  {
    component: 'Tonka Bean Caramel',
    ingredients: [
      {
        name: 'Smoked Beef',
        measurement: 75,
        unit: 'gr',
      },
      {
        name: 'All Purpose Flour',
        measurement: 150,
        unit: 'gr',
      },
      {
        name: 'Chocolate',
        measurement: 150,
        unit: 'gr',
      },
      {
        name: 'Salt',
        measurement: 5,
        unit: 'gr',
      },
      {
        name: 'Vanilla',
        measurement: 2,
        unit: 'sprigs',
      },
    ],
  },
];

const direction = [
  {
    title: 'Time needed',
    step: 'Approximately 60 minutes including prep and cooking',
    tips: '',
  },
  {
    title: 'Mix dry ingredients',
    step:
      'Whisk 1⅓ cups flour and ¾ tsp. salt in a medium bowl. Whisk cocoa powder, remaining 1 cup flour, and remaining ¾ tsp. salt in another medium bowl. These are the bases for your chocolate and vanilla doughs.',
    tips: '',
  },
  {
    title: 'Mix wet ingredients',
    step:
      'Beat butter, granulated sugar, and powdered sugar in the bowl of a stand mixer on medium-high speed until light and fluffy, about 4 minutes. Add egg yolk and vanilla and beat until smooth. Divide mixture between the 2 bowls of dry ingredients (about 1 cup in each). Scrape vanilla mixture back into stand mixer bowl (save the mixing bowl) and beat on low speed just until combined. Return to reserved bowl. Repeat process with chocolate mixture.',
    tips: '',
  },
  {
    title: 'Make the batter',
    step:
      'Arrange 2 large sheets of parchment paper on a work surface. Dollop one-quarter of chocolate dough in the center of each sheet and pat into rough 6x2" rectangles. Dollop one-quarter of vanilla dough on top of each chocolate slab and pat into rectangles the same size and shape so that you have 2 layers each. Repeat entire process so you have 4 alternating layers. Tightly press stacked dough into cylinders about 1½" wide and 8" long, using the parchment to help you. Wrap logs in plastic wrap and chill until very firm, at least 2 hours.',
    tips: '',
  },
  {
    title: 'Prepare the protein',
    step:
      'Place racks in upper and lower thirds of oven; preheat to 350°. Working one at a time, unwrap dough and brush with egg. Carefully sprinkle surface with sanding sugar and roll logs in sugar to coat well (really press dough into sugar so it sticks). Slice into rounds a generous ¼" thick, rotating after every few cuts to keep slices round.',
    tips:
      'Arrange cookies on parchment-lined baking sheets, spacing 2" apart. Bake, rotating baking sheets top to bottom and front to back halfway through, until edges are just set, 12–14 minutes. Let cool on baking sheets.',
  },
  {
    title: 'Get ready to swimmin on hot oil pool!',
    step:
      'Dough can be made 3 days ahead; keep chilled. Cookies can be baked 5 days ahead; store airtight at room temperature.',
    tips: '',
  },
  {
    title: 'Make it fancy',
    step:
      'Beat butter, granulated sugar, and powdered sugar in the bowl of a stand mixer on medium-high speed until light and fluffy, about 4 minutes. Add egg yolk and vanilla and beat until smooth. Divide mixture between the 2 bowls of dry ingredients (about 1 cup in each). Scrape vanilla mixture back into stand mixer bowl (save the mixing bowl) and beat on low speed just until combined. Return to reserved bowl. Repeat process with chocolate mixture.',
    tips:
      'Third year making these. I usually make this GLUTEN FREE and they are Better than flour!!!! Bob`s one to one. Wonderful cookie, easy and so tasty. I am giving this batch away so I used wheat flour and they are salty, not too much though just not as good as Gluten free. I like to roll the dough so it is spiral, very pretty and use those hard to stick decorating xmas sprinkles, they stick great and look so festive!',
  },
  {
    title: 'One more stepp',
    step:
      'Dough can be made 3 days ahead; keep chilled. Cookies can be baked 5 days ahead; store airtight at room temperature.',
    tips: '',
  },
  {
    title: 'One last',
    step:
      'Beat butter, granulated sugar, and powdered sugar in the bowl of a stand mixer on medium-high speed until light and fluffy, about 4 minutes. Add egg yolk and vanilla and beat until smooth. Divide mixture between the 2 bowls of dry ingredients (about 1 cup in each). Scrape vanilla mixture back into stand mixer bowl (save the mixing bowl) and beat on low speed just until combined. Return to reserved bowl. Repeat process with chocolate mixture.',
    tips: '',
  },
  {
    title: 'Yeayyyy its done',
    step:
      'Arrange 2 large sheets of parchment paper on a work surface. Dollop one-quarter of chocolate dough in the center of each sheet and pat into rough 6x2" rectangles. Dollop one-quarter of vanilla dough on top of each chocolate slab and pat into rectangles the same size and shape so that you have 2 layers each. Repeat entire process so you have 4 alternating layers. Tightly press stacked dough into cylinders about 1½" wide and 8" long, using the parchment to help you. Wrap logs in plastic wrap and chill until very firm, at least 2 hours.',
    tips: '',
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

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  indexTab: number;
  onChangeTab: (event: React.SyntheticEvent, indexTab: number) => void;
  onChangeIndexTab: (indexTab: number) => void;
}

export function TabLabel(props: TabLabelProps) {
  const { children } = props;

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

function StepPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="steppanel"
      // hidden={value !== index}
      id={`step-panel-${index}`}
      aria-labelledby={`step-${index}`}
      {...other}
    >
      {/* {value === index && <Box width={1}>{children}</Box>} */}
      <Box width={1} sx={{ height: 500 }}>
        {children}
      </Box>
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const DetailTabs = ({
  indexTab,
  onChangeTab,
  onChangeIndexTab,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const SERVE = 2;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [portion, setPortion] = useState(SERVE);
  const [activeStep, setActiveStep] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const ref = useRef(null);

  const handleChangePortion = (add) => {
    if (add) {
      setPortion(portion + 1);
    } else {
      setPortion(portion - 1);
    }
  };

  const handleChangeActiveStep = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    if (indexTab == 2) {
      onChangeIndexTab(0);
    }
  }, [isMd]);

  // console.log(ref);
  // useLayoutEffect(() => {
  //   setBoxHeight(ref.current.clientHeight);
  // }, []);

  return (
    <Box component="div">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={indexTab}
          onChange={onChangeTab}
          aria-label="ingredients and steps tab"
          centered={isMd}
          variant={isMd ? 'standard' : 'fullWidth'}
        >
          <Tab
            label={
              <TabLabel>
                {isMd ? 'Story About This Dish' : 'Ingredients'}
              </TabLabel>
            }
            {...a11yProps(0)}
            wrapped
          />
          <Tab
            label={<TabLabel>{isMd ? 'Ingredients' : 'Steps'}</TabLabel>}
            {...a11yProps(1)}
          />
          {isMd && <Tab label={<TabLabel>Steps</TabLabel>} {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <SwipeableViews index={indexTab} onChangeIndex={onChangeIndexTab}>
        <TabPanel value={indexTab} index={0}>
          {isMd ? (
            <Typography
              variant={'body1'}
              color="text.primary"
              m={2}
              sx={{
                lineHeight: 1.8,
              }}
              align={'justify'}
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
          ) : (
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
                  disabled={portion == 1}
                  onClick={() => handleChangePortion(false)}
                >
                  <RemoveIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
                <Typography sx={{ marginX: 1 }}>Serves {portion}</Typography>
                <IconButton onClick={() => handleChangePortion(true)}>
                  <AddIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 1,
                  maxHeight: 455,
                  overflow: 'auto',
                }}
              >
                {ingredientsWithComponent.map((item, i) => (
                  <div key={i}>
                    <Typography
                      variant={'h6'}
                      color="text.primary"
                      sx={{ m: 1 }}
                    >
                      {item.component}
                    </Typography>
                    {item.ingredients.map((item, j) => (
                      <div key={j}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            m: 1,
                          }}
                        >
                          <Box>
                            <Typography
                              variant={'subtitle1'}
                              color="text.primary"
                              fontWeight={600}
                              align={'center'}
                              sx={{ pr: 1 }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              flexGrow: 1,
                              transform: 'rotate(180deg)',
                              pt: 1,
                            }}
                          >
                            <Divider
                              sx={{
                                border: '0.1px dashed',
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
                              {(item.measurement * portion) / SERVE} {item.unit}
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    ))}
                  </div>
                ))}
                {ingredients.map((item, i) => (
                  <div key={i}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        m: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant={'subtitle1'}
                          color="text.primary"
                          fontWeight={600}
                          align={'center'}
                          sx={{ pr: 1 }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          transform: 'rotate(180deg)',
                          pt: 1,
                        }}
                      >
                        <Divider
                          sx={{
                            border: '0.1px dashed',
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
          )}
        </TabPanel>
        <TabPanel value={indexTab} index={1}>
          {isMd ? (
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
                  disabled={portion == 1}
                  onClick={() => handleChangePortion(false)}
                >
                  <RemoveIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
                <Typography sx={{ marginX: 1 }}>Serves {portion}</Typography>
                <IconButton onClick={() => handleChangePortion(true)}>
                  <AddIcon sx={{ borderRadius: 2, border: '1px solid' }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 1,
                  maxHeight: 455,
                  overflow: 'auto',
                }}
              >
                {ingredientsWithComponent.map((item, i) => (
                  <div key={i}>
                    <Typography
                      variant={'h6'}
                      color="text.primary"
                      sx={{ m: 1 }}
                    >
                      {item.component}
                    </Typography>
                    {item.ingredients.map((item, j) => (
                      <div key={j}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            m: 1,
                          }}
                        >
                          <Box>
                            <Typography
                              variant={'subtitle1'}
                              color="text.primary"
                              fontWeight={600}
                              align={'center'}
                              sx={{ pr: 1 }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              flexGrow: 1,
                              transform: 'rotate(180deg)',
                              pt: 1,
                            }}
                          >
                            <Divider
                              sx={{
                                border: '0.1px dashed',
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
                              {(item.measurement * portion) / SERVE} {item.unit}
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    ))}
                  </div>
                ))}
                {ingredients.map((item, i) => (
                  <div key={i}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        m: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant={'subtitle1'}
                          color="text.primary"
                          fontWeight={600}
                          align={'center'}
                          sx={{ pr: 1 }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          transform: 'rotate(180deg)',
                          pt: 1,
                        }}
                      >
                        <Divider
                          sx={{
                            border: '0.1px dashed',
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
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                m: 1,
              }}
            >
              <Box
                sx={{
                  mr: isMd ? 4 : 2,
                  my: 1,
                  width: 6 / 7,
                  // width: 1,
                  // maxWidth: { xs: 230, sm: 550, md: 420 },
                }}
              >
                {direction.map((item, i) => (
                  <StepPanel key={i} value={activeStep} index={i}>
                    <Typography
                      variant={'h6'}
                      color="text.primary"
                      align={'justify'}
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant={'body1'}
                      color="text.primary"
                      align={'justify'}
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item.step}
                    </Typography>
                    {item.tips.length > 0 && (
                      <Typography
                        variant={'body2'}
                        color="text.primary"
                        align={'justify'}
                        sx={{ pt: 2, fontWeight: 500, lineHeight: 1.8 }}
                      >
                        Tips: {item.tips}
                      </Typography>
                    )}
                  </StepPanel>
                ))}
              </Box>
              <Box
                sx={{
                  width: 1 / 7,
                  maxHeight: 360,
                  overflow: 'auto',
                }}
              >
                {direction.map((item, i) => (
                  <Box
                    component="div"
                    key={i}
                    onClick={() => handleChangeActiveStep(i)}
                  >
                    <Fab
                      aria-label="add"
                      variant="circular"
                      size={isMd ? 'medium' : 'small'}
                      sx={{
                        border: i == activeStep ? '1px solid' : 'none',
                        // '.MuiFab-root': {
                        //   bgcolor:
                        //     mode == 'light'
                        //       ? theme.palette.common.white
                        //       : theme.palette.primary.dark,
                        // },
                        backgroundColor:
                          mode == 'light'
                            ? theme.palette.common.white
                            : theme.palette.primary.dark,
                        my: 0.5,
                        boxShadow: 'none',
                        // color:
                        //   mode === 'light'
                        //     ? theme.palette.text.primary
                        //     : theme.palette.common.white,
                      }}
                    >
                      <Typography variant="button" sx={{ fontWeight: 500 }}>
                        {i}
                      </Typography>
                    </Fab>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </TabPanel>
        <TabPanel value={indexTab} index={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              m: 1,
            }}
          >
            <Box
              sx={{
                mr: isMd ? 4 : 2,
                my: 1,
                maxWidth: 5 / 7,
                // maxHeight: 500,
              }}
              ref={ref}
            >
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleChangeActiveStep}
                axis="y"
                containerStyle={{ height: 500 }}
                resistance
              >
                {direction.map((item, i) => (
                  <StepPanel key={i} value={activeStep} index={i}>
                    <Typography
                      variant={'h6'}
                      color="text.primary"
                      align={'justify'}
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant={'body1'}
                      color="text.primary"
                      align={'justify'}
                      sx={{ lineHeight: 1.8 }}
                    >
                      {item.step}
                    </Typography>
                    {item.tips.length > 0 && (
                      <Typography
                        variant={'body2'}
                        color="text.primary"
                        align={'justify'}
                        sx={{ pt: 2, fontWeight: 500, lineHeight: 1.8 }}
                      >
                        Tips: {item.tips}
                      </Typography>
                    )}
                  </StepPanel>
                ))}
              </SwipeableViews>
            </Box>
            <Box
              sx={{
                width: 1 / 7,
                maxHeight: 360,
                overflow: 'auto',
              }}
            >
              {direction.map((item, i) => (
                <Box
                  component="div"
                  key={i}
                  onClick={() => handleChangeActiveStep(i)}
                >
                  <Fab
                    aria-label="add"
                    variant="circular"
                    size={isMd ? 'medium' : 'small'}
                    sx={{
                      border: i == activeStep ? '1px solid' : 'none',
                      // '&::hover': {
                      //   bgcolor:
                      //     mode == 'light'
                      //       ? theme.palette.common.white
                      //       : theme.palette.primary.dark,
                      // },
                      bgcolor:
                        mode == 'light'
                          ? theme.palette.common.white
                          : theme.palette.primary.dark,
                      my: 0.5,
                      boxShadow: 'none',
                      color:
                        mode === 'light'
                          ? theme.palette.text.primary
                          : theme.palette.common.white,
                    }}
                  >
                    <Typography variant="button" sx={{ fontWeight: 500 }}>
                      {i}
                    </Typography>
                  </Fab>
                </Box>
              ))}
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default DetailTabs;
