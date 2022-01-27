import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { baseUrl } from 'utils/constants';

const VideoCard = (): JSX.Element => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <Box display={'flex'} width={{ xs: 1, md: 1 / 2 }}>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `
        <Box
        component={'video'}
        height={1}
        width={1}
        autoPlay={true}
        muted={true}
        loop={true}
        sx={{ objectFit: 'cover' }}
      >
        <source src={${baseUrl}/pasta-eat.mp4} type="video/mp4" />
        <source src={${baseUrl}/pasta-eat.webm} type="video/webm" />
        <source src={${baseUrl}/pasta-eat.ogg} type="video/ogg" />
        Your browser do not support HTML5 video.
      </Box>,
      `,
        }}
      ></div> */}
      <Box
        component={'video'}
        ref={videoRef}
        height={1}
        width={1}
        autoPlay={true}
        muted={true}
        loop={true}
        sx={{ objectFit: 'cover' }}
      >
        <source src={`${baseUrl}/pasta-eat.mp4`} type="video/mp4" />
        <source src={`${baseUrl}/pasta-eat.webm`} type="video/webm" />
        <source src={`${baseUrl}/pasta-eat.ogg`} type="video/ogg" />
        Your browser do not support HTML5 video.
      </Box>
    </Box>
  );
};

export default VideoCard;
