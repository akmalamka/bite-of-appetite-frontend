import React from 'react';
import Box from '@mui/material/Box';

const VideoCard = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: 1,
          height: 1,
          zIndex: 3,
          opacity: 0.2,
        },
      }}
    >
      <Box
        component={'video'}
        width={1}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source
          src="https://doobydobap.com/wp-content/uploads/2021/06/Gimbap-video.mp4"
          type="video/mp4"
        />
        <source
          src="https://doobydobap.com/wp-content/uploads/2021/06/Gimbap-video.mp4"
          type="video/webm"
        />
        <source
          src="https://doobydobap.com/wp-content/uploads/2021/06/Gimbap-video.mp4"
          type="video/ogg"
        />
        Your browser do not support HTML5 video.
      </Box>
    </Box>
  );
};

export default VideoCard;