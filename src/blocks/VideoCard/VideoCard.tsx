import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { baseUrl } from 'utils/constants';
import './videoCardClass.css';

const styleObj = {
  color: 'white',
  backgroundColor: 'red',
  objectFit: 'cover',
};

const VideoCard = (): JSX.Element => {
  // const videoRef = useRef(undefined);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });
  return (
    <Box display={'flex'} width={{ xs: 1, md: 1 / 2 }}>
      <Box
        component="div"
        height={1}
        width={1}
        dangerouslySetInnerHTML={{
          __html: `
          <video
          loop
          muted
          autoplay
        />
        <source src="${baseUrl}/pasta-eat.mp4" type="video/mp4" />
        <source src="${baseUrl}/pasta-eat.webm" type="video/webm" />
        <source src="${baseUrl}/pasta-eat.ogg" type="video/ogg" />
        Your browser do not support HTML5 video.
      </video>,
      `,
        }}
      ></Box>

      {/* <Box
        component={'video'}
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
      </Box> */}
    </Box>
  );
};

export default VideoCard;
