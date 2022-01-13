import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataCard } from 'blocks';
import Swal from 'sweetalert2';
import api from 'utils/api';

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
  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );

  const initialValuesAdd = {
    description: '',
    title: '',
    writingsBy: '',
    story: '',
    date: '',
  };

  const initialValuesEdit = {
    description: chosenWriting.description,
    title: chosenWriting.title,
    writingsBy: chosenWriting.writingsBy,
    story: chosenWriting.story,
    date: chosenWriting.date,
  };

  const [image, setImage] = useState<any>(chosenWriting.image);

  const onSaveImageWriting = () => {
    const fd = new FormData();
    fd.append('image', image);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    if (image !== chosenWriting.image) {
      api
        .post(`/writings/${chosenWriting.id}/image`, fd, config)
        .then((res) => {
          if (res.data.code == 200) {
            Swal.fire('Image Writing Updated', 'Hooraayy', 'success');
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err}`,
          });
        });
    } else {
      Swal.fire('Really?', 'There is nothing you could save', 'question');
    }
  };
  const onSubmit = (values) => {
    api
      .put(`/writings/${chosenWriting.id}`, values)
      .then((res) => {
        if (res.data.code == 200) {
          Swal.fire('Writing Updated', 'Hooraayy', 'success');
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err}`,
        });
      });
  };
  const initialValues = isAddContent ? initialValuesAdd : initialValuesEdit;
  const formik = useFormik({
    initialValues,
    // validationSchema: validationSchema,
    onSubmit,
  });

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setImage(chosenWriting.image);
      return;
    }
    setImage(event.currentTarget.files[0]);
  };

  const onClearFile = (event) => {
    event.target.value = null;
    setImage(chosenWriting.image);
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
              <form encType="multipart/form-data">
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={onSelectFile}
                  className="form-control"
                />
                <Button variant="contained" onClick={onClearFile}>
                  <Typography fontFamily={'Inter'} variant={'button'}>
                    Clear File
                  </Typography>
                </Button>
              </form>
              <DataCard
                index={0}
                title={'Title'}
                src={
                  image === chosenWriting.image
                    ? image
                    : URL.createObjectURL(image)
                }
                tags={['tags', 'tag']}
                description={'Description'}
                isRecipe={true}
                isContentManagement={true}
                page={1}
              />
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
              columnGap={4}
            >
              <Button
                size={'large'}
                variant={'contained'}
                onClick={() => onSaveImageWriting()}
              >
                <Typography fontFamily={'Inter'} variant={'button'}>
                  Save Image Writings
                </Typography>
              </Button>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                <Typography fontFamily={'Inter'} variant={'button'}>
                  Save Writings
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default WritingsField;
