import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const mock = ['Easy', 'Indonesian', 'Chicken', 'Dessert'];

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  index: number;
  onChangeIndexMobile: (number) => void;
}

const RecipeDescription = ({
  index,
  onChangeIndexMobile,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  function isMediumOrIndexOne() {
    return isMd || index == 1;
  }

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        height: 1,
        flexDirection: 'column',
        rowGap: 1,
        justifyContent: isMd ? 'center' : 'space-between',
      }}
    >
      {index == 0 && (
        <Box
          sx={{
            '& .lazy-load-image-loaded': {
              display: 'flex !important',
            },
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={
              'https://assets.bonappetit.com/photos/61aa54511beaef6a9ff6d6b4/1:1/w_2240,c_limit/20211123%20Jalebi%20LEDE.jpg'
            }
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'cover',
              maxHeight: { xs: 320, sm: 370 },
              borderRadius: 2,
              justifyContent: 'center',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{
                letterSpacing: 1.5,
                fontWeight: 400,
                fontSize: { xs: 8, sm: 10 },
                pt: 1,
              }}
              align="center"
            >
              Food Photography and Food Styling by Muhammad Akmal
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', rowGap: isMd ? 1 : 2 }}
      >
        <Typography
          variant={isMd ? 'h4' : index == 0 ? 'h3' : 'h1'}
          fontWeight={700}
          align={'center'}
          sx={{
            mx: isMd ? 0 : 1,
          }}
        >
          Gluten-Free Carrot Cake
        </Typography>
        {isMediumOrIndexOne() && (
          <Typography
            variant={isMd ? 'subtitle1' : 'h6'}
            color="text.secondary"
            fontWeight={500}
            align={'center'}
          >
            Almond flour is a wonderfully sweet, nutty complement for fresh
            carrots, walnuts, and raisins.
          </Typography>
        )}
        {index == 1 && (
          <Typography variant="subtitle2" color="text.primary" align={'center'}>
            Total Time: 60 minutes
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: index == 0 ? 1 : 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isMd ? 'row' : 'column',
          }}
        >
          {index == 0 && (
            <Typography
              variant="overline"
              color="text.primary"
              align="center"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                fontWeight: 400,
                fontSize: 10,
                width: isMd ? 1 / 2 : 1,
              }}
            >
              By Muhammad Akmal
            </Typography>
          )}

          {isMd && (
            <Divider
              orientation="vertical"
              sx={{
                border: '1px solid',
                height: '16px',
              }}
            />
          )}
          {isMediumOrIndexOne() && (
            <Typography
              variant="overline"
              color="text.primary"
              align="center"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                fontWeight: 400,
                fontSize: 10,
                width: isMd ? 1 / 2 : 1,
              }}
            >
              Inspired By Joshua Weissman
            </Typography>
          )}
        </Box>
        {index == 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                letterSpacing: 0.4,
              }}
            >
              September 20, 2021
            </Typography>
          </Box>
        )}

        {isMediumOrIndexOne() && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // marginY: 0.5,
              flexWrap: 'wrap',
              columnGap: 1,
              rowGap: 1,
            }}
          >
            {mock.map((item) => (
              <Chip
                key={item}
                label={item}
                component="a"
                size={'medium'}
                variant={'outlined'}
                sx={{
                  color:
                    mode === 'light'
                      ? theme.palette.text.primary
                      : theme.palette.common.white,
                }}
              />
            ))}
          </Box>
        )}
        {!isMd && (
          <IconButton
            sx={{ pb: 1 }}
            onClick={() => onChangeIndexMobile(index + 1)}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default RecipeDescription;
