import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
           Created by 4Code.uy
          </Typography>
        </Box>
        <Box>
          <Fab variant="extended" onClick={handleClick}>
            <NavigationIcon />
            Navigate
          </Fab>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
