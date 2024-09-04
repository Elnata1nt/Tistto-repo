// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import Service from './pages/servicepage/terms-of-service';
import Header from './components/Header';
import Footer from './components/Footer';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms-of-service" element={<Service />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const RouterConfig = () => {
  return (
    <Router>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default RouterConfig;
