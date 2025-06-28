import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid2 } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfilePic from '../images/profile_pic.jpg';

const roles = ['Software Engineer','Web Developer', 'Data Analyst'];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 
          container 
          spacing={4} 
          alignItems="center"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          {/* Profile Image */}
          <Grid2 item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              <Box
                component="img"
                src={ProfilePic}
                alt="Matt Simpson"
                sx={{
                  width: { xs: '200px', md: '300px' },
                  height: { xs: '200px', md: '300px' },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: 2,
                }}
              />
            </Box>
          </Grid2>

          {/* Content */}
          <Grid2 item xs={12} md={7}>
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: 'text.primary',
                }}
              >
                Hello, I'm Matthew Simpson
              </Typography>

              <Typography variant="h5" gutterBottom>
                I'm a{' '}
                <Typography
                  component="span"
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                >
                  {roles[currentRole]}
                </Typography>
              </Typography>

              <Typography 
                variant="body1" 
                paragraph
                sx={{ color: 'text.secondary', mb: 3 }}
              >
                Passionate about creating innovative solutions. 
                Let's build something amazing together!
              </Typography>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  textTransform: 'none',
                  borderRadius: 1,
                  px: 4,
                  py: 1.5,
                }}
              >
                View My Work
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Hero;
