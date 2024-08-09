import { Accordion, AccordionDetails, Container, Grid, Typography, Fade, AccordionSummary } from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Fade from '@mui/material/Fade';

import * as React from 'react';

function PreguntasFrecuentes() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Container >
      <Typography >
        Preguntas Frecuentes
      </Typography>
      <Grid container >
        <Grid item >
          <Accordion 
           expanded={expanded}
           onChange={handleExpansion}
           slots={{ transition: Fade }}
           slotProps={{ transition: { timeout: 400 } }}
           sx={{
             '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
             '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
           }}
           >
            <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
              La pregunta 1
            </AccordionSummary>
            <AccordionDetails >
              Respuesta a la pregunta 1
            </AccordionDetails>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  )
}
export default PreguntasFrecuentes