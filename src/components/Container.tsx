import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  isContent?: boolean;
  isTopbar?: boolean;
}

const Container = ({
  isContent,
  isTopbar,
  children,
  ...rest
}: Props): JSX.Element => (
  <Box
    maxWidth={{ sm: 720, md: isTopbar ? 1600 : 1236 }}
    width={1}
    margin={isTopbar ? '0' : '0 auto'}
    paddingX={isTopbar && 4}
    // paddingX={2}
    // paddingTop={2}
    paddingY={{ xs: 2, sm: 4, md: isContent ? 0 : 6 }}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
