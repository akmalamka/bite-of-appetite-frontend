import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContentCard } from 'blocks';
import { setChosenRecipe } from 'redux/actions/recipeActions';
import { setChosenWriting } from 'redux/actions/writingActions';
import api from 'utils/api';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe?: boolean;
}
const ContentList = ({ isRecipe }: Props): JSX.Element => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const [writings, setWritings] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [refreshPage, setRefreshPage] = useState<boolean>(false);

  const onClickEditContent = (id) => {
    api
      .get(`/${isRecipe ? 'recipes' : 'writings'}/${id}`)
      .then((res) => {
        if (res.data.code == 200) {
          const chosen = res.data.data;
          isRecipe
            ? dispatch(setChosenRecipe(chosen))
            : dispatch(setChosenWriting(chosen));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get(`/${isRecipe ? 'recipes' : 'writings'}`)
      .then((res) => {
        if (res.data.code == 200) {
          isRecipe ? setRecipes(res.data.data) : setWritings(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshPage]);

  return (
    <Main isParentPage={true}>
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
                  href={`${url}/add`}
                >
                  <Typography
                    fontFamily={'Inter'}
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
              {(isRecipe ? recipes : writings).map((item, i) => (
                <ContentCard
                  key={i}
                  title={item.title}
                  image={item.image}
                  onClickEditContent={onClickEditContent}
                  id={item.id}
                  handleRefreshPage={setRefreshPage}
                  isRecipe={isRecipe}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default ContentList;
