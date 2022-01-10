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
import { dummyRecipes } from 'utils/dummyRecipes';
import { DataCard } from 'blocks';
import Fuse from 'fuse.js';
import { setChosenRecipe } from 'redux/actions/recipeActions';
import { PER_PAGE } from 'utils/constants';
import Container from 'components/Container';

const RecipeList = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();
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

  const count = Math.ceil(result.length / PER_PAGE);
  const _DATA = usePagination(result, PER_PAGE);

  const handleChangePage = (e, p) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
    _DATA.jump(p);
  };

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
                  resultIndex={i}
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
        <Container>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            rowGap={2}
          >
            <Typography
              color={'text.primary'}
              variant="h1"
              component={'h1'}
              align={'center'}
              sx={{ fontWeight: 600 }}
            >
              Oops!
            </Typography>
            <Typography
              fontFamily={'Inter'}
              variant="h5"
              component="p"
              color="text.primary"
              align={'center'}
            >
              Sorry, It looks like there's no such recipe you're looking for :(
            </Typography>
          </Box>
        </Container>
      )}
      {result.length > 0 && (
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
