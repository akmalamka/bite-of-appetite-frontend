import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import {
  InstagramButton,
  SoundcloudButton,
  MediumButton,
  SpotifyButton,
} from './index';
import { Typography } from '@mui/material';

interface Props {
  isHamburgerOpen?: boolean;
}

const IconList = ({ isHamburgerOpen = false }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box
      m={2}
      flexDirection={{ sm: 'row', md: 'column' }}
      display="flex"
      justifyContent="space-evenly"
      rowGap={1}
    >
      <Box
        marginLeft={1}
        title="Instagram"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <InstagramButton
          colorInvert={false}
          isHamburgerOpen={isHamburgerOpen}
        />
        {isMd && (
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="subtitle2"
          >
            Instagram
          </Typography>
        )}
      </Box>
      <Box
        marginLeft={1}
        title="Medium"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <MediumButton colorInvert={false} isHamburgerOpen={isHamburgerOpen} />
        {isMd && (
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="subtitle2"
          >
            Medium
          </Typography>
        )}
      </Box>
      <Box
        marginLeft={1}
        title="Soundcloud"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <SoundcloudButton
          colorInvert={false}
          isHamburgerOpen={isHamburgerOpen}
        />
        {isMd && (
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="subtitle2"
          >
            Soundcloud
          </Typography>
        )}
      </Box>
      <Box
        marginLeft={1}
        title="Spotify"
        sx={{
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <SpotifyButton colorInvert={false} isHamburgerOpen={isHamburgerOpen} />
        {isMd && (
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="subtitle2"
          >
            Spotify
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default IconList;
