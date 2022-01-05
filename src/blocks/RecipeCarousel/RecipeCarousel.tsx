import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './dotClass.css';
import { dummyRecipes } from 'utils/dummyRecipes';
import Container from 'components/Container';
import { setChosenRecipe } from 'redux/actions/recipeActions';

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
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const chosenRecipeTitle = useSelector(
    (state: any) => state.recipe.recipeTitle,
  );

  const onClickRecipe = (index) => {
    dispatch(setChosenRecipe(dummyRecipes[index]));
  };
  return (
    <Container>
      <Box marginBottom={4}>
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
          {isHome ? 'Recipes' : 'Try another recipes!'}
        </Typography>
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
        // ssr={true} // means to render carousel on server-side. ini entar ajaa tapi perlu dipikirin
        infinite={true}
        partialVisible={true}
        transitionDuration={600}
        containerClass="react-multi-carousel-list"
        // dotListClass={
        //   mode === 'light'
        //     ? 'react-multi-carousel-dot'
        //     : 'react-multi-carousel-dot-dark'
        // }
      >
        {(isHome
          ? dummyRecipes
          : dummyRecipes.filter((item) => item.title !== chosenRecipeTitle)
        )
          // .slice(9) ntar tambahin ini yaa, urusin prettiernya
          .map((item, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Card
                sx={{
                  width: 0.9,
                  height: 0.9,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Link
                  to={{
                    pathname: `/recipes/${item.title
                      .toLowerCase()
                      .replaceAll(' ', '-')}`,
                  }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.image}
                    onClick={() => {
                      onClickRecipe(item.index);
                    }}
                    sx={{
                      objectFit: 'contain',
                      minWidth: 220,
                      minHeight: { xs: 270, sm: 260 },
                      height: {
                        sm: 330,
                        md: 350,
                        lg: 480,
                      },
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                  <Box
                    marginTop={2}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                  >
                    <Typography
                      color="text.primary"
                      fontWeight={700}
                      variant="h5"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Link>
              </Card>
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
