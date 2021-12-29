import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// interface Props {
//   video: boolean;
// }

const ContentCard = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid item xs={4}>
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
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
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
        <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 4 }}>
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
    </Grid>
  );
};

export default ContentCard;
