import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContentCard } from 'blocks';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe?: boolean;
}
const ContentList = ({ isRecipe }: Props): JSX.Element => {
  return (
    <Main>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container
          paddingX={0}
          paddingY={0}
          marginBottom={4}
          maxWidth={{ sm: 1, md: 1236 }}
        >
          <Box display={'flex'} flexDirection={'column'} position={'relative'}>
            <Box
              display={'flex'}
              width={1}
              justifyContent={'center'}
              p={4}
              mt={4}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {isRecipe ? 'Recipes' : 'Writings'}
              </Typography>
            </Box>
            <Grid container rowSpacing={4} columnSpacing={2}>
              <ContentCard />
              {/* <Grid item xs={4}>
                <Box
                  sx={{
                    '& .lazy-load-image-loaded': {
                      display: 'flex !important',
                    },
                    boxShadow: 1,
                    position: 'relative',
                    p: 2,
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={
                      'https://assets.bonappetit.com/photos/5fd2a19cd597aa87eb924b1e/16:9/w_2240,c_limit/Basically-Dakgalbi-2.jpg'
                    }
                    alt="..."
                    effect="blur"
                    sx={{
                      objectFit: 'contain',
                      maxHeight: { xs: 530, md: 1 },
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                  <Typography
                    variant={'h5'}
                    fontWeight={600}
                    sx={{
                      marginY: 2,
                      display: 'flex',
                    }}
                  >
                    White Pesto Pasta
                  </Typography>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'row', columnGap: 4 }}
                  >
                    <Button
                      variant={'outlined'}
                      startIcon={<DeleteIcon />}
                      color={'error'}
                    >
                      Delete
                    </Button>
                    <Button variant={'outlined'} startIcon={<EditIcon />}>
                      Edit
                    </Button>
                  </Box>
                </Box>
              </Grid> */}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default ContentList;
