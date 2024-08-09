import { Container, Typography, Grid } from "@mui/material"


import { motion } from 'framer-motion';

//import bgImage from '../assets/bg1.webp';
import fondo from '../assets/img/fondos/fondoPastelNacional.jpg';

function Home() {

  return (
<div style={{ 
      backgroundImage:  `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#222444'
    }}>
<div style={{ backgroundColor: 'rgba(200, 240, 200, 0.5)' }}>
    <Container 
    sx={{
      minHeight: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'rgba(200,200,200,0.8)'
    }} >
<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
        <Grid container justifyContent="center" alignItems='center' spacing={2} >
          <Grid item xs={12}>
            <Typography variant="h6" component="p" textAlign="center">
              Bienbenidos a
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" textAlign="center">
              Su Dulce Gracia
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" component="p" textAlign="center">
            Donde cada bocado es una delicia. Desde [año de fundación], nos dedicamos a crear pasteles y postres que no solo deleitan el paladar, sino que también tocan el corazón. Nuestra pasión por la repostería se refleja en cada una de nuestras creaciones.
            </Typography>
          </Grid>
        </Grid>
        </motion.div>
    </Container>
    </div>
    </div>
  )
}
export default Home
