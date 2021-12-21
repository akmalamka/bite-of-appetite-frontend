import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import {
  InstagramButton,
  SoundcloudButton,
  MediumButton,
  SpotifyButton,
} from './index';

const IconList = (): JSX.Element => {
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
        <InstagramButton colorInvert={false} />
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
        <MediumButton colorInvert={false} />
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
        <SoundcloudButton colorInvert={false} />
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
        <SpotifyButton colorInvert={false} />
      </Box>
    </Box>
  );
};

export default IconList;
