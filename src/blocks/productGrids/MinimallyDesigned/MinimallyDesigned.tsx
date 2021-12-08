import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { alpha, useTheme, makeStyles } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Container from 'components/Container';

// const useStyles = makeStyles({
//   'react-multi-carousel-dot-list': {

//   }
// });
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

const WithCtaButton = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          Try this recent recipes!
        </Typography>
      </Box>
      <Carousel
        showDots={true}
        // centerMode={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side. ini entar ajaa tapi perlu dipikirin
        infinite={true}
        partialVisible={true}
        transitionDuration={500}
        // renderDotsOutside={true}
      >
        {mock.map((item, i) => (
          <Box key={i} display="flex" justifyContent="center">
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
    </Container>
  );
};

export default WithCtaButton;
