import { Container, Typography, Grid, Box, Button } from "@mui/material";

import { IconButton } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

import useTheme from "@mui/material/styles/useTheme";

import logoPrincipal from "/logo.jpg";

function Contact() {
  const theme = useTheme();

  return (
    <Container
      pt={2}
      id="contacto"
      maxWidth={false}
      sx={{
        minHeight: "40vh",
        //backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={6}
        pt={2}
        pb={6}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h4" mt={2}>
            Contacto
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.instagram.com/sudulcegracia2024/")
              }
            >
              <Instagram
                sx={{ display: { xs: "flex" }, fontSize: 50, mr: 1 }}
              />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://wa.me/59896974438?text=Hola,%2C%20prueba%20web")
              }
            >
              <WhatsApp
                sx={{ display: { xs: "flex" }, fontSize: 50, mr: 1 }}
              />
            </IconButton>
          </Box>
          {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          </Box> */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:sudulcegraciaweb@gmail.com`}
            >
              <Typography>sudulcegraciaweb@gmail.com</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* <Box
            justifyContent="center"
            sx={{ display: { xs: "flex" }, height: 200, mr: 1 }}
          >
            <img src={logoPrincipal} className="logo" alt="Vite logo" />
          </Box> */}
          <Typography variant="h2" component="p" textAlign="center">
            Su Dulce Gracia
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
  );
}
export default Contact;
