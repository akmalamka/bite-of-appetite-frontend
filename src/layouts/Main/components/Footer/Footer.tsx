import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as PageTitle } from 'utils/icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from 'utils/icons/page-title-white.svg';
import { IconList } from 'utils/icons/soclalMedia';
import { isSm } from 'utils/constants';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            alignSelf={{ xs: 'center', sm: 'flex-start' }}
            marginX={{ xs: 2, md: 4 }}
          >
            <Box
              display={'flex'}
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
              component="a"
              href="/"
              title="Bite of Appetite"
            >
              {mode === 'light' ? <PageTitle /> : <PageTitleWhite />}
            </Box>
            <Box marginY={2} paddingRight={{ xs: 0, md: 2 }}>
              <Typography
                fontFamily={'Inter'}
                align={isSm ? 'left' : 'center'}
                variant={'subtitle2'}
                color="text.primary"
                gutterBottom
              >
                Made with love in Bogor, Indonesia
              </Typography>
              <Typography
                fontFamily={'Inter'}
                align={isSm ? 'left' : 'center'}
                variant={'subtitle2'}
                color="text.primary"
                gutterBottom
              >
                &copy; Bite of Appetite. 2021, Muhammad Akmal
              </Typography>
              <Typography
                fontFamily={'Inter'}
                align={isSm ? 'left' : 'center'}
                variant={'subtitle2'}
                color="text.primary"
                gutterBottom
              >
                All rights reserved
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexWrap={'wrap'}
            alignItems={isSm ? 'flex-start' : 'center'}
            flexDirection={'column'}
            rowGap={2}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'h6'}
              >
                Home
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                underline="none"
                component="a"
                href="/recipes"
                color="text.primary"
                variant={'h6'}
              >
                Recipes
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                underline="none"
                component="a"
                href="/food-for-thought"
                color="text.primary"
                variant={'h6'}
              >
                Food for Thought
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                underline="none"
                component="a"
                href="/about"
                color="text.primary"
                variant={'h6'}
              >
                About
              </Link>
            </Box>
          </Box>
          <IconList />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
