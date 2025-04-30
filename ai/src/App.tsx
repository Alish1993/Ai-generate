import React from 'react';
import { Container, Typography } from '@mui/material';
import SunsetImageComponent from './components/SunsetImageComponent';

function App() {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Pollinations Demo
      </Typography>
      <SunsetImageComponent />
    </Container>
  );
}

export default App;
