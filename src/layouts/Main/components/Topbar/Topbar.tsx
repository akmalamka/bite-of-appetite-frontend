import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from 'utils/icons/logo/logo-chocolate.svg';
import { ReactComponent as LogoWhite } from 'utils/icons/logo/logo-white.svg';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    home: Array<PageItem>;
    recipes: Array<PageItem>;
    foodforthought: Array<PageItem>;
    about: Array<PageItem>;
  };
  colorInvert?: boolean;
  menuColor?: string;
  logoColor?: string;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
  menuColor,
  logoColor,
}: Props): JSX.Element => {
  const theme = useTheme();
  const {
    home: homePages,
    recipes: recipePages,
    foodforthought: foodForThoughtPages,
    about: aboutPages,
  } = pages;
  const pagesArray = [homePages, recipePages, foodForThoughtPages, aboutPages];
  function menuColorLogic() {
    return menuColor ? menuColor : 'text.primary';
  }
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={1}
      >
        <Box
          display={'flex'}
          width={{ xs: 1, md: 1 / 2 }}
          sx={{ justifyContent: { xs: 'space-between', md: 'flex-start' } }}
        >
          <Box component={'a'} href="/">
            {logoColor == 'white' ? <LogoWhite /> : <Logo />}
          </Box>
          <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              minWidth: 'auto',
              padding: 1,
              borderRadius: 30,
            }}
          >
            <MenuIcon
              sx={{
                color:
                  logoColor == 'white'
                    ? theme.palette.primary.light
                    : theme.palette.primary.main,
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
          alignItems={'center'}
          width={1 / 2}
        >
          <Box flexDirection="row" display="flex">
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
                <Button component={'a'} href={p[0].href} fullWidth>
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: 'capitalize',
                    }}
                    color={colorInvert ? 'text.secondary' : menuColorLogic()}
                  >
                    {p[0].title}
                  </Typography>
                </Button>
              </Box>
            ))}
          </Box>
          {/* <Box>
          <ThemeModeToggler />
        </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
