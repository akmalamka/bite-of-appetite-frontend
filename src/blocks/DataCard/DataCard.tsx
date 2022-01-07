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
import { ButtonComponent } from 'blocks';
import { PER_PAGE } from 'utils/constants';
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  index: number;
  resultIndex?: number;
  title: string;
  src: string;
  tags?: string[];
  description: string;
  isRecipe: boolean;
  page: number;
  onClickRecipe?: (index: number) => void;
  onClickWriting?: (index: number) => void;
}

const DataCard = ({
  index,
  resultIndex,
  title,
  src,
  tags,
  description,
  isRecipe,
  page,
  onClickRecipe,
  onClickWriting,
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { mode } = theme.palette;
  const { url } = useRouteMatch();

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
        md: resultIndex % 2 === 0 ? 'row-reverse' : 'row',
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
        <Link
          to={{
            pathname: `${url}/${title.toLowerCase().replaceAll(' ', '-')}`,
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
              // borderRadius: 2,
            }}
            onClick={() => {
              isRecipe
                ? onClickRecipe(index)
                : onClickWriting(index + (page - 1) * PER_PAGE);
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
                // borderRadius: 2,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Button>
        </Link>
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
                justifyContent: 'center',
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
                    border: '1px solid',
                    marginRight: index % 2 === 0 ? 1 : 0,
                    marginLeft: index % 2 === 0 ? 0 : 1,
                    color:
                      mode === 'light'
                        ? theme.palette.text.primary
                        : theme.palette.common.white,
                    fontFamily: 'Inter',
                  }}
                />
              ))}
            </Box>
          )}
          <Typography
            variant={'h3'}
            fontWeight={700}
            sx={{
              marginY: 2,
              // display: 'flex',
              // justifyContent: 'center',
            }}
            // align={isMd ? (index % 2 === 0 ? 'left' : 'right') : 'center'}
            align={'center'}
          >
            {title}
          </Typography>
          <Typography
            fontFamily={'Inter'}
            variant={'subtitle1'}
            color="text.primary"
            fontWeight={500}
            sx={
              {
                // display: 'flex',
              }
            }
            // align={isMd ? (index % 2 === 0 ? 'left' : 'right') : 'center'}
            align={'center'}
          >
            {description}
          </Typography>
          <Box
            marginTop={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link
              to={`${url}/${title.toLowerCase().replaceAll(' ', '-')}`}
              style={{ textDecoration: 'none' }}
            >
              <ButtonComponent
                text={isRecipe ? 'See Recipe' : 'Read More'}
                onClick={() => {
                  isRecipe
                    ? onClickRecipe(index + (page - 1) * PER_PAGE)
                    : onClickWriting(index + (page - 1) * PER_PAGE);
                }}
              />
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default DataCard;
