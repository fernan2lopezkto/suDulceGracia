import { Container, Grid, Typography } from "@mui/material";

import serv1 from "../assets/serv/decEventos.png";

function Servicios() {
  return (
    <>
      {/* <Bubbles /> */}
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
              Servicio de Decoración para Eventos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={serv1} alt="servicio foto" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="body2" color="text.secondary" mb={4}>
              En Su Dulce Gracia, no solo nos especializamos en crear postres
              deliciosos, sino que también llevamos el arte de la repostería al
              siguiente nivel con nuestro servicio de decoración para eventos.
              Ya sea que estés celebrando un cumpleaños, una boda, un
              aniversario o cualquier ocasión especial, nuestro equipo de
              expertos en decoración transformará tu evento en una experiencia
              inolvidable.
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={4}>
              Nos encargamos de cada detalle, desde la decoración temática de la
              mesa de postres hasta la personalización de tortas y cupcakes,
              todo diseñado para armonizar con la estética y el tema de tu
              celebración. Además, ofrecemos opciones de dulces decorativos,
              arreglos florales comestibles y mesas de dulces que son tan
              hermosas como deliciosas.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Permítenos convertir tu evento en una obra de arte dulce, donde
              cada elemento refleja tu estilo y personalidad. En Su Dulce
              Gracia, creemos que la decoración es tan importante como el sabor,
              y nos dedicamos a hacer que tus momentos más especiales sean aún
              más memorables.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Servicios;
