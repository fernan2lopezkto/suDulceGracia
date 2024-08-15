// src/data/texts.js

const texts = {
  // Textos del componente Home.jsx
  welcomeMessage: "Bienvenidos a",
  title: "Su Dulce Gracia",
  description: "Donde cada bocado es una delicia. Desde [año de fundación], nos dedicamos a crear pasteles y postres que no solo deleitan el paladar, sino que también tocan el corazón. Nuestra pasión por la repostería se refleja en cada una de nuestras creaciones.",

  // Textos del componente Especialidad.jsx
  especialidadesTitle: "Los más pedidos",
  especialidadesDescription: "Nuestros clientes adoran nuestros productos estrella como la Tarta de Chocolate, el Cheesecake de Frutos Rojos y nuestros Macarons. Cada uno de estos postres es elaborado con ingredientes de la más alta calidad y un toque de amor que los hace únicos.",
  
  especialidadesList: [
    {
      name: "Feliz Dia!!",
      description: "Este plato nacional de Perú vive un momento de mucha fama en la actualidad, luego de destacarse en diferentes ferias gastronómicas realizadas en distintas partes del mundo. El ceviche peruano se prepara con pescado o mariscos crudos, cebolla, chile, jugo de limón y sal. Puede ir acompañado de camote, choclo, cancha serrana o chifles.",
      precio: "$1200",
      img: "/suDulceGracia/esp/esp1.webp"
    },
    {
      name: "Paella",
      description: "La paella es un clásico de España que ha sabido ganarse el aprecio internacional. Originaria de Valencia, debe su nombre a la gigante “paellera” dónde se cocina. Se trata de un buen plato de arroz y mariscos, condimentado con azafrán y hierbas verdes. Como siempre, hay muchas versiones y se hace también con pollo, cerdo o, simplemente, vegetales.",
      precio: "$740",
      img: "/suDulceGracia/esp/esp2.webp"
    },
    {
      name: "Chocolate!!",
      description: "Su exquisitez y practicidad les han permitido a los burritos consagrarse como otra de las comidas más populares del universo. Autóctono de México, contiene algunos de los ingredientes más representativos de su país: una tortilla tradicional, a la que se le agrega un relleno -generalmente carne, pollo y maíz- y luego se la enrolla para formar el famoso burrito.",
      precio: "$780",
      img: "/suDulceGracia/esp/esp3.jpg"
    }
  ],

  // Textos del componente PreguntasFrecuentes.jsx
  preguntasFrecuentesTitle: "Preguntas Frecuentes",
  preguntasFrecuentesList: [
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
  ]
};

export default texts;
