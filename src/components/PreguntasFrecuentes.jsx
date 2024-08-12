import { Container, Grid, Typography } from "@mui/material";




import AccordionTransition from "./AcordionFAQ";


const preguntasFrecuentes = [
  {
    id: 1,
    pregunta: "¿Realizan tortas personalizadas para eventos especiales?",
    respuesta: "Sí, en Su Dulce Gracia ofrecemos tortas personalizadas para bodas, cumpleaños, aniversarios y otros eventos. Puedes elegir el diseño, sabor y tamaño según tus preferencias. Contáctanos con al menos una semana de anticipación para asegurarte de que podamos cumplir con tu pedido."
  },
  {
    id: 2,
    pregunta: "¿Ofrecen opciones sin gluten o para personas con alergias?",
    respuesta: "Sí, contamos con una selección de productos sin gluten, sin lácteos y sin frutos secos para personas con alergias alimentarias. Por favor, indícanos tus necesidades al realizar el pedido para garantizar que podamos prepararlo de manera segura."
  },
  {
    id: 3,
    pregunta: "¿Cómo puedo hacer un pedido?",
    respuesta: "Puedes hacer tu pedido directamente en nuestra tienda, a través de nuestra página web, o llamando al [Número de Teléfono]. También ofrecemos la opción de pedir a través de nuestras redes sociales."
  },
  {
    id: 4,
    pregunta: "¿Cuánto tiempo antes debo hacer mi pedido?",
    respuesta: "Para pedidos de productos regulares, te recomendamos hacer tu pedido con al menos 48 horas de anticipación. Para tortas personalizadas o grandes cantidades, es mejor realizar el pedido con al menos una semana de anticipación."
  },
  {
    id: 5,
    pregunta: "¿Tienen servicio de delivery?",
    respuesta: "Sí, ofrecemos servicio de delivery a domicilio. Puedes solicitarlo al hacer tu pedido. El costo del delivery varía según la ubicación y se confirmará al momento del pedido."
  },
  {
    id: 6,
    pregunta: "¿Dónde están ubicados?",
    respuesta: "Estamos ubicados en [Dirección del Negocio]. Visítanos en nuestra tienda para disfrutar de nuestras delicias recién horneadas."
  },
  {
    id: 7,
    pregunta: "¿Puedo encontrar sus productos en otros puntos de venta?",
    respuesta: "Sí, además de nuestra tienda, también puedes encontrar algunos de nuestros productos en cafeterías seleccionadas en [Ciudad/Zona]. Consulta nuestras redes sociales para conocer los puntos de venta actualizados."
  }
];


function PreguntasFrecuentes() {
  return (
    <Container>
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        Preguntas Frecuentes
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {preguntasFrecuentes.map((preg) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={preg.id}>
            <AccordionTransition preg={preg} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PreguntasFrecuentes;
