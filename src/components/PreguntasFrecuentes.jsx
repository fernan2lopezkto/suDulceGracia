// src/components/PreguntasFrecuentes.jsx

import { useState } from "react";

import { Container, Grid, Typography } from "@mui/material";
//import AccordionTransition from "./AcordionFAQ";
import texts from "../data/texts";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function PreguntasFrecuentes() {
  const [current, setCurrent] = useState(-1);

  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };
  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={4} marginBottom={4}>
        {texts.preguntasFrecuentesTitle}
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {texts.preguntasFrecuentesList.map((preg) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={preg.id}>
            <Accordion
              expanded={current === preg.id}
              onChange={changeState(preg.id)}
            >
              <AccordionSummary>
                <Typography>{preg.pregunta}</Typography>
              </AccordionSummary>
              <AccordionDetails>{preg.respuesta}</AccordionDetails>
            </Accordion>
            {/* <AccordionTransition preg={preg} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PreguntasFrecuentes;
