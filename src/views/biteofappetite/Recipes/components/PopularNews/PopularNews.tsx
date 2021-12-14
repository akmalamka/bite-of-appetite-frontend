/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
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
import Fuse from 'fuse.js';

const mock = [
  {
    image:
      'https://assets.bonappetit.com/photos/5cabd1070916ec42af559902/1:1/w_2240,c_limit/white-pesto-pasta-1.jpg',
    description:
      'Built of toasted nuts, creamy ricotta, and salty Parmesan, you don’t even need a food processor to make this riff on the normal pesto you know and love.',
    title: 'White Pesto Pasta',
    tags: ['Indonesian', 'Appetizer', 'Chicken', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/61aa54511beaef6a9ff6d6b4/1:1/w_2240,c_limit/20211123%20Jalebi%20LEDE.jpg',
    description:
      'It only takes a handful of ingredients to bring this dazzling South Asian snack to life in your kitchen. These particular jalebi strike the perfect balance between crispy, chewy, and sweet.',
    title: 'Jalebi',
    tags: ['Korean', 'Main Course', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57ace5141b334044149752d7/1:1/w_2240,c_limit/pavlovas-with-fresh-berries.jpg',
    description:
      'Velvety dollops of whipped cream top an extra-crisp, delicate meringue shell for the perfect range of textures.',
    title: 'Pavlovas With Fresh Berries',
    tags: ['Fusion', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57ad371b53e63daf11a4dcfc/1:1/w_2240,c_limit/banana-bread-1-of-1.jpg',
    description:
      'Dark brown sugar is key and a dollop of mascarpone makes for superior tenderness. Walnuts optional but encouraged. ',
    title: 'Banana Bread',
    tags: ['Snacks', 'Egg', 'Medium'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/5df7e3a774d917000929589d/1:1/w_2240,c_limit/FGFP-Turmeric-Salmon-Coconut-Crisp%2016x9.jpg',
    description:
      'The coconut crisp brings texture and heat to this simple stewy dish.',
    title: 'Turmeric Salmon With Coconut Crisp',
    tags: ['Indonesian', 'Dessert', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/5de7e495b79e20000879d72a/1:1/w_2240,c_limit/Amiel-Lobster-Pasta-Lede-1.jpg',
    description:
      'A creamy, eye rollingly rich pasta sauce that tastes deeply lobstery, but even more deeply of love.',
    title: 'Lobster Pasta',
    tags: ['Pasta', 'Fast', 'Western'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57add77f53e63daf11a4de9f/1:1/w_2240,c_limit/chewy-molasses-cookies.jpg',
    description:
      'Molasses keeps these cookies magically fresh and chewy for days.',
    title: 'Chewy Molasses Cookies',
    tags: ['Italian', 'Snacks', 'Seafood', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/57adf6d053e63daf11a4e015/1:1/w_2240,c_limit/chicken-khao-soi1.jpg',
    description:
      'A simple curry paste gives this northern Thai–inspired soup surprising depth of flavor.',
    title: 'Chicken Khao Soi',
    tags: ['Fusion', 'Dessert', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/6169b04e2f34dd3430e96df8/1:1/w_2240,c_limit/Shrimp-and-Salami-Pasta.jpeg',
    description:
      'A dreamy vacation to Portugal inspired this shrimp and salami pasta from recipe developer Shilpa Uskokovic.',
    title: 'Shrimp and Salami Pasta',
    tags: ['Fusion', 'Medium'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/5e6bb3bd97812f0008bb8bf5/1:1/w_2240,c_limit/0420-Pasta-Rigatoni-With-Fennel-Anchovies.jpg',
    description:
      'Something truly magical happens when fennel, garlic, and anchovies get caramelized together in olive oil, then paired with citrus zest.',
    title: 'Rigatoni With Fennel and Anchovies',
    tags: ['Indonesian', 'Beef', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/6192c7803c7174017f361933/1:1/w_2240,c_limit/Maple-kettle-corn%0D.jpg',
    description:
      'Kettle corn is undeniably delicious, so there’s no reason to mess with it—unless the alternative is utterly showstopping.',
    title: 'Maple-Za’atar Kettle Corn',
    tags: ['Korean', 'Appetizer', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/610983ac7ab03bb297b2f500/1:1/w_2240,c_limit/0921-Weeknight%20Ragu%CC%80.jpg',
    description:
      'Many ragus require hours of simmering. Not this one. Here we take the express lane, opting for ground meat, which gives you a head start on tenderness, and combining it with flavor-packed ingredients like double-concentrated tomato paste and heavy cream.',
    title: 'Weeknight Ragù',
    tags: ['Indonesian', 'Chicken', 'Easy'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/6192c5018a5569968cdfac88/1:1/w_2240,c_limit/Crispy-olives-chile-sauce%0D.jpg',
    description:
      'How to take olives from snack to PARTY snack? Buy pre-stuffed olives, then coat them in panko, fry until deep golden brown, and serve with Calabrian chile sauce.',
    title: 'Crispy Olives With Calabrian Chile Sauce',
    tags: ['Japanese', 'Chicken', 'Hard'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/613b59be6b6b69f9c769c523/1:1/w_2240,c_limit/Seasonal%20Pasta%20Lantern%20Inn.jpg',
    description:
      'This cozy winter squash and kale pasta from The Lantern Inn in Wassaic, NY, uses an entire butternut squash, a whole bunch of kale, and crunchy pecan breadcrumbs for total fall bliss in dinner form.',
    title: 'Winter Squash and Kale Pasta With Pecan Breadcrumbs',
    tags: ['Korean', 'Appetizer', 'Rice'],
  },
  {
    image:
      'https://assets.bonappetit.com/photos/6192c54bb3c163c8b55ebf59/1:1/w_2240,c_limit/Curried-egg-tartines%0D.jpg',
    description:
      'While we would happily eat a plain slice of crispy fried bread, one piled with a creamy curried egg salad and herbs is way more exciting.',
    title: 'Curried Egg Tartines',
    tags: ['Indonesian', 'Dessert', 'Mango', 'Hard'],
  },
];

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  keyword: string;
  chipData: string[];
}

const PopularNews = ({ keyword, chipData }: Props): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { mode } = theme.palette;
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 2;
  const [searchFirst, setSearchFirst] = React.useState<boolean>(false);

  const optionsSearch = {
    threshold: 0.3,
    keys: ['title'],
  };

  const optionsFilter = {
    threshold: 0,
    includeScore: true,
    useExtendedSearch: true,
    keys: ['tags'],
  };
  const chipDataMapped = chipData.map(function(obj) {
    return {
      tags: obj,
    };
  });
  console.log(chipDataMapped);

  const fuseSearch = new Fuse(mock, optionsSearch);
  const fuseFilter = new Fuse(mock, optionsFilter);

  const resultSearch = keyword === '' ? mock : fuseSearch.search(keyword);
  const resultFilter =
    chipData.length == 0 ? mock : fuseFilter.search({ $and: chipDataMapped });

  console.log(resultFilter);
  function finalResult() {
    if (keyword === '') {
      if (chipData.length == 0) {
        return mock;
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
          return new Fuse(flattenFilter, optionsSearch).search(keyword); // diubah yang gabungan dari search dan filter
        }
      }
    }
  }

  const result = finalResult();
  const count = Math.ceil(result.length / PER_PAGE);
  const _DATA = usePagination(result, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    if (keyword.length == 0 && chipData.length > 0) {
      setSearchFirst(false);
    } else if (keyword.length > 0 && chipData.length == 0) {
      setSearchFirst(true);
    }
  }, [keyword, chipData]);

  return (
    <Box>
      <Grid container spacing={4}>
        {result.slice(PER_PAGE * (page - 1), PER_PAGE * page).map((item, i) => (
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
                  src={
                    keyword === '' && chipData.length == 0
                      ? item.image
                      : item.item.image
                  }
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
                    {(keyword === '' && chipData.length == 0
                      ? item
                      : item.item
                    ).tags.map((item) => (
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
                    align={isMd ? (i % 2 === 0 ? 'left' : 'right') : 'center'}
                  >
                    {keyword === '' && chipData.length == 0
                      ? item.title
                      : item.item.title}
                  </Typography>
                  <Typography
                    variant={'subtitle1'}
                    color="text.secondary"
                    fontWeight={500}
                    sx={{
                      display: 'flex',
                      // justifyContent: {
                      //   xs: 'center',
                      //   md: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      // },
                    }}
                    align={isMd ? (i % 2 === 0 ? 'left' : 'right') : 'center'}
                  >
                    {keyword === '' && chipData.length == 0
                      ? item.description
                      : item.item.description}
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

export default PopularNews;
