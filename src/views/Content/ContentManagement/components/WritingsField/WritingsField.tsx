import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  isAddContent: boolean;
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

const WritingsField = ({ isAddContent }: Props): JSX.Element => {
  const initialValues = {
    image: null,
    description: '',
    title: '',
    writingsBy: '',
    story: '',
    date: '',
  };
  const [urlImage, setUrlImage] = useState(null);

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // return values;
  };

  const formik = useFormik({
    initialValues,
    // validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (formik.values.image) {
      const objectUrl = URL.createObjectURL(formik.values.image);
      setUrlImage(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setUrlImage(undefined);
      return;
    }
  }, [formik.values.image]);

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      formik.setFieldValue('image', null);
      return;
    }
    formik.setFieldValue('image', event.currentTarget.files[0]);
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="form-group">
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 2 }}
                fontWeight={700}
              >
                Image Upload
              </Typography>
              <input
                id="file"
                name="file"
                type="file"
                onChange={onSelectFile}
                className="form-control"
              />
              {urlImage}
              {formik.values.image && (
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={urlImage}
                  alt="..."
                  effect="blur"
                  my={2}
                  sx={{
                    objectFit: 'contain',
                    maxHeight: { xs: 530, md: 1 },
                    borderRadius: 2,
                  }}
                />
              )}
            </div>
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
              sx={{
                input: {
                  fontFamily: 'Inter',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Writings By
            </Typography>
            <TextField
              variant="outlined"
              name={'writingsBy'}
              fullWidth
              value={formik.values.writingsBy}
              onChange={formik.handleChange}
              error={
                formik.touched.writingsBy && Boolean(formik.errors.writingsBy)
              }
              helperText={formik.touched.writingsBy && formik.errors.writingsBy}
              sx={{
                input: {
                  fontFamily: 'Inter',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Date (ex September 20, 2021)
            </Typography>
            <TextField
              variant="outlined"
              name={'date'}
              fullWidth
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              sx={{
                input: {
                  fontFamily: 'Inter',
                },
              }}
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
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              sx={{
                textarea: {
                  fontFamily: 'Inter',
                },
              }}
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
              rows={10}
              fullWidth
              value={formik.values.story}
              onChange={formik.handleChange}
              error={formik.touched.story && Boolean(formik.errors.story)}
              helperText={formik.touched.story && formik.errors.story}
              sx={{
                textarea: {
                  fontFamily: 'Inter',
                },
              }}
            />
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
                Save Writings
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default WritingsField;
