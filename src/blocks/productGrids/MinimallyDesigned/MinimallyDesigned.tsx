import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './dotClass.css';

import Container from 'components/Container';

// const Carousel = styled('button')((props) => ({
//   backgroundColor: props.myBackgroundColor,
// }));

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

const mock = [
  {
    media:
      'https://assets.bonappetit.com/photos/5ca53251a63de5746feb255d/1:1/w_2240,c_limit/matzo-ball-soup.jpg',
    title: 'Gochujang Chicken',
  },
  {
    media:
      'https://assets.bonappetit.com/photos/588108978503afa76d468af7/1:1/w_2240,c_limit/overnight-oats-with-coconut-dates-almonds-and-honey.jpg',
    title: 'Eggplant Parmesan',
  },
  {
    media:
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2240,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
    title: 'Overnight Oats',
  },
  {
    media:
      'https://assets.bonappetit.com/photos/57d9d24d5a14a530086ef7bf/1:1/w_2240,c_limit/bas-best-eggplant-parmesan.jpg',
    title: 'Matzo Ball Soup',
  },
  {
    media:
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2240,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
    title: 'Fgghehe',
  },
  {
    media:
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2240,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
    title: 'Abcde',
  },
];

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isHome: boolean;
}

const WithCtaButton = ({ isHome }: Props): JSX.Element => {
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
        {mock.map((item, i) => (
          <Box
            key={i}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Card
              sx={{
                // width: { xs: 0.5, sm: 0.9 },
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
                image={item.media}
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

export default WithCtaButton;
