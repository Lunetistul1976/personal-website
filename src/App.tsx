import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
      >
        <Navbar />
        <Hero />
      </Box>
    </ThemeProvider>
  );
}

export default App;
