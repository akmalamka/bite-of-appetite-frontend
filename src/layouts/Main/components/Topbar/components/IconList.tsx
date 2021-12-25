import React from 'react';
import Box from '@mui/material/Box';
import {
  InstagramButton,
  SoundcloudButton,
  MediumButton,
  SpotifyButton,
} from './index';

interface Props {
  isHamburgerOpen?: boolean;
}

const IconList = ({ isHamburgerOpen = false }: Props): JSX.Element => {
  return (
    <Box m={2} flexDirection="row" display="flex" justifyContent="space-evenly">
      <Box
        marginLeft={1}
        title="Instagram"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
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
        }}
      >
        <SpotifyButton colorInvert={false} isHamburgerOpen={isHamburgerOpen} />
      </Box>
    </Box>
  );
};

export default IconList;
