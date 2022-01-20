/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import usePagination from 'utils/usePagination';
import { DataCard } from 'blocks';
import Fuse from 'fuse.js';
import { setChosenRecipe, fetchRecipeList } from 'redux/actions/recipeActions';
import { PER_PAGE } from 'utils/constants';
import Container from 'components/Container';
import api from 'utils/api';
import { ReactComponent as SearchFilterAsset } from 'utils/search-filter-asset.svg';

const RecipeList = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const recipes = useSelector((state: any) => state.recipe.recipeList);
  const recipeListStatus = useSelector(
    (state: any) => state.recipe.recipeListStatus,
  );
  const [loading, setLoading] = useState(
    recipeListStatus === 'idle' ? true : false,
  );

  useEffect(() => {
    if (recipeListStatus === 'idle') {
      api
        .get('/recipes')
        .then((res) => {
          if (res.data.code == 200) {
            dispatch(fetchRecipeList(res.data.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch, recipes, recipeListStatus]);

  const keyword = useSelector((state: any) => state.searchFilter.keyword);

  const chipData = useSelector((state: any) => state.searchFilter.chipData);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [page, setPage] = useState(1);
  const [searchFirst, setSearchFirst] = useState<boolean>(false);

  const optionsSearch = {
    threshold: 0.3,
    keys: ['title'],
  };

  const optionsFilter = {
    threshold: 0.05,
    useExtendedSearch: true,
    keys: ['tags'],
  };
  const chipDataMapped = chipData.map(function(obj) {
    return {
      tags: obj,
    };
  });
  let result = [];
  const fuseSearch = new Fuse(recipes, optionsSearch);
  const fuseFilter = new Fuse(recipes, optionsFilter);
  const resultSearch =
    keyword === '' || typeof keyword === 'undefined'
      ? recipes
      : fuseSearch.search(keyword);
  const resultFilter =
    chipData.length == 0
      ? recipes
      : fuseFilter.search({ $and: chipDataMapped });

  function finalResult() {
    if (keyword === '') {
      if (chipData.length == 0) {
        return recipes;
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
  const onClickRecipe = (id) => {
    console.log('xyzzz ', id);
    api
      .get(`/recipes/${id}`)
      .then((res) => {
        if (res.data.code == 200) {
          const chosen = res.data.data;
          sessionStorage.removeItem('state');
          dispatch(setChosenRecipe(chosen));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  result = finalResult();

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

  const count = Math.ceil(result ? result.length / PER_PAGE : 0);
  const _DATA = usePagination(result ? result : [], PER_PAGE);

  const handleChangePage = (e, p) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
    _DATA.jump(p);
  };

  function resultLogic(equalZero: boolean) {
    if (result) {
      if (equalZero) {
        return result.length == 0;
      } else {
        return result.length > 0;
      }
    } else {
      return false;
    }
  }

  return (
    <Box>
      {loading && (
        <Grid container spacing={4}>
          {Array.from(new Array(PER_PAGE))
            .slice(PER_PAGE * (page - 1), PER_PAGE * page)
            .map((item, i) => (
              <Grid key={i} item xs={12}>
                <DataCard
                  index={i}
                  isRecipe={true}
                  page={page}
                  onClickRecipe={onClickRecipe}
                  loading
                />
              </Grid>
            ))}
        </Grid>
      )}
      {!loading && resultLogic(false) ? (
        <Grid container spacing={4}>
          {(loading ? Array.from(new Array(PER_PAGE)) : result)
            .slice(PER_PAGE * (page - 1), PER_PAGE * page)
            .map((item, i) => (
              <Grid key={i} item xs={12}>
                {loading ? (
                  <DataCard
                    index={i}
                    isRecipe={true}
                    page={page}
                    onClickRecipe={onClickRecipe}
                    loading
                  />
                ) : (
                  <DataCard
                    index={i}
                    id={
                      keyword === '' && chipData.length == 0
                        ? item.id
                        : item.item.id
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
                      (keyword === '' && chipData.length == 0
                        ? item
                        : item.item
                      ).tags
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
                )}
              </Grid>
            ))}
        </Grid>
      ) : (
        <Container>
          {!loading && resultLogic(true) && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              rowGap={2}
            >
              {isMd && (
                <Box
                  left={'55%'}
                  top={'28%'}
                  position={'absolute'}
                  sx={{
                    zIndex: 1,
                  }}
                >
                  <SearchFilterAsset />
                </Box>
              )}
              <Typography
                color={'text.primary'}
                variant="h1"
                component={'h1'}
                align={'center'}
                sx={{ fontWeight: 600, zIndex: 3 }}
              >
                Oops!
              </Typography>
              <Typography
                fontFamily={'Inter'}
                variant="h5"
                component="p"
                color="text.primary"
                align={'center'}
                sx={{ zIndex: 3 }}
              >
                Sorry, It looks like there's no such recipe you're looking for
                :(
              </Typography>
            </Box>
          )}
        </Container>
      )}

      {!loading && resultLogic(false) && (
        <Pagination
          color={'primary'}
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
