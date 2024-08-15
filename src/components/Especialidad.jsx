// src/components/Especialidad.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import texts from '../data/texts';

function Especialidad() {
  const theme = useTheme();
  
  const animations = {
    slideIn: { initial: { x: '100%', opacity: 0 }, animate: { x: 0, opacity: 1 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } }
  };

  return (
    <Container maxWidth={false} sx={{
      minHeight: '100vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} id="especialidad">
      <Grid container justifyContent="center" alignItems='center' spacing={4} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h3" textAlign="center" mb={2} mt={4}>
            {texts.especialidadesTitle}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {texts.especialidadesDescription}
          </Typography>
        </Grid>
        {texts.especialidadesList.map((esp, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          return (
            <Grid item xs={12} sm={6} md={4} key={index} justifyContent="center" alignItems='center' mb={4}>
              <Card sx={{ maxWidth: 345 }} >
                <CardActionArea href="#restaurant">
                  <CardMedia
                    component="img"
                    height="140"
                    image={esp.img}
                    alt={esp.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {esp.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {esp.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Especialidad;
