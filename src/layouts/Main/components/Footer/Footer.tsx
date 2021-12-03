import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as PageTitle } from '../Topbar/components/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from '../Topbar/components/Icons/page-title-white.svg';
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
            component="a"
            href="/"
            title="Bite of Appetite"
            width={0.3}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            marginBottom={{ xs: 2, sm: 0 }}
          >
            {/* <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            /> */}
            {mode === 'light' ? <PageTitle /> : <PageTitleWhite />}
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={4}>
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
            <Box marginTop={1} marginRight={4}>
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
            <Box marginTop={1} marginRight={4}>
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
            <Box marginTop={1} marginRight={4}>
              <Link
                underline="none"
                component="a"
                href="/about-bite-of-appetite"
                color="text.primary"
                variant={'subtitle2'}
              >
                About
              </Link>
            </Box>
          </Box>
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
        {/* <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default Footer;
