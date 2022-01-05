import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeModeToggler } from '../../components';
import { ReactComponent as PageTitle } from 'utils/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from 'utils/Icons/page-title-white.svg';

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
  menuColor: string;
  withDivider?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
  menuColor,
  withDivider = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    home: homePages,
    recipes: recipePages,
    foodforthought: foodForThoughtPages,
    about: aboutPages,
  } = pages;
  const pagesArray = [homePages, recipePages, foodForThoughtPages, aboutPages];
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
            <PageTitle />
          </Box>
          {/* {mode === 'light' && !colorInvert ? <PageTitle /> : <PageTitleWhite />} */}
          <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              minWidth: 'auto',
              padding: 1,
            }}
          >
            <MenuIcon sx={{ color: theme.palette.primary.light }} />
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
                    color={menuColor}
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
      {/* <Box>
        <Divider sx={{}}/>
      </Box> */}
    </Box>
  );
};

export default Topbar;
