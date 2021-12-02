import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import NavItem from './components/NavItem';
import { ReactComponent as PageTitle } from '../../../Topbar/components/Icons/page-title.svg';
import { ReactComponent as PageTitleWhite } from '../../../Topbar/components/Icons/page-title-white.svg';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  pages: {
    recipes: Array<PageItem>;
    foodforthought: Array<PageItem>;
    about: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    recipes: recipePages,
    foodforthought: foodForThoughtPages,
    about: aboutPages,
  } = pages;
  const pagesArray = [recipePages, foodForThoughtPages, aboutPages];
  return (
    <Box>
      <Box
        paddingX={2}
        paddingY={1}
        display={'flex'}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          paddingX={2}
          paddingY={1}
          title="Bite of Appetite"
          // width={{ xs: 100, md: 180 }}
          sx={{
            justifyContent: 'center',
          }}
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
        <Box>
          <CloseIcon fontSize="large" />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
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
              >
                {p[0].title}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarNav;
