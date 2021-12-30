import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface DirectionFieldProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  stepNumber: number;
  handleRemoveDirection: (stepNumber: number) => void;
}

const DirectionField = ({
  stepNumber,
  handleRemoveDirection,
}: DirectionFieldProps): JSX.Element => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={1}>
        <Typography variant={'h6'} align={'center'} m={2}>
          {stepNumber}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Title
            </Typography>
            <TextField
              variant="outlined"
              name={'date'}
              fullWidth
              // value={formik.values.date}
              // onChange={formik.handleChange}
              // error={formik.touched.date && Boolean(formik.errors.date)}
              // helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Step
            </Typography>
            <TextField
              variant="outlined"
              name={'story'}
              multiline
              rows={5}
              fullWidth
              // value={formik.values.story}
              // onChange={formik.handleChange}
              // error={formik.touched.story && Boolean(formik.errors.story)}
              // helperText={formik.touched.story && formik.errors.story}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Tips
            </Typography>
            <TextField
              variant="outlined"
              name={'date'}
              fullWidth
              // value={formik.values.date}
              // onChange={formik.handleChange}
              // error={formik.touched.date && Boolean(formik.errors.date)}
              // helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          pt: 4,
        }}
      >
        <IconButton
          edge="start"
          aria-label="delete"
          title="Delete"
          size="large"
          sx={{ border: '1px solid' }}
          onClick={() => handleRemoveDirection(stepNumber)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default DirectionField;
