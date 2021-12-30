import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DirectionField, Page } from './components';
import { SearchFilterBar } from 'blocks';
import { filterMenu } from 'utils/constants';
import Main from 'layouts/Main';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe?: boolean;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid title')
    .max(75, 'Max 75 characters')
    .required('Please specify the title'),
  description: yup
    .string()
    .trim()
    .max(190, 'Max 190 characters')
    .required('Please specify the description'),
  tags: yup
    .array()
    .min(1, 'Minimal 1 tag')
    .required('Please specify tags'),
  time: yup
    .string()
    .trim()
    .required('Please specify the time'),
  foodPhotographyBy: yup
    .string()
    .trim()
    .required('Please specify the food photographer'),
  foodStylingBy: yup
    .string()
    .trim()
    .required('Please specify the food styler'),
  recipeBy: yup
    .string()
    .trim()
    .required('Please specify the recipe developer'),
  inspiredBy: yup.string().trim(),
  story: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid story')
    .max(370, 'Max 370 characters')
    .required('Please specify the story'),
  date: yup
    .string()
    .trim()
    .required('Please specify the date'),
  serves: yup
    .number()
    .positive('Serves must be positive')
    .required('Please specify serving'),
  directions: yup
    .array()
    .min(1, 'Minimal 1 directions')
    .required('Please specify directions'),
});

const ContentManagement = ({ isRecipe }: Props): JSX.Element => {
  const [chipData, setChipData] = useState([]);

  const menuMap = (item) => {
    return item;
  };
  const menuItems2D = [].concat(
    filterMenu.map((i) => i.choice.map((item) => menuMap(item))),
  );
  const menuItems1D = [].concat(...menuItems2D);
  const menuIndex = menuItems2D.map((item) => item.length);

  const [isChecked, setIsChecked] = useState(menuItems1D.slice().fill(false));
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChangeFilterExpanded = (isClickAway) => {
    if (isClickAway) {
      setExpanded(false);
    } else {
      setExpanded(!expanded);
    }
  };

  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
    if (chipData.includes(menuItems1D[index])) {
      setChipData((chips) =>
        chips.filter((chip) => chip !== menuItems1D[index]),
      );
    } else {
      setChipData([...chipData, menuItems1D[index]]);
    }
  };

  const handleDelete = (chipToDelete) => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    const index = menuItems1D.findIndex((element) => element === chipToDelete);
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  const handleClearAll = () => {
    setChipData([]);
    setIsChecked(isChecked.map(() => false));
  };

  const initialValues = {
    title: '',
    description: '',
    tags: chipData,
    time: '',
    foodPhotographyBy: '',
    foodStylingBy: '',
    recipeBy: '',
    isInspiredByExist: false,
    inspiredBy: '',
    story: '',
    date: '',
    serves: 0,
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.setFieldValue('tags', chipData);
  }, [chipData]);

  return (
    <Main>
      <Page isRecipe={isRecipe}>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            It`s time to add recipe! Yeayy
          </Typography>
          <Box paddingY={2}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Food Photography By
                </Typography>
                <TextField
                  variant="outlined"
                  name={'foodPhotographyBy'}
                  fullWidth
                  value={formik.values.foodPhotographyBy}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.foodPhotographyBy &&
                    Boolean(formik.errors.foodPhotographyBy)
                  }
                  helperText={
                    formik.touched.foodPhotographyBy &&
                    formik.errors.foodPhotographyBy
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Food Styling By
                </Typography>
                <TextField
                  variant="outlined"
                  name={'foodStylingBy'}
                  fullWidth
                  value={formik.values.foodStylingBy}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.foodStylingBy &&
                    Boolean(formik.errors.foodStylingBy)
                  }
                  helperText={
                    formik.touched.foodStylingBy && formik.errors.foodStylingBy
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Title
                </Typography>
                <TextField
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Tags
                </Typography>
                <SearchFilterBar
                  chipData={chipData}
                  isChecked={isChecked}
                  onChangeCheckboxValue={toggleCheckboxValue}
                  onChangeDeleteChip={handleDelete}
                  onClearAll={handleClearAll}
                  menuIndex={menuIndex}
                  filterMenu={filterMenu}
                  expanded={expanded}
                  onChangeFilterExpanded={handleChangeFilterExpanded}
                  isRecipeList={true}
                  isContent={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Description
                </Typography>
                <TextField
                  variant="outlined"
                  name={'description'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Recipe By
                </Typography>
                <TextField
                  variant="outlined"
                  name={'recipeBy'}
                  fullWidth
                  value={formik.values.recipeBy}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.recipeBy && Boolean(formik.errors.recipeBy)
                  }
                  helperText={formik.touched.recipeBy && formik.errors.recipeBy}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Inspired By
                </Typography>
                <TextField
                  variant="outlined"
                  name={'inspiredBy'}
                  fullWidth
                  value={formik.values.inspiredBy}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.inspiredBy &&
                    Boolean(formik.errors.inspiredBy)
                  }
                  helperText={
                    formik.touched.inspiredBy && formik.errors.inspiredBy
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Story
                </Typography>
                <TextField
                  variant="outlined"
                  name={'story'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.story}
                  onChange={formik.handleChange}
                  error={formik.touched.story && Boolean(formik.errors.story)}
                  helperText={formik.touched.story && formik.errors.story}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Date (ex: September 20, 2021)
                </Typography>
                <TextField
                  variant="outlined"
                  name={'date'}
                  fullWidth
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Serves
                </Typography>
                <TextField
                  variant="outlined"
                  name={'serves'}
                  fullWidth
                  value={formik.values.serves}
                  onChange={formik.handleChange}
                  error={formik.touched.serves && Boolean(formik.errors.serves)}
                  helperText={formik.touched.serves && formik.errors.serves}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Time (in minutes)
                </Typography>
                <TextField
                  variant="outlined"
                  name={'time'}
                  fullWidth
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  error={formik.touched.time && Boolean(formik.errors.time)}
                  helperText={formik.touched.time && formik.errors.time}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Directions
                  </Typography>
                </Box>
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'flex-end'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
          <DirectionField />
        </Box>
      </Page>
    </Main>
  );
};

export default ContentManagement;
