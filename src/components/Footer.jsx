import React from 'react';
import { Box, Container, Grid2, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
 const currentYear = new Date().getFullYear();
  return (
   <Box
     component="footer"
     sx={{
       backgroundColor: 'background.paper',
       py: 6,
     }}
   >
      <Container maxWidth="lg">
       <Grid2 container spacing={4}>
         {/* Left section - Name and Description */}
         <Grid2 item xs={12} md={6}>
             <Typography variant="h6" color="text.primary" gutterBottom>
               Matt Simpson
             </Typography>
             <Typography variant="body2" color="text.secondary">
               Software Engineer passionate about creating beautiful and functional web applications.
             </Typography>
         </Grid2>
          {/* Right section - Quick Links */}
         <Grid2 item xs={12} md={6}>
             <Typography variant="h6" color="text.primary" gutterBottom>
               Connect With Me
             </Typography>
             <Box sx={{ mt: 2 }}>
               <IconButton
                 component={Link}
                 href="https://github.com/matt-simpson"
                 target="_blank"
                 rel="noopener noreferrer"
                 color="primary"
               >
                 <GitHubIcon />
               </IconButton>
               <IconButton
                 component={Link}
                 href="https://www.linkedin.com/in/matt-simpson"
                 target="_blank"
                 rel="noopener noreferrer"
                 color="primary"
               >
                 <LinkedInIcon />
               </IconButton>
               <IconButton
                 component={Link}
                 href="mailto:matt.simpson@email.com"
                 color="primary"
               >
                 <EmailIcon />
               </IconButton>
             </Box>
         </Grid2>
       </Grid2>
        {/* Copyright section */}
       <Box
         sx={{
           mt: 4,
           pt: 2,
           borderTop: '1px solid',
           borderColor: 'divider',
           textAlign: 'center',
         }}
       >
           <Typography variant="body2" color="text.secondary">
             © {currentYear} Matt Simpson. All rights reserved.
           </Typography>
       </Box>
     </Container>
   </Box>
 );
};
export default Footer;