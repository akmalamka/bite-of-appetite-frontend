import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFound = (): JSX.Element => {
  return (
    <Main>
      <Box
        display={'flex'}
        alignItems={'center'}
        minHeight={{ xs: 550, md: 'calc(100vh - 58px)' }}
        sx={{
          width: 1,
        }}
        bgcolor={'#ff8261'}
      >
        <Container>
          <Box>
            <Typography
              color={'text.secondary'}
              variant="h1"
              component={'h1'}
              align={'center'}
              sx={{ fontWeight: 700, fontSize: { xs: 80, md: 150 } }}
            >
              404
            </Typography>
            <Box display={'flex'} justifyContent={'center'}>
              <Typography
                variant="h4"
                component="p"
                color="text.secondary"
                align={'center'}
                fontWeight={600}
                marginRight={1}
              >
                Oops! Looks like you followed
              </Typography>
              <Typography
                fontFamily={'Yournotes'}
                variant="h4"
                component="p"
                color="text.secondary"
                align={'center'}
              >
                a bad link.
              </Typography>
            </Box>

            <Box marginTop={4} display={'flex'} justifyContent={'center'}>
              <Button
                component={Link}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 10,
                  border: 2,
                  borderColor: 'primary.main',
                  my: 2,
                  px: 2,
                  '&:hover': {
                    border: 2,
                  },
                }}
                href={'/'}
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
                  Back Home
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFound;
