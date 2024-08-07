import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/AppBar';
import Home from './components/Home';
import Especialidad from './component/Especialidad';
import Footer from './components/Footer';

function App() {
  return <>
  <ResponsiveAppBar />
  <Home />
  <Especialidad />
  <Footer />
  </> 
  ;}

export default App;
