import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { ThemeModeToggler } from '../../components';
import { SocialIcon } from 'react-social-icons'; // remove aja yaaa di packagenya
import { ReactComponent as PageTitle } from './components/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from './components/Icons/page-title-white.svg';
import {
  InstagramButton,
  SoundcloudButton,
  MediumButton,
  SpotifyButton,
} from './components/';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    recipes: Array<PageItem>;
    foodforthought: Array<PageItem>;
    about: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    recipes: recipePages,
    foodforthought: foodForThoughtPages,
    about: aboutPages,
  } = pages;
  const pagesArray = [recipePages, foodForThoughtPages, aboutPages];
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box display={'flex'} component="a" href="/" width={{ xs: 100, md: 180 }}>
        <Box
        // component={'img'}
        // src={
        //   mode === 'light' && !colorInvert
        //     ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
        //     : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
        // }
        // height={1}
        // width={1}
        />
        {mode === 'light' && !colorInvert ? <PageTitle /> : <PageTitleWhite />}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box mx={{ md: 4, lg: 8 }} flexDirection="row" display="flex">
          {pagesArray.map((p, index) => (
            <Box
              key={index}
              marginLeft={4}
              sx={{
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Button
                component={'a'}
                href={p[0].href}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color:
                    mode === 'light' && !colorInvert
                      ? theme.palette.common.white
                      : theme.palette.text.primary,
                }}
              >
                <Typography
                  color={colorInvert ? 'common.white' : 'text.primary'}
                >
                  {p[0].title}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          m={2}
          flexDirection="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <Box
            marginLeft={1}
            title="Instagram"
            sx={{
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <InstagramButton colorInvert={colorInvert} />
          </Box>
          <Box
            marginLeft={1}
            title="Medium"
            sx={{
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <MediumButton colorInvert={colorInvert} />
          </Box>
          <Box
            marginLeft={1}
            title="Soundcloud"
            sx={{
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <SoundcloudButton colorInvert={colorInvert} />
          </Box>
          <Box
            marginLeft={1}
            title="Spotify"
            sx={{
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <SpotifyButton colorInvert={colorInvert} />
          </Box>
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
        {/* <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
