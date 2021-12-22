/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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
import Pagination from '@mui/material/Pagination';
import usePagination from './Pagination';
import { dummyRecipes } from './dummyRecipes';
import Fuse from 'fuse.js';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  keyword: string;
  chipData: string[];
}

interface SeeRecipeProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  title: string;
  image: boolean;
  src?: string;
  index: number;
}

// interface stateProps {
//   index: number;
// }
function SeeRecipeButton({ title, image, src, index }: SeeRecipeProps) {
  const { url } = useRouteMatch();
  const theme = useTheme();
  if (image) {
    return (
      <Link
        to={{
          pathname: `${url}/${title.toLowerCase().replaceAll(' ', '-')}`,
          state: {
            index: index,
          },
        }}
        style={{ textDecoration: 'none' }}
      >
        <Button
          fullWidth
          disableRipple={true}
          disableFocusRipple={true}
          sx={{
            padding: 0,
            maxHeight: 530,
            maxWidth: 705,
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={src}
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'contain',
              maxHeight: { xs: 530, md: 1 },
              borderRadius: 2,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
            }}
          />
        </Button>
      </Link>
    );
  } else {
    return (
      <Box component="div">
        <Link
          to={`${url}/${title.toLowerCase().replaceAll(' ', '-')}`}
          style={{ textDecoration: 'none' }}
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
              See Recipe
            </Typography>
          </Button>
        </Link>
      </Box>
    );
  }
}

const RecipeList = ({ keyword, chipData }: Props): JSX.Element => {
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

  const result = finalResult();

  const count = Math.ceil(result.length / PER_PAGE);
  const _DATA = usePagination(result, PER_PAGE);

  const handleChangePage = (e, p) => {
    window.scrollTo(0, 0); // kalau mau langsung ke resepnya (0,400)
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
                      '& .lazy-load-image-loaded': {
                        display: 'flex !important',
                      },
                    }}
                  >
                    <SeeRecipeButton
                      title={
                        keyword === '' && chipData.length == 0
                          ? item.title
                          : item.item.title
                      }
                      image={true}
                      src={
                        keyword === '' && chipData.length == 0
                          ? item.image
                          : item.item.image
                      }
                      index={i + PER_PAGE * (page - 1)}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      paddingX: { xs: 1, sm: 2, md: 4 },
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
                            size={'medium'}
                            variant={'outlined'}
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
                        align={
                          isMd ? (i % 2 === 0 ? 'left' : 'right') : 'center'
                        }
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
                        }}
                        align={
                          isMd ? (i % 2 === 0 ? 'left' : 'right') : 'center'
                        }
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
                        <SeeRecipeButton
                          title={
                            keyword === '' && chipData.length == 0
                              ? item.title
                              : item.item.title
                          }
                          image={false}
                          index={i}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
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
