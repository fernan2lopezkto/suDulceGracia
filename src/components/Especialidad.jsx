import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';

const especialidades = [
  {
    name: "Ceviche",
    description: "Este plato nacional de Perú vive un momento de mucha fama en la actualidad, luego de destacarse en diferentes ferias gastronómicas realizadas en distintas partes del mundo. El ceviche peruano se prepara con pescado o mariscos crudos, cebolla, chile, jugo de limón y sal. Puede ir acompañado de camote, choclo, cancha serrana o chifles.",
    precio: "$740",
    img: "/plantillarestaurant/especialidad/ceviche.jpg"
  },
  {
    name: "Paella",
    description: "La paella es un clásico de España que ha sabido ganarse el aprecio internacional. Originaria de Valencia, debe su nombre a la gigante “paellera” dónde se cocina. Se trata de un buen plato de arroz y mariscos, condimentado con azafrán y hierbas verdes. Como siempre, hay muchas versiones y se hace también con pollo, cerdo o, simplemente, vegetales.",
    precio: "$740",
    img: "/plantillarestaurant/especialidad/paella.webp"
  },
  {
    name: "Burrito",
    description: "Su exquisitez y practicidad les han permitido a los burritos consagrarse como otra de las comidas más populares del universo. Autóctono de México, contiene algunos de los ingredientes más representativos de su país: una tortilla tradicional, a la que se le agrega un relleno -generalmente carne, pollo y maíz- y luego se la enrolla para formar el famoso burrito.",
    precio: "$740",
    img: "/plantillarestaurant/especialidad/burrito.jpg"
  }
];

function Especialidad() {
  const theme = useTheme();
  
  const animations = {
    slideIn: { initial: { x: '100%', opacity: 0 }, animate: { x: 0, opacity: 1 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } }
  };

  return (
    <Container maxWidth={false} sx={{
      //minHeight: '100vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} id="especialidad">
      <Grid container justifyContent="center" alignItems='center' spacing={4} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h3" textAlign="center" mb={2} mt={4}>
            Los más pedidos
          </Typography>
          <Typography variant="P" >
            Nuestros clientes adoran nuestros productos estrella como la Tarta de Chocolate, el Cheesecake de Frutos Rojos y nuestros Macarons. Cada uno de estos postres es elaborado con ingredientes de la más alta calidad y un toque de amor que los hace únicos
          </Typography>
        </Grid>
        {especialidades.map((esp, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          return (
            <Grid item xs={12} sm={6} md={4} key={index} justifyContent="center" alignItems='center' mb={4}>
              <motion.div
                ref={ref}
                initial={animations.slideIn.initial}
                animate={inView ? animations.slideIn.animate : animations.slideIn.initial}
                transition={{ duration: 2 }}
              >
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
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Especialidad;
