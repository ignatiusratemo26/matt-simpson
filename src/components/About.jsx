import React from 'react';
import { Box, Container, Grid2, Typography, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import DatabaseIcon from '@mui/icons-material/Storage';
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
    { title: 'Data Analysis', icon: <BarChartIcon color="primary" /> },
    { title: 'Backend Engineering', icon: <CodeIcon color="primary" /> },
    { title: 'Software Design and Architecture', icon: <ArchitectureIcon color="primary" /> },
    { title: 'DevOps', icon: <CloudIcon color="primary" /> },
    { title: 'Database Management', icon: <DatabaseIcon color="primary" /> },
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
         <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
             <Paper
               elevation={1}
               sx={{
                 p: 4,
                 borderRadius: 2,
                 bgcolor: 'background.paper',
                 width: '100%',
                mx: 'auto', 
               }}
             >
               <Typography
                 variant="h4"
                 gutterBottom
                 sx={{
                   fontWeight: 'bold',
                   mb: 3,
                   color: 'primary.main',
                 }}
               >
                 Skills
               </Typography>
                <List>
                 {skills.map((skill, index) => (
                     <ListItem
                       key={skill.title}
                       sx={{
                         py: 2,
                         '&:hover': {
                           backgroundColor: 'action.hover',
                           borderRadius: 1,
                         },
                       }}
                     >
                       <ListItemIcon>
                         {skill.icon}
                       </ListItemIcon>
                       <ListItemText
                         primary={skill.title}
                         primaryTypographyProps={{
                           fontWeight: 'medium',
                           fontSize: '1.1rem',
                         }}
                       />
                     </ListItem>
                 ))}
               </List>
             </Paper>
         </Grid2>
       </Grid2>
     </Container>
   </Box>
 );
};
export default About;