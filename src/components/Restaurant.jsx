import React from 'react';
import { Container, Grid, Typography } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider'

import fondo from '../assets/img/fondos/fondo1.webp';

const menuItemsPlatos = [
    { name: 'Ensalada César', price: '$10' },
    { name: 'Pizza Margarita', price: '$12' },
    { name: 'Hamburguesa con Queso', price: '$15' },
    { name: 'Pasta Carbonara', price: '$13' },
    { name: 'Sopa de Tomate', price: '$7' },
    { name: 'Pollo a la Parrilla', price: '$18' },
    { name: 'Tacos de Pescado', price: '$14' },
    { name: 'Bistec con Papas', price: '$20' },
    { name: 'Fajitas de Pollo', price: '$16' },
    { name: 'Risotto de Hongos', price: '$17' },
    { name: 'Lasaña de Carne', price: '$15' },
    { name: 'Sushi Variado', price: '$22' },
    { name: 'Ceviche de Camarones', price: '$19' },
    { name: 'Guiso de Cordero', price: '$21' },
    { name: 'Ensalada de Quinoa', price: '$11' },
  ];

  const menuItemsBebidas = [
    { name: 'Agua Mineral', price: '$3' },
    { name: 'Coca Cola', price: '$4' },
    { name: 'Jugo de Naranja', price: '$5' },
    { name: 'Café', price: '$2' },
    { name: 'Té', price: '$2' },
    { name: 'Cerveza', price: '$6' },
    { name: 'Vino Blanco', price: '$8' },
    { name: 'Vino Tinto', price: '$8' },
    { name: 'Limonada', price: '$4' },
    { name: 'Batido de Fresa', price: '$5' },
    { name: 'Batido de Chocolate', price: '$5' },
    { name: 'Gin Tonic', price: '$7' },
    { name: 'Margarita', price: '$7' },
  ];

function Restaurant() {
  return (
    <div style={{ 
      backgroundImage:  `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#222444'
    }}>
      <div style={{
        backgroundColor: 'rgba(220, 220, 220, 0.8)'
      }}>
    <Container id="restaurant">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom textAlign="center" mt={4}>
                    Menú
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4} >
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" textAlign="center">
                    Platos
                </Typography>
                <List>
                {menuItemsPlatos.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <Grid container spacing={4}>
                        <Grid item xs={8}>
                          <Typography>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="right">{item.price}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {index < menuItemsPlatos.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" textAlign="center">
                    Bebidas
                </Typography>
                <List>
                {menuItemsBebidas.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <Grid container spacing={4}>
                        <Grid item xs={8}>
                          <Typography>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="right">{item.price}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {index < menuItemsBebidas.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Grid>
              </Grid>
            </Grid>
        </Grid>
    </Container>
    </div>
    </div>
  )
}
export default Restaurant