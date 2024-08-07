import { Container, Typography, Grid, Box, Button } from "@mui/material"

import { IconButton } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";

import useTheme from "@mui/material/styles/useTheme"

import logoPrincipal from '../assets/img/restIcon.svg';





function Contact() {

  const theme = useTheme();

  return (
    <Container pt={2} id="contacto" maxWidth={false}
    sx={{
      minHeight: '10vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }} >
        <Grid container justifyContent="center" alignItems='center' spacing={6} pt={6} >
          <Grid item xs={12} sm={6} md={4} sx={{textAlign: 'center'}}>
            <Typography variant="h4" mt={2}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }} >
              <IconButton onClick={event =>  window.location.href='https://www.instagram.com/4code.uy/'}>
            <Instagram sx={{ display: { xs: 'flex' }, fontSize: 50, mr: 1 }} />
              </IconButton>
              <IconButton onClick={event =>  window.location.href='https://linktr.ee/fernan2lopezkto'}>
            <Facebook sx={{ display: { xs: 'flex' }, fontSize: 50, mr: 1 }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }} >
              <Button 
              variant="contained"
              size="large"
              color="primary"
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:4code.uy@gmail.com`}>
              <Typography >
                4code.uy@gmail.com
              </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Box justifyContent="center" sx={{ display: { xs: 'flex' }, height: 200, mr: 1 }}>
                <img src={logoPrincipal} className="logo" alt="Vite logo" />
              </Box>
            <Typography variant="h6" component="p" textAlign="center">
              El Rincón del Sabor
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h4" textAlign="center">
              Ubicacion
            </Typography>
            <Typography variant="p" textAlign="center">
              Barros Blancos, Canelones, Uruguay
            </Typography>
          </Grid>
        </Grid>
    </Container>
  )
}
export default Contact