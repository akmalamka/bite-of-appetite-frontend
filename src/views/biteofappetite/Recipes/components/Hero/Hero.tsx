import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterListIcon from '@mui/icons-material/FilterList';

import Container from 'components/Container';
import './placeholder.css';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  keyword: string;
  onChangeKeyword: (keyword) => void;
}

const mock = [
  {
    type: 'Cuisine',
    choice: ['Indonesian', 'Japanese', 'Korean', 'Italian', 'Fusion'],
  },
  {
    type: 'Food Type',
    choice: ['Appetizer', 'Main Course', 'Dessert', 'Snacks'],
  },
  {
    type: 'Main Ingredient',
    choice: ['Chicken', 'Beef', 'Seafood', 'Egg', 'Rice', 'Mango'],
  },
  { type: 'Difficulty', choice: ['Easy', 'Medium', 'Hard'] },
];

const Hero = ({ keyword, onChangeKeyword }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const menuMap = (item) => {
    return item;
  };
  const menuItems2D = [].concat(
    mock.map((i) => i.choice.map((item) => menuMap(item))),
  );
  const menuItems1D = [].concat(...menuItems2D);
  const menuIndex = menuItems2D.map((item, i) => item.length);

  const [isChecked, setIsChecked] = React.useState(
    menuItems1D.slice().fill(false),
  );
  const [chipData, setChipData] = React.useState([]);
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChangeFilter = () => {
    setExpanded(!expanded);
  };

  const menuIndexHandler = (index) => {
    let a = 0;
    for (let i = 0; i < index; i++) {
      a += menuIndex[i];
    }
    return a;
  };

  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
    if (!chipData.includes(menuItems1D[index])) {
      setChipData([...chipData, menuItems1D[index]]);
    }
  };

  const handleDelete = (chipToDelete) => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    const index = menuItems1D.findIndex((element) => element === chipToDelete);
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <Box position={'relative'}>
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            marginTop={4}
            boxShadow="none"
          >
            <Accordion
              expanded={expanded}
              sx={{
                maxWidth: {
                  xs: 300,
                  sm: 600,
                  md: 800,
                },
              }}
            >
              <Box
                // width={{ xs: 0.9, md: 0.6 }}
                width={1}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '3px solid',
                  boxShadow: 2,
                  borderRadius: 6,
                  borderColor:
                    mode === 'light'
                      ? theme.palette.primary.light
                      : theme.palette.common.white,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                      value={keyword}
                      onChange={(event) => onChangeKeyword(event.target.value)}
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
                    {/* <div onClick={() => handleChangeFilter()}> */}
                    <IconButton
                      onClick={handleChangeFilter}
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
                    {/* <div> */}
                  </Box>
                </Box>
                {chipData.length > 0 && !expanded && (
                  <Box sx={{ m: 2 }}>
                    {chipData.map((item, i) => (
                      <Chip
                        key={i}
                        label={item}
                        onDelete={() => handleDelete(item)}
                      />
                    ))}
                  </Box>
                )}
              </Box>
              <AccordionDetails>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                  }}
                >
                  {mock.map((filter, i) => (
                    <FormControl
                      key={i}
                      sx={{ m: 3 }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormLabel component="legend">{filter.type}</FormLabel>
                      <FormGroup>
                        {filter.choice.map((item, j) => (
                          <FormControlLabel
                            key={j}
                            control={
                              <Checkbox
                                key={j + menuIndexHandler(i)}
                                checked={isChecked[j + menuIndexHandler(i)]}
                                onClick={() =>
                                  toggleCheckboxValue(j + menuIndexHandler(i))
                                }
                                name={item}
                              />
                            }
                            label={item}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  ))}
                </Box>
                {isChecked.includes(true) && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleChangeFilter}
                      sx={{
                        borderRadius: 30,
                        border: 2,
                        borderColor: 'primary.main',
                        px: 2,
                        '&:hover': {
                          border: 2,
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        color="text.primary"
                        sx={{
                          textTransform: 'uppercase',
                          letterSpacing: 1.2,
                          fontWeight: 400,
                        }}
                      >
                        Done
                      </Typography>
                    </Button>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
            {/* <Box>
              <Chip
                // icon={icon}
                label={'Abcd'}
                // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              />
            </Box> */}
          </Box>
        </Box>
      </Container>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default Hero;
