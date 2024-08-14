import { Container, Typography, Grid } from "@mui/material";
import { motion } from 'framer-motion';
import fondo from '../assets/mid/midfondo5.png';
import texts from '../data/texts';

function Home() {
  return (
    <div style={{ 
      backgroundImage: `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#222444'
    }}>
      <div style={{ backgroundColor: 'rgba(200, 240, 200, 0.5)' }}>
        <Container 
          sx={{
            minHeight: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} 
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Grid container justifyContent="center" alignItems='center' spacing={2} >
              <Grid item xs={12}>
                <Typography variant="h6" component="p" textAlign="center">
                  {texts.welcomeMessage}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" component="h1" textAlign="center">
                  {texts.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" textAlign="center">
                  {texts.description}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
