import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { RecipeList } from './components';
import { SearchFilterBar } from 'blocks';
import { filterMenu } from 'utils/constants';

const Recipes = (): JSX.Element => {
  const theme = useTheme();
  const [keyword, setKeyword] = React.useState<string>('');
  const [chipData, setChipData] = React.useState([]);

  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const menuMap = (item) => {
    return item;
  };
  const menuItems2D = [].concat(
    filterMenu.map((i) => i.choice.map((item) => menuMap(item))),
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

  function recipeListLogic() {
    return expanded && !isSm;
  }

  return (
    <Box>
      <Main colorInvert={false}>
        <Box
          display={'flex'}
          m={4}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          rowGap={2}
        >
          <Box
            display={'flex'}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Recipes
            </Typography>
          </Box>
          <SearchFilterBar
            keyword={keyword}
            onChangeKeyword={handleChangeKeyword}
            chipData={chipData}
            isChecked={isChecked}
            onChangeCheckboxValue={toggleCheckboxValue}
            onChangeDeleteChip={handleDelete}
            onClearAll={handleClearAll}
            menuIndex={menuIndex}
            filterMenu={filterMenu}
            expanded={expanded}
            onChangeFilterExpanded={handleChangeFilterExpanded}
            isRecipeList={true}
          />
        </Box>
        <Box>
          <Divider sx={{ color: 'primary.main', border: '1px solid' }} />
        </Box>
        {!recipeListLogic() && (
          <Box>
            <Container>
              <RecipeList
                keyword={keyword}
                chipData={expanded ? [] : chipData}
              />
            </Container>
          </Box>
        )}
      </Main>
    </Box>
  );
};

export default Recipes;
