/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { PER_PAGE } from '../../views/biteofappetite/Recipes/components/RecipeList/RecipeList';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  index: number;
  title: string;
  src: string;
  page: number;
  tags?: string[];
  description: string;
  isRecipe: boolean;
}

interface SeeRecipeProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  title: string;
  image: boolean;
  src?: string;
  index: number;
}

function SeeRecipeButton({ title, image, src, index }: SeeRecipeProps) {
  const { url } = useRouteMatch();
  const theme = useTheme();
  if (image) {
    return (
      <Link
        to={{
          pathname: `${url}/${title.toLowerCase().replaceAll(' ', '-')}`,
          state: {
            index: index,
          },
        }}
        style={{ textDecoration: 'none' }}
      >
        <Button
          fullWidth
          disableRipple={true}
          disableFocusRipple={true}
          sx={{
            padding: 0,
            maxHeight: 530,
            maxWidth: 705,
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={src}
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'contain',
              maxHeight: { xs: 530, md: 1 },
              borderRadius: 2,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
            }}
          />
        </Button>
      </Link>
    );
  } else {
    return (
      <Box component="div">
        <Link
          to={`${url}/${title.toLowerCase().replaceAll(' ', '-')}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: 30,
              border: 2,
              borderColor: 'primary.main',
              my: 1,
              px: 2,
              '&:hover': {
                border: 2,
              },
            }}
          >
            <Typography
              variant="button"
              color="text.primary"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                fontWeight: 400,
              }}
            >
              See Recipe
            </Typography>
          </Button>
        </Link>
      </Box>
    );
  }
}

const DataCard = ({
  index,
  title,
  src,
  page,
  tags,
  description,
  isRecipe,
}: Props): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { mode } = theme.palette;
  return (
    <Box
      component={Card}
      width={1}
      height={1}
      borderRadius={0}
      boxShadow={0}
      display={'flex'}
      flexDirection={{
        xs: 'column',
        md: index % 2 === 0 ? 'row-reverse' : 'row',
      }}
      sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
    >
      <Box
        sx={{
          '& .lazy-load-image-loaded': {
            display: 'flex !important',
          },
        }}
      >
        <SeeRecipeButton
          title={title}
          image={true}
          src={src}
          index={index + PER_PAGE * (page - 1)}
        />
      </Box>
      <CardContent
        sx={{
          paddingX: { xs: 1, sm: 2, md: 4 },
          width: { xs: 1, md: '50%' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          height={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {isRecipe && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: index % 2 === 0 ? 'flex-start' : 'flex-end',
                },
                marginY: { xs: 1, md: 0 },
              }}
            >
              {tags.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  component="a"
                  size={'medium'}
                  variant={'outlined'}
                  sx={{
                    marginRight: index % 2 === 0 ? 1 : 0,
                    marginLeft: index % 2 === 0 ? 0 : 1,
                    color:
                      mode === 'light'
                        ? theme.palette.text.primary
                        : theme.palette.common.white,
                  }}
                />
              ))}
            </Box>
          )}
          <Typography
            variant={'h4'}
            fontWeight={700}
            sx={{
              marginY: 2,
              display: 'flex',
              justifyContent: {
                xs: 'center',
                md: index % 2 === 0 ? 'flex-start' : 'flex-end',
              },
            }}
            align={isMd ? (index % 2 === 0 ? 'left' : 'right') : 'center'}
          >
            {title}
          </Typography>
          <Typography
            variant={'subtitle1'}
            color="text.secondary"
            fontWeight={500}
            sx={{
              display: 'flex',
            }}
            align={isMd ? (index % 2 === 0 ? 'left' : 'right') : 'center'}
          >
            {description}
          </Typography>
          <Box
            marginTop={2}
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center',
                md: index % 2 === 0 ? 'flex-start' : 'flex-end',
              },
            }}
          >
            <SeeRecipeButton title={title} image={false} index={index} />
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default DataCard;
