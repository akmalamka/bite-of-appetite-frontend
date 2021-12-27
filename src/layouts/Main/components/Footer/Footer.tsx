import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as PageTitle } from '../Topbar/components/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from '../Topbar/components/Icons/page-title-white.svg';
import { IconList } from '../Topbar/components';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

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
            component="a"
            href="/"
            title="Bite of Appetite"
            width={{ xs: 1, sm: 0.3 }}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            alignSelf={'flex-start'}
            marginBottom={{ xs: 2, sm: 0 }}
            marginTop={2}
          >
            {mode === 'light' ? <PageTitle /> : <PageTitleWhite />}
          </Box>
          <Box
            display="flex"
            flexWrap={'wrap'}
            alignItems={isSm ? 'flex-start' : 'center'}
            flexDirection={'column'}
            rowGap={1}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
              <Link
                underline="none"
                component="a"
                href="/recipes"
                color="text.primary"
                variant={'subtitle2'}
              >
                Recipes
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
              <Link
                underline="none"
                component="a"
                href="/food-for-thought"
                color="text.primary"
                variant={'subtitle2'}
              >
                Food for Thought
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
              <Link
                underline="none"
                component="a"
                href="/about"
                color="text.primary"
                variant={'subtitle2'}
              >
                About
              </Link>
            </Box>
          </Box>
          <IconList />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          Made with love in Bogor, Indonesia
        </Typography>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Bite of Appetite. 2021, Muhammad Akmal. All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
