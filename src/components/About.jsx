import { Container, Typography, Grid } from "@mui/material";

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import fondo from "../assets/mid/midfondo3.png";
import texts from "../data/texts";
import clientData from "../data/clientData"


function About() {
  
  const { ref, inView } = useInView({ triggerOnce: true });
  
  const animations = {
    slideIn: { initial: { x: '100%' }, animate: { x: 0 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } }}

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#222444",
      }}
    >
      <div style={{ backgroundColor: "rgba(200, 240, 200, 0.7)" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor: 'rgba(200,200,200,0.8)'
          }}
        >
          <motion.div
            ref={ref}
            initial={animations["fadeIn"].initial}
            animate={inView ? animations["fadeIn"].animate : animations["fadeIn"].initial}
            transition={{ duration: 3 }}
          >
            <Grid
              container
              justifyContent="center"
              //alignItems="center"
              spacing={4}
            >
              <Grid item xs={12}>
                <Typography variant="h2" component="h1" textAlign="center">
                  {clientData.companyName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="p"
                  textAlign="center"
                ></Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="p" mb={2}>
                  {texts.aboutp1}
                </Typography>
                <Typography variant="body1" component="p">
                  {texts.aboutp2}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="p" mb={2}>
                  {texts.aboutp3}
                </Typography>
                <Typography variant="body1" component="p">
                  {texts.aboutp4}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
export default About;
