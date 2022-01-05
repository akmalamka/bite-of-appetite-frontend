import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  text: string;
  [x: string]: any;
}

const ButtonComponent = ({ text, ...rest }: Props): JSX.Element => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        borderRadius: 30,
        border: 2,
        borderColor: 'secondary.main',
        my: 1,
        '&:hover': {
          border: 2,
        },
      }}
      {...rest}
    >
      <Typography
        fontFamily={'Inter'}
        variant="button"
        color="text.secondary"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          fontWeight: 400,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default ButtonComponent;
