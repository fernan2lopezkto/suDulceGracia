import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ResponsiveAppBar from "./components/AppBar";
import Home from "./components/Home";
import Especialidad from "./components/Especialidad";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Servicios from "./components/Servicios";
import About from "./components/About";

import { ThemeProvider } from
import theme from './theme';  // Importa el tema


function App() {
  return (
    
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Home />
      <Especialidad />
      <Servicios />
      <PreguntasFrecuentes />
      <About />
      <Contact />
      <Footer />
        </ThemeProvider>
    
  );
}

export default App;
