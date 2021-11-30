import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { ThemeModeToggler } from '../../components';
import { SocialIcon } from 'react-social-icons';
import { ReactComponent as InstagramLogo } from './components/Icons/instagram.svg';

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

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'recipes'}
            id={'recipes-pages'}
            items={recipePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'food for thought'}
            id={'food-for-thought-pages'}
            items={foodForThoughtPages}
            colorInvert={colorInvert}
          />
        </Box>
        {/* <Box
          marginLeft={4}
          sx={{
            fontFamily: 'HVCocktail',
          }}
        >
          Raleway
        </Box> */}
        <Box marginLeft={4}>
          <NavItem
            title={'about'}
            id={'about-pages'}
            items={aboutPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
        {/* Jangan lupa diubah warnanya kalo ada perubahan */}
        <Box
          marginLeft={4}
          // sx={{
          //   minWidth: 'auto',
          //   border: 1,
          //   borderColor: mode === 'light' ? 'primary' : 'secondary',
          // }}
        >
          <IconButton
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              minWidth: 300,
            }}
          >
            {/* AAA */}
            <InstagramLogo />
          </IconButton>
          {/* <SocialIcon
            url="https://www.instagram.com/akmalm_20/"
            bgColor={mode === 'light' ? '#ffffff' : '#222B45'}
            fgColor={mode === 'light' ? '#000000' : '#ffffff'}
            style={{
              minWidth: 'auto',
              border: 1,
              borderColor: mode === 'light' ? 'primary' : 'secondary',
            }}
          /> */}
        </Box>
        <Box marginLeft={4}>
          <SocialIcon
            url="https://soundcloud.com/muhammad-akmal-517836705"
            bgColor={mode === 'light' ? '#ffffff' : '#222B45'}
            fgColor={mode === 'light' ? '#000000' : '#ffffff'}
          />
        </Box>
        <Box marginLeft={4}>
          <SocialIcon
            url="https://www.linkedin.com/in/akmalamka/"
            bgColor={mode === 'light' ? '#ffffff' : '#222B45'}
            fgColor={mode === 'light' ? '#000000' : '#ffffff'}
          />
        </Box>
        <Box marginLeft={4}>
          <SocialIcon
            url="https://akmalamka.medium.com"
            bgColor={mode === 'light' ? '#ffffff' : '#222B45'}
            fgColor={mode === 'light' ? '#000000' : '#ffffff'}
          />
        </Box>
        <Box marginLeft={4}>
          <SocialIcon
            url="https://www.youtube.com/channel/UCf_Xgfe_7eH3Yms9x7GlmqA"
            bgColor={mode === 'light' ? '#ffffff' : '#222B45'}
            fgColor={mode === 'light' ? '#000000' : '#ffffff'}
          />
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
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
