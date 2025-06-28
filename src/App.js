import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ClientSection from './components/ClientSection';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
   <Box
   sx={{
    backgroundColor: 'background.paper',
   }}
   >
     <CssBaseline />
     <Navbar />
     <div id="home">
       <Hero />
     </div>
     <div id="about">
       <About />
     </div>
     <div id="services">
       <Services />
     </div>
     <div id="portfolio">
       <Portfolio />
       <div id="testimonials">
         <ClientSection />
       </div>
     </div>
     <div id="contact">
       <Contact />
     </div>
     <Footer />
   </Box>
 );
}
export default App;