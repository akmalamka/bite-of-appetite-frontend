import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Page } from './components';
import { CheckboxDropdown } from './components';
import { SearchFilterBar } from 'blocks';
import { filterMenu } from 'utils/constants';
import Main from 'layouts/Main';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isRecipe?: boolean;
}

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  bio: yup
    .string()
    .trim()
    .max(500, 'Should be less than 500 chars'),
  country: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name')
    .required('Please specify your country name'),
  city: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name')
    .required('Please specify your city name'),
  address: yup
    .string()
    .required('Please specify your address')
    .min(2, 'Please enter a valid address')
    .max(200, 'Please enter a valid address'),
});

const ContentManagement = ({ isRecipe }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const [chipData, setChipData] = React.useState([]);

  const menuMap = (item) => {
    return item;
  };
  const menuItems2D = [].concat(
    filterMenu.map((i) => i.choice.map((item) => menuMap(item))),
  );
  const menuItems1D = [].concat(...menuItems2D);
  const menuIndex = menuItems2D.map((item) => item.length);

  const [isChecked, setIsChecked] = React.useState(
    menuItems1D.slice().fill(false),
  );
  const [expanded, setExpanded] = React.useState<boolean>(false);

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
    fullName: '',
    bio: '',
    email: '',
    country: '',
    city: '',
    address: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

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
                  name={'fullName'}
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
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
                  name={'fullName'}
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
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
                  name={'fullName'}
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
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
                {/* <TextField
                  label="Tags"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                /> */}
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
                  name={'bio'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Country
                </Typography>
                <TextField
                  label="Country *"
                  variant="outlined"
                  name={'country'}
                  fullWidth
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  City
                </Typography>
                <TextField
                  label="City *"
                  variant="outlined"
                  name={'city'}
                  fullWidth
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your address
                </Typography>
                <TextField
                  label="Address *"
                  variant="outlined"
                  name={'address'}
                  fullWidth
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <Link
                        color={'primary'}
                        href={'/account-billing'}
                        underline={'none'}
                      >
                        billing information.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
    </Main>
  );
};

export default ContentManagement;
