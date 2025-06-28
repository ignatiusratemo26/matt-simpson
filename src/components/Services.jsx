import React from 'react';
import { Box, Typography, Grid2, Paper, useTheme, useMediaQuery } from '@mui/material';

const services = [
  
  {
    title: "Web Development",
    description:
      "With a comprehensive understanding of web development technologies, I create responsive and user-friendly websites. My skill set includes HTML, CSS, JavaScript, and various front-end frameworks.",
    icon: "🌐",
  },
  {
    title: "Data Analysis",
    description:
      "I excel in transforming raw data into meaningful insights. With strong analytical skills and proficiency in data visualization tools, I can interpret complex data sets to support decision-making processes.",
    icon: "📊",
  },
  {
    title: "Backend Development",
    description:
      "I specialize in designing and implementing server-side logic, ensuring seamless communication between the front end and the database.",
    icon: "💻",
  },
  {
    title: "Database Development",
    description:
      "I have a strong foundation in database design and architecture, enabling me to create efficient and scalable database solutions. My expertise includes normalization, indexing, and query optimization.",
    icon: "🛢️",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        textAlign: "center",
        backgroundColor: 'background.paper'
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Here are the services that I provide
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid2
            item
            xs={12} // Full width on extra small screens
            sm={6}  // Half width on small screens
            md={3}  // Quarter width on medium screens and larger
            key={index}
          >
            <Paper
              elevation={1}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "background.paper",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Box
                sx={{
                  fontSize: 50,
                  color: "primary.main",
                  mb: 2,
                }}
              >
                {service.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {service.title}
              </Typography>
              <Box
                  sx={{
                    maxWidth: isMobile ? '100%' : '250px',
                    mx: 'auto',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Services;
