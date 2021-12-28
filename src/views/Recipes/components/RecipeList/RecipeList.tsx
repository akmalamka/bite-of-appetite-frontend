/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import usePagination from './Pagination';
import { dummyRecipes } from '../../../../utils/dummyRecipes';
import { DataCard } from 'blocks';
import Fuse from 'fuse.js';
import { setChosenRecipe } from 'redux/actions/recipeActions';
import { PER_PAGE } from 'utils/constants';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  keyword: string;
  chipData: string[];
}

const RecipeList = ({ keyword, chipData }: Props): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [page, setPage] = React.useState(1);
  const [searchFirst, setSearchFirst] = React.useState<boolean>(false);

  const optionsSearch = {
    threshold: 0.3,
    keys: ['title'],
  };

  const optionsFilter = {
    threshold: 0,
    useExtendedSearch: true,
    keys: ['tags'],
  };
  const chipDataMapped = chipData.map(function(obj) {
    return {
      tags: obj,
    };
  });

  const fuseSearch = new Fuse(dummyRecipes, optionsSearch);
  const fuseFilter = new Fuse(dummyRecipes, optionsFilter);

  const resultSearch =
    keyword === '' ? dummyRecipes : fuseSearch.search(keyword);
  const resultFilter =
    chipData.length == 0
      ? dummyRecipes
      : fuseFilter.search({ $and: chipDataMapped });

  function finalResult() {
    if (keyword === '') {
      if (chipData.length == 0) {
        return dummyRecipes;
      } else {
        return resultFilter;
      }
    } else {
      if (chipData.length == 0) {
        return resultSearch;
      } else {
        if (searchFirst) {
          const flattenSearch = resultSearch.map((item) => item.item);
          return new Fuse(flattenSearch, optionsFilter).search({
            $and: chipDataMapped,
          });
        } else {
          const flattenFilter = resultFilter.map((item) => item.item);
          return new Fuse(flattenFilter, optionsSearch).search(keyword);
        }
      }
    }
  }
  const onClickRecipe = (index) => {
    dispatch(setChosenRecipe(dummyRecipes[index]));
  };

  const result = finalResult();

  const count = Math.ceil(result.length / PER_PAGE);
  const _DATA = usePagination(result, PER_PAGE);

  const handleChangePage = (e, p) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    if (keyword.length == 0 && chipData.length > 0) {
      setSearchFirst(false);
    } else if (keyword.length > 0 && chipData.length == 0) {
      setSearchFirst(true);
    }
    if (keyword.length > 0 || chipData.length > 0) {
      setPage(1);
      _DATA.jump(1);
    }
  }, [keyword, chipData]);

  return (
    <Box>
      {result.length > 0 ? (
        <Grid container spacing={4}>
          {result
            .slice(PER_PAGE * (page - 1), PER_PAGE * page)
            .map((item, i) => (
              <Grid key={i} item xs={12}>
                <DataCard
                  index={
                    keyword === '' && chipData.length == 0
                      ? item.index
                      : item.item.index
                  }
                  title={
                    keyword === '' && chipData.length == 0
                      ? item.title
                      : item.item.title
                  }
                  src={
                    keyword === '' && chipData.length == 0
                      ? item.image
                      : item.item.image
                  }
                  tags={
                    (keyword === '' && chipData.length == 0 ? item : item.item)
                      .tags
                  }
                  description={
                    keyword === '' && chipData.length == 0
                      ? item.description
                      : item.item.description
                  }
                  isRecipe={true}
                  page={page}
                  onClickRecipe={onClickRecipe}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        <Box sx={{ mx: 2 }}>
          <Typography
            variant={isMd ? 'h5' : 'h6'}
            sx={{
              fontWeight: 600,
              color: 'text.primary',
            }}
            align="center"
          >
            Oops! Sorry, It looks like there's no such recipe you're looking for
            :(
          </Typography>
        </Box>
      )}
      {result.length > 0 && (
        <Pagination
          count={count}
          size="large"
          boundaryCount={0}
          siblingCount={isMd ? 1 : 0}
          page={page}
          sx={{
            marginY: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
          onChange={handleChangePage}
        />
      )}
    </Box>
  );
};

export default RecipeList;
