import { Container, Grid, Typography } from "@mui/material";

import serv1 from "../assets/serv/serv1.webp";

function Servicios() {
  return (
    <Container
      mb={4}
      id="servicios"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h4" mt={4} mb={4} textAlign="center">
            Servicios
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={serv1} alt="servicio foto" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="body2"  color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            doloremque ullam, beatae placeat ratione alias possimus soluta
            veniam consectetur mollitia maiores corporis, quam distinctio ad
            enim excepturi odio explicabo delectus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Libero doloremque ullam, beatae
            placeat ratione alias possimus soluta veniam consectetur mollitia
            maiores corporis, quam distinctio ad enim excepturi odio explicabo
            delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Libero doloremque ullam, beatae placeat ratione alias possimus
            soluta veniam consectetur mollitia maiores corporis, quam distinctio
            ad enim excepturi odio explicabo delectus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Servicios;
