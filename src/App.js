import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Nav />
        
        <Routes>
          {/* Page principale */}
          <Route path="/" element={
            <>
              <Banner />
              <About />
              <Services />
              <Work />
              <Contact />
            </>
          } />

          {/* Page des messages */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
