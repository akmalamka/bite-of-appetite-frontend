import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as PageTitle } from '../../../Topbar/components/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from '../../../Topbar/components/Icons/page-title-white.svg';
import CloseIcon from '@mui/icons-material/Close';
import { IconList } from '../../../Topbar/components';

interface Props {
  pages: {
    home: Array<PageItem>;
    recipes: Array<PageItem>;
    foodforthought: Array<PageItem>;
    about: Array<PageItem>;
  };
  onClose: () => void;
}

const SidebarNav = ({ pages, onClose }: Props): JSX.Element => {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Box
        paddingX={2}
        paddingY={1}
        display={'flex'}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 1 / 8,
        }}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          paddingX={2}
          paddingY={1}
          title="Bite of Appetite"
          sx={{
            justifyContent: 'center',
          }}
        >
          {mode === 'light' ? <PageTitle /> : <PageTitleWhite />}
        </Box>
        <Box>
          <CloseIcon fontSize="large" onClick={() => onClose()} />
        </Box>
      </Box>
      <Box
        paddingX={2}
        paddingY={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 7 / 8,
          justifyContent: 'space-between',
        }}
      >
        {pagesArray.map((p, index) => (
          <Box
            key={index}
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
                justifyContent: 'center',
                color:
                  mode === 'light'
                    ? theme.palette.common.white
                    : theme.palette.text.primary,
              }}
            >
              <Typography
                color={mode === 'light' ? 'text.primary' : 'common.white'}
                variant="h4"
              >
                {p[0].title}
              </Typography>
            </Button>
          </Box>
        ))}
        <IconList isHamburgerOpen={true} />
      </Box>
    </Box>
  );
};

export default SidebarNav;
