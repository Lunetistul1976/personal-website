import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100%"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
