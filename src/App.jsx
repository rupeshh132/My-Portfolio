import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Freelance from './pages/Freelance';

import PricingBrochure from './pages/PricingBrochure';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/services" element={<Freelance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing-brochure" element={<PricingBrochure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
