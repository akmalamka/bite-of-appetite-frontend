/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import usePagination from 'utils/usePagination';
import { dummyWritings } from 'utils/dummyWritings';
import { DataCard } from 'blocks';
import { setChosenWriting } from 'redux/actions/writingActions';
import { PER_PAGE } from 'utils/constants';
import { isMd } from 'utils/constants';
const WritingList = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  const count = Math.ceil(dummyWritings.length / PER_PAGE);
  const _DATA = usePagination(dummyWritings, PER_PAGE);

  const handleChangePage = (e, p) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
    _DATA.jump(p);
  };

  const onClickWriting = (index) => {
    dispatch(setChosenWriting(dummyWritings[index]));
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {dummyWritings
          .slice(PER_PAGE * (page - 1), PER_PAGE * page)
          .map((item, i) => (
            <Grid key={i} item xs={12}>
              <DataCard
                index={i}
                resultIndex={i}
                title={item.title}
                src={item.image}
                description={item.description}
                isRecipe={false}
                page={page}
                onClickWriting={onClickWriting}
              />
            </Grid>
          ))}
      </Grid>
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
    </Box>
  );
};

export default WritingList;
