import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

interface AddDirectionButtonProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  push: any;
}

const AddDirectionButton = ({ push }: AddDirectionButtonProps): JSX.Element => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: 10,
        border: 2,
        borderColor: 'primary.main',
        my: 2,
        px: 2,
        '&:hover': {
          border: 2,
        },
      }}
      startIcon={<AddIcon />}
      onClick={() => push({ title: '', step: '', tips: '' })}
    >
      <Typography
        variant="button"
        color="text.primary"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          fontWeight: 400,
          fontSize: { xs: 12, md: 14 },
        }}
      >
        Add direction
      </Typography>
    </Button>
  );
};

export default AddDirectionButton;
