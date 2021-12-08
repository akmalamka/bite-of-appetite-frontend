/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import usePagination from './Pagination';

const mock = [
  {
    image:
      'https://assets.bonappetit.com/photos/5cabd1070916ec42af559902/1:1/w_2240,c_limit/white-pesto-pasta-1.jpg',
    description:
      'Built of toasted nuts, creamy ricotta, and salty Parmesan, you don’t even need a food processor to make this riff on the normal pesto you know and love.',
    title: 'White Pesto Pasta',
    tags: ['Pasta', 'Fast', 'Easy', 'Western'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/61aa54511beaef6a9ff6d6b4/1:1/w_2240,c_limit/20211123%20Jalebi%20LEDE.jpg',
    description:
      'It only takes a handful of ingredients to bring this dazzling South Asian snack to life in your kitchen. These particular jalebi strike the perfect balance between crispy, chewy, and sweet.',
    title: 'Jalebi',
    tags: ['Pasta', 'Fast', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57ace5141b334044149752d7/1:1/w_2240,c_limit/pavlovas-with-fresh-berries.jpg',
    description:
      'Velvety dollops of whipped cream top an extra-crisp, delicate meringue shell for the perfect range of textures.',
    title: 'Pavlovas With Fresh Berries',
    tags: ['Fast', 'Easy', 'Western'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57ad371b53e63daf11a4dcfc/1:1/w_2240,c_limit/banana-bread-1-of-1.jpg',
    description:
      'Dark brown sugar is key and a dollop of mascarpone makes for superior tenderness. Walnuts optional but encouraged. ',
    title: 'Banana Bread',
    tags: ['Pasta', 'Fast', 'Western'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/61aa54511beaef6a9ff6d6b4/1:1/w_2240,c_limit/20211123%20Jalebi%20LEDE.jpg',
    description:
      'It only takes a handful of ingredients to bring this dazzling South Asian snack to life in your kitchen. These particular jalebi strike the perfect balance between crispy, chewy, and sweet.',
    title: 'Jalebi',
    tags: ['Pasta', 'Fast', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57ad371b53e63daf11a4dcfc/1:1/w_2240,c_limit/banana-bread-1-of-1.jpg',
    description:
      'Dark brown sugar is key and a dollop of mascarpone makes for superior tenderness. Walnuts optional but encouraged. ',
    title: 'Banana Bread',
    tags: ['Pasta', 'Fast', 'Western'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/5cabd1070916ec42af559902/1:1/w_2240,c_limit/white-pesto-pasta-1.jpg',
    description:
      'Built of toasted nuts, creamy ricotta, and salty Parmesan, you don’t even need a food processor to make this riff on the normal pesto you know and love.',
    title: 'Hore Hore Hore',
    tags: ['Pasta', 'Fast', 'Easy', 'Western'],
  },
];

const PopularNews = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { mode } = theme.palette;
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 2;

  const dummy = mock.concat(mock);

  const count = Math.ceil(dummy.length / PER_PAGE);
  const _DATA = usePagination(dummy, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Box>
      <Grid container spacing={4}>
        {dummy.slice(PER_PAGE * (page - 1), PER_PAGE * page).map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{
                xs: 'column',
                md: i % 2 === 0 ? 'row-reverse' : 'row',
              }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '75%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 530,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.8)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  paddingX: { xs: 1, sm: 2, md: 4 },
                  // paddingY: { xs: 2, sm: 4 },
                  width: { xs: 1, md: '50%' },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  height={1}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: {
                        xs: 'center',
                        md: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      },
                      marginY: { xs: 1, md: 0 },
                    }}
                  >
                    {item.tags.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        component="a"
                        // href=""
                        // clickable
                        size={'medium'}
                        variant={'outlined'}
                        // color={'primary'}
                        sx={{
                          marginRight: i % 2 === 0 ? 1 : 0,
                          marginLeft: i % 2 === 0 ? 0 : 1,
                          color:
                            mode === 'light'
                              ? theme.palette.text.primary
                              : theme.palette.common.white,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant={'h4'}
                    fontWeight={700}
                    sx={{
                      marginY: 2,
                      display: 'flex',
                      justifyContent: {
                        xs: 'center',
                        md: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={'subtitle1'}
                    color="text.secondary"
                    fontWeight={500}
                    sx={{
                      display: 'flex',
                      justifyContent: {
                        xs: 'center',
                        md: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      },
                    }}
                    align={isMd ? (i % 2 === 0 ? 'left' : 'right') : 'center'}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    marginTop={2}
                    sx={{
                      display: 'flex',
                      justifyContent: {
                        xs: 'center',
                        md: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      },
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        borderRadius: 30,
                        border: 2,
                        borderColor: 'primary.main',
                        my: 1,
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
                        View Recipe
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                {/* <Box>
                  <Divider
                    orientation="horizontal"
                    variant="middle"
                    sx={{ border: '1px solid' }}
                  />
                </Box> */}
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={count}
        size="large"
        page={page}
        sx={{ marginY: 4, display: 'flex', justifyContent: 'center' }}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PopularNews;
