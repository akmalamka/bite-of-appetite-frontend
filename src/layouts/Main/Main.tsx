import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from 'components/Container';
import { Topbar, Sidebar, Footer } from './components';
import pages from '../navigation';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
  isTransparent?: boolean;
  menuColor?: string;
}

const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
  isTransparent = false,
  menuColor = 'text.primary',
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  function bgColorLogic() {
    return trigger ? theme.palette.background.paper : bgcolor;
  }

  function elevationLogic() {
    return trigger ? 1 : 0;
  }

  return (
    <Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: isTransparent ? 'transparent' : bgColorLogic(),
        }}
        elevation={isTransparent ? 0 : elevationLogic()}
      >
        <Container
          maxWidth={{ sm: 1, md: 1600 }}
          paddingY={{ xs: 2, md: 1 }}
          paddingX={{ xs: 2, md: 4 }}
          margin={'0'}
        >
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
            menuColor={menuColor}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4} marginX={2} maxWidth={'95%'}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
