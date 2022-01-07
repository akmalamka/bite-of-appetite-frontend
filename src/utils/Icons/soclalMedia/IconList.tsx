import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import {
  InstagramButton,
  SoundcloudButton,
  MediumButton,
  SpotifyButton,
} from 'utils/icons/soclalMedia';

interface Props {
  isHamburgerOpen?: boolean;
}

const IconList = ({ isHamburgerOpen = false }: Props): JSX.Element => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  return (
    <Box
      m={2}
      flexDirection={'row'}
      display="flex"
      alignSelf={{
        xs: 'center',
        sm: isHamburgerOpen ? 'center' : 'flex-start',
      }}
    >
      <Box
        marginLeft={1}
        title="Instagram"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          cursor: 'pointer',
        }}
      >
        <InstagramButton
          colorInvert={false}
          isHamburgerOpen={isHamburgerOpen}
        />
      </Box>
      <Box
        marginLeft={1}
        title="Medium"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          cursor: 'pointer',
        }}
      >
        <MediumButton colorInvert={false} isHamburgerOpen={isHamburgerOpen} />
      </Box>
      <Box
        marginLeft={1}
        title="Soundcloud"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          cursor: 'pointer',
        }}
      >
        <SoundcloudButton
          colorInvert={false}
          isHamburgerOpen={isHamburgerOpen}
        />
      </Box>
      <Box
        marginLeft={1}
        title="Spotify"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          cursor: 'pointer',
        }}
      >
        <SpotifyButton colorInvert={false} isHamburgerOpen={isHamburgerOpen} />
      </Box>
    </Box>
  );
};

export default IconList;
