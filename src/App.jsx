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
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isBrochure = location.pathname.includes('/pricing-brochure') || location.pathname.includes('/pricing_brochure');

  return (
    <>
      {!isBrochure && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/services" element={<Freelance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing-brochure" element={<PricingBrochure />} />
        <Route path="/pricing_brochure" element={<PricingBrochure />} />
      </Routes>
      {!isBrochure && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
