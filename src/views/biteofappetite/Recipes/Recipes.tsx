import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FeaturedArticles,
  FooterNewsletter,
  Hero,
  LatestStories,
  MostViewedArticles,
  PopularNews,
  SidebarArticles,
  SidebarNewsletter,
  Tags,
} from './components';

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

const Recipes = (): JSX.Element => {
  const theme = useTheme();
  const [keyword, setKeyword] = React.useState<string>('');
  const [chipData, setChipData] = React.useState([]);

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
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChangeFilterExpanded = (isClickAway) => {
    if (isClickAway) {
      setExpanded(false);
    } else {
      setExpanded(!expanded);
    }
  };

  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
    if (chipData.includes(menuItems1D[index])) {
      setChipData((chips) =>
        chips.filter((chip) => chip !== menuItems1D[index]),
      );
    } else {
      setChipData([...chipData, menuItems1D[index]]);
    }
  };

  const handleDelete = (chipToDelete) => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    const index = menuItems1D.findIndex((element) => element === chipToDelete);
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  const handleClearAll = () => {
    setChipData([]);
    setIsChecked(isChecked.map(() => false));
  };

  const handleChangeKeyword = (word) => {
    setKeyword(word);
  };
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Hero
        keyword={keyword}
        onChangeKeyword={handleChangeKeyword}
        chipData={chipData}
        isChecked={isChecked}
        onChangeCheckboxValue={toggleCheckboxValue}
        onChangeDeleteChip={handleDelete}
        onClearAll={handleClearAll}
        menuIndex={menuIndex}
        filterMenu={mock}
        expanded={expanded}
        onChangeFilterExpanded={handleChangeFilterExpanded}
      />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <PopularNews keyword={keyword} chipData={expanded ? [] : chipData} />
        </Container>
      </Box>
      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedArticles />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories />
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={4}>
              <SidebarArticles />
            </Grid>
          ) : null}
        </Grid>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12} md={8}>
              <MostViewedArticles />
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={800}>
        <Tags />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <FooterNewsletter />
      </Container> */}
    </Main>
  );
};

export default Recipes;
