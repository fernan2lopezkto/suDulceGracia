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
      name: "Tarta de Chocolate Extravaganza",
      description: "Nuestra Tarta de Chocolate Extravaganza es un deleite para los amantes del chocolate. Capas de esponjoso bizcocho de chocolate negro se intercalan con un cremoso relleno de ganache de chocolate belga. La cobertura de ganache y las virutas de chocolate artesanal hacen de esta tarta una experiencia irresistiblemente rica y decadente.",
      precio: "$1200",
      img: "/suDulceGracia/esp/TartadeChocolateExtravaganza.png"
    },
    {
      name: "Cheesecake de Frutos Rojos",
      description: "Este cheesecake es una combinación perfecta de suavidad y frescura. La base de galleta crujiente sostiene una capa de cremoso queso mascarpone, que se equilibra con una vibrante salsa de frutos rojos. Decorado con fresas, frambuesas y arándanos frescos, es el postre ideal para quienes buscan un toque de dulzura y acidez.",
      precio: "$740",
      img: "/suDulceGracia/esp/CheesecakedeFrutosRojos.png"
    },
    {
      name: "Macarons de Pistacho y Frambuesa",
      description: "Nuestros macarons de pistacho y frambuesa son un verdadero placer para el paladar. Estos delicados bocados franceses combinan la sutil dulzura del pistacho con la acidez de la frambuesa en una textura suave y crujiente. Perfectos para acompañar un café o como un regalo elegante.",
      precio: "$780",
      img: "/suDulceGracia/esp/MacaronsdePistachoyFrambuesa.png"
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
