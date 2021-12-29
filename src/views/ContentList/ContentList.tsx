import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContentCard } from 'blocks';
import { dummyRecipes } from 'utils/dummyRecipes';
import { dummyWritings } from 'utils/dummyWritings';

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
