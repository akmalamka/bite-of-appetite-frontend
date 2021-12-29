import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContentCard } from 'blocks';
import { dummyRecipes } from 'utils/dummyRecipes';
import { dummyWritings } from 'utils/dummyWritings';
import AddIcon from '@mui/icons-material/Add';

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
              flexDirection={'column'}
              p={4}
              mt={4}
              rowGap={2}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
                align={'center'}
              >
                {isRecipe ? 'Recipes' : 'Writings'}
              </Typography>
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
                  startIcon={<AddIcon />}
                  // href="/recipes"
                >
                  <Typography
                    variant="button"
                    color="text.primary"
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: 1.2,
                      fontWeight: 400,
                      fontSize: { xs: 12, md: 14 },
                    }}
                  >
                    Add {isRecipe ? 'Recipes' : 'Writings'}
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Grid container rowSpacing={4} columnSpacing={2}>
              {(isRecipe ? dummyRecipes : dummyWritings).map((item, i) => (
                <ContentCard key={i} title={item.title} image={item.image} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default ContentList;
