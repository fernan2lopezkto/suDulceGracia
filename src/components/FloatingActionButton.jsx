import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" onClick={handleClick}>
        <NavigationIcon />
        Navigate
      </Fab>
    </Box>
  );
}
