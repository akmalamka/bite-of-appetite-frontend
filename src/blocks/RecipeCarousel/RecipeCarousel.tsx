import React from 'react';
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
import { dummyRecipes } from 'views/Recipes/components/RecipeList/dummyRecipes';
import Container from 'components/Container';

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
    partialVisibilityGutter: 0,
  },
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isHome: boolean;
}

const RecipeCarousel = ({ isHome }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={isMd ? 'fade-up' : 'none'}
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          {isHome ? 'Try this recent recipes!' : 'Try another recipes!'}
        </Typography>
      </Box>
      <Carousel
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side. ini entar ajaa tapi perlu dipikirin
        infinite={true}
        partialVisible={true}
        transitionDuration={600}
        containerClass="react-multi-carousel-list"
      >
        {dummyRecipes.map((item, i) => (
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
              <CardMedia
                title={item.title}
                image={item.image}
                sx={{
                  objectFit: 'contain',
                  minWidth: 220,
                  minHeight: 260,
                  height: {
                    sm: 330,
                    md: 350,
                    lg: 480,
                  },
                  borderRadius: 2,
                }}
              />
              <Box
                marginTop={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
              >
                <Typography fontWeight={700} variant="h5">
                  {item.title}
                </Typography>
              </Box>
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
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              fontWeight: 400,
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