import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '10 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img17.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '05 Mar',
  },
];

const FeaturedArticles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={'alternate.main'}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width: { xs: 1, md: '75%' },
          '& .lazy-load-image-loaded': {
            // height: 1,
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
            objectFit: 'contain',
            maxHeight: { xs: 530, md: 1 },
            borderRadius: 2,
            justifyContent: 'center',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="overline"
            color="text.primary"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              fontWeight: 400,
            }}
          >
            Food Photography and Food Styling by Muhammad Akmal
          </Typography>
        </Box>
      </Box>
      {/* <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            Featured stories
          </Typography>
          <Typography color={'text.secondary'}>
            Here’s what we’ve been up to recently.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box> */}
      {/* <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={0}
                sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Box
                  width={'90%'}
                  margin={'0 auto'}
                  display={'flex'}
                  flexDirection={'column'}
                  boxShadow={3}
                  borderRadius={2}
                  bgcolor={'background.paper'}
                  position={'relative'}
                  zIndex={3}
                  sx={{ transform: 'translateY(-30px)' }}
                >
                  <Box component={CardContent} position={'relative'}>
                    <Typography variant={'h6'} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Box padding={2} display={'flex'} flexDirection={'column'}>
                    <Box marginBottom={2}>
                      <Divider />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                          src={item.author.avatar}
                          sx={{ marginRight: 1 }}
                        />
                        <Typography color={'text.secondary'}>
                          {item.author.name}
                        </Typography>
                      </Box>
                      <Typography color={'text.secondary'}>
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default FeaturedArticles;
