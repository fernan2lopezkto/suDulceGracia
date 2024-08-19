// src/components/PreguntasFrecuentes.jsx

import { Container, Grid, Typography } from "@mui/material";
import AccordionTransition from "./AcordionFAQ";
import texts from '../data/texts';

function PreguntasFrecuentes() {
  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={4} marginBottom={4}>
        {texts.preguntasFrecuentesTitle}
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {texts.preguntasFrecuentesList.map((preg) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={preg.id}>
            <AccordionTransition preg={preg} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PreguntasFrecuentes;
