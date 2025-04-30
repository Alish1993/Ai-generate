import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
  Card,
  CardMedia,
} from '@mui/material';

const SunsetImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [inputValue, setInputValue] = useState('');

  const generateImage = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    try {
      const encodedPrompt = encodeURIComponent(inputValue);
      const response = await axios.get(`https://image.pollinations.ai/prompt/${encodedPrompt}`);
      setImageUrl(response.request.responseURL);
      setPrompt(inputValue);
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Generate Any Image
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your prompt..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <Button
           variant="outlined"
            onClick={generateImage}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Image'}
          </Button>

          {loading && <Typography mt={2}>Loading...</Typography>}
        </Box>

        {/* Правая колонка — изображение */}
        <Box sx={{ flex: 1 }}>
          {!loading && imageUrl && (
            <Card>
              <CardMedia
                component="img"
                src={imageUrl}
                alt={prompt}
                sx={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </Card>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default SunsetImageComponent;
