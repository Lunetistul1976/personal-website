import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
      >
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
