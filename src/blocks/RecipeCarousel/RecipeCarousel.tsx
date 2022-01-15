import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './dotClass.css';
import Container from 'components/Container';
import { setChosenRecipe } from 'redux/actions/recipeActions';
import api from 'utils/api';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isHome: boolean;
}

const RecipeCarousel = ({ isHome }: Props): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  useEffect(() => {
    api
      .get('/recipes')
      .then((res) => {
        if (res.data.code == 200) {
          setRecipes(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickRecipe = (id) => {
    api
      .get(`/recipes/${id}}`)
      .then((res) => {
        if (res.data.code == 200) {
          const chosen = res.data.data;
          dispatch(setChosenRecipe(chosen));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const chosenRecipeTitle = useSelector(
    (state: any) => state.recipe.recipeTitle,
  );
  const dummyRecipeFilter = recipes.filter(
    (item) => item.title !== chosenRecipeTitle,
  );

  return (
    <Container>
      <Box marginBottom={4}>
        {isHome && (
          <Typography
            variant="h6"
            data-aos={isMd ? 'fade-up' : 'none'}
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontFamily: 'Inter',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            Recipes
          </Typography>
        )}

        <Typography
          variant="h3"
          data-aos={isMd ? 'fade-up' : 'none'}
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 600,
          }}
        >
          {isHome ? 'Go try this recent recipes!' : 'Try another recipes!'}
        </Typography>
      </Box>
      <Carousel
        showDots={isSm ? true : false}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        infinite={true}
        partialVisible={true}
        transitionDuration={600}
        containerClass="react-multi-carousel-list"
      >
        {(isHome
          ? (loading ? Array.from(new Array(3)) : recipes).slice(0, 9)
          : (loading ? Array.from(new Array(3)) : dummyRecipeFilter).slice(0, 9)
        ).map((item, i) => (
          <Box
            key={i}
            // display="flex"
            // justifyContent="center"
            // alignItems="flex-start"
            flexDirection={'column'}
            m={{ xs: 2, md: 4 }}
          >
            {item ? (
              <Link
                to={{
                  pathname: `/recipes/${item.title
                    .toLowerCase()
                    .replaceAll(' ', '-')}`,
                }}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => {
                  onClickRecipe(item.id);
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
                    height: {
                      sm: 330,
                      md: 350,
                      lg: 480,
                    },
                    borderRadius: 2,
                  }}
                  onClick={() => {
                    onClickRecipe(item.id);
                  }}
                />
              </Link>
            ) : (
              <Skeleton
                variant={'rectangular'}
                sx={{
                  height: {
                    sm: 330,
                    md: 350,
                    lg: 480,
                  },
                  borderRadius: 2,
                }}
              />
            )}
            {item ? (
              <Link
                to={{
                  pathname: `/recipes/${item.title
                    .toLowerCase()
                    .replaceAll(' ', '-')}`,
                }}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => {
                  onClickRecipe(item.id);
                }}
              >
                <Typography
                  color="text.primary"
                  fontWeight={700}
                  variant="h5"
                  sx={{
                    marginTop: 2,
                    '&:hover': {
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            ) : (
              <Skeleton sx={{ marginTop: 2 }} />
            )}
          </Box>
        ))}
      </Carousel>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: 10,
            border: 2,
            borderColor: 'primary.main',
            my: 2,
            px: 2,
            '&:hover': {
              border: 2,
            },
          }}
          href="/recipes"
        >
          <Typography
            variant="button"
            color="text.primary"
            sx={{
              fontFamily: 'Inter',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              fontWeight: 400,
              fontSize: { xs: 12, md: 14 },
            }}
          >
            View All Recipes
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default RecipeCarousel;
