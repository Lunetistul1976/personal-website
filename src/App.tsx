import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { About } from './components/About';


function App() {
  return (
    <ThemeProvider>
      <Box
        display='flex'
        flexDirection='column'
        gap={4}
        minHeight='100%'
      >
        <Navbar />
        <Hero />
        <About />
      </Box>
    </ThemeProvider>
  );
}

export default App;
