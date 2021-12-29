import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const pages = [
  {
    id: 'general',
    href: '/account-general',
    title: 'General',
  },
  {
    id: 'security',
    href: '/account-security',
    title: 'Security',
  },
  {
    id: 'notifications',
    href: '/account-notifications',
    title: 'Notifications',
  },
  {
    id: 'billing',
    href: '/account-billing',
    title: 'Billing Information',
  },
];

interface Props {
  isRecipe: boolean;
  children: React.ReactNode;
}

const Page = ({ isRecipe, children }: Props): JSX.Element => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const theme = useTheme();

  return (
    <Box>
      <Box paddingY={4}>
        <Container>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Add {isRecipe ? 'Recipe' : 'Writing'}
          </Typography>
        </Container>
      </Box>
      <Container paddingTop={'0 !important'} marginTop={-8}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, padding: 4 }}>{children}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;
