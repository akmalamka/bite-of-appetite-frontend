import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { RecipeList } from './components';
import { SearchFilterBar } from 'blocks';

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
  const [keyword, setKeyword] = React.useState<string>('');
  const [chipData, setChipData] = React.useState([]);

  const menuMap = (item) => {
    return item;
  };
  const menuItems2D = [].concat(
    mock.map((i) => i.choice.map((item) => menuMap(item))),
  );
  const menuItems1D = [].concat(...menuItems2D);
  const menuIndex = menuItems2D.map((item) => item.length);

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

  return (
    <Main colorInvert={false}>
      <SearchFilterBar
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
        isRecipeList={true}
      />
      <Box>
        <Container>
          <RecipeList keyword={keyword} chipData={expanded ? [] : chipData} />
        </Container>
      </Box>
    </Main>
  );
};

export default Recipes;
