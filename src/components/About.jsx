import React from 'react';
import { Box, Container, Grid2, Typography, Button, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import DatabaseIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
const About = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const shortDescription = `I'm a Software Engineer with a strong foundation in software development, web technologies, and data-driven solutions. With a focus on creating robust and efficient systems, I specialize in various areas of software development.`;
    const fullDescription = (
    <>
        <Typography variant="body1" paragraph>
        I'm a Software Engineer with a strong foundation in software development, web technologies, and data-driven solutions. With a focus on creating robust and efficient systems, I specialize in:
        </Typography>
        
        <Typography component="div" sx={{ pl: 2 }}>
        <ul>
            <li><strong>Software Engineering:</strong> Designing, developing, and deploying scalable and maintainable software solutions.</li>
            <li><strong>Web Development:</strong> Crafting dynamic and user-centric web applications using modern frameworks and best practices.</li>
            <li><strong>Data Analysis:</strong> Leveraging data to drive insights and inform decision-making.</li>
            <li><strong>Database Development:</strong> Designing and managing efficient, secure, and scalable databases.</li>
            <li><strong>Backend Development:</strong> Building powerful APIs and server-side systems to power applications.</li>
        </ul>
        </Typography>
        <Typography variant="body1" paragraph>
        With a deep commitment to continuous learning, I stay up to date with the latest technologies and trends, ensuring I bring innovative solutions to the table.
        My goal is to continuously expand my knowledge and create impactful solutions. Let’s collaborate to bring your ideas to life!
        </Typography>
    </>
    );
    const skills = [
    { title: 'Data Analysis', icon: <BarChartIcon /> },
    { title: 'Backend Engineering', icon: <CodeIcon /> },
    { title: 'Software Design and Architecture', icon: <ArchitectureIcon /> },
    { title: 'DevOps', icon: <CloudIcon /> },
    { title: 'Database Management', icon: <DatabaseIcon /> },
    { title: 'Web Development', icon: <PublicIcon /> }
    ];
    return (
    <Box
        component="section"
        sx={{
        py: 8,
        bgcolor: 'background.default',
        minHeight: '100vh',
        }}
    >
     <Container maxWidth="lg">
       <Grid2 container spacing={6}>
         {/* About Me Section */}
         <Grid2 item xs={12} md={6}>
             <Typography
               variant="h2"
               component="h1"
               gutterBottom
               sx={{
                 fontWeight: 'bold',
                 fontSize: { xs: '2.5rem', md: '3.5rem' },
                 color: 'primary.main',
               }}
             >
               About Me
             </Typography>
             <Typography
                variant="body1"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 2,
                }}
                >
                {isExpanded ? fullDescription : shortDescription}
            </Typography>

             {/* Button */}
               <Button
                    variant="contained"
                    size="large"
                    onClick={() => setIsExpanded(!isExpanded)}
                    sx={{
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    }}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
         </Grid2>
          {/* Skills Section */}
         <Grid2 item xs={12} md={6}>
             <Typography
               variant="h4"
               gutterBottom
               sx={{
                 fontWeight: 'bold',
                 mb: 4,
                 color: 'primary.main',
               }}
             >
               Skills & Expertise
             </Typography>
             <Grid2 container spacing={2}>
               {skills.map((skill, index) => (
                 <Grid2 item xs={12} sm={6} key={skill.title}>
                   <Paper
                     elevation={0}
                     sx={{
                       p: 3,
                       borderRadius: 2,
                       bgcolor: 'background.paper',
                       border: '1px solid',
                       borderColor: 'divider',
                       display: 'flex',
                       alignItems: 'center',
                       gap: 2,
                       transition: 'all 0.3s ease',
                       '&:hover': {
                         borderColor: 'primary.main',
                         transform: 'translateY(-2px)',
                         boxShadow: 1,
                       },
                     }}
                   >
                     <Box
                       sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         width: 48,
                         height: 48,
                         borderRadius: '50%',
                         bgcolor: 'primary.main',
                         color: 'white',
                         flexShrink: 0,
                       }}
                     >
                       {skill.icon}
                     </Box>
                     <Typography
                       variant="h6"
                       sx={{
                         fontWeight: 'medium',
                         fontSize: '1rem',
                         color: 'text.primary',
                       }}
                     >
                       {skill.title}
                     </Typography>
                   </Paper>
                 </Grid2>
               ))}
             </Grid2>
         </Grid2>
       </Grid2>
     </Container>
   </Box>
 );
};
export default About;