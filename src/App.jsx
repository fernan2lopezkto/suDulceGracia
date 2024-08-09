import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/AppBar';
import Home from './components/Home';
import Especialidad from './components/Especialidad';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';

function App() {
  return <>
  <ResponsiveAppBar />
  <Home />
  <Especialidad />
  <PreguntasFrecuentes />
  <Contact />
  <Footer />
  </> 
  ;}

export default App;
