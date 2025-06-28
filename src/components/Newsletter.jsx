import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid2,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  color="primary.main"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography variant="h6" 
                sx={{ 
                  color: 'text.secondary'
                 }}>
                  Subscribe to my newsletter for the latest updates and insights
                </Typography>
              </Box>

              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 1,
                  maxWidth: 500,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    flex: 1,
                    bgcolor: 'background.default',
                    borderRadius: 1,
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 1,
                    whiteSpace: 'nowrap',
                    minWidth: isMobile ? '100%' : 'auto',
                  }}
                >
                  Subscribe
                </Button>
              </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Newsletter;
