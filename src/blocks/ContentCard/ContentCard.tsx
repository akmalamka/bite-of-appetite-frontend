import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

interface Props {
  title: string;
  image: string;
  onClickEditContent: (index: number) => void;
  index: number;
}

const ContentCard = ({
  title,
  image,
  onClickEditContent,
  index,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { url } = useRouteMatch();

  const onClickDelete = () => {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  };

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
          src={image}
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
          variant={'h6'}
          fontWeight={600}
          sx={{
            marginY: 2,
            display: 'flex',
            height: 70,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 2 }}>
          <Button
            variant="outlined"
            color="error"
            sx={{
              borderRadius: 10,
              border: 2,
              px: 2,
              '&:hover': {
                border: 2,
              },
            }}
            startIcon={<DeleteIcon />}
            onClick={() => onClickDelete()}
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
              Delete
            </Typography>
          </Button>
          <Link
            to={`${url}/edit/${title.toLowerCase().replaceAll(' ', '-')}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: 10,
                border: 2,
                px: 2,
                '&:hover': {
                  border: 2,
                },
              }}
              startIcon={<EditIcon />}
              onClick={() => onClickEditContent(index)}
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
                Edit
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContentCard;
