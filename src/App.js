import { Box, Container,CssBaseline,Typography,TextField,Button, Grid } from '@material-ui/core';
import React, {  useState } from 'react'



const App = ()=>{
  
  const [job,setJob] = useState();
  const [jobs,setJobs] = useState(()=>{
    const storage = JSON.parse(localStorage.getItem('jobs'))
    return storage ?? []
  });
  
  const handleSubmit = () =>{
    setJobs(prev => {
      const newJob = [...prev,job];
      const jsonJobs = JSON.stringify(newJob)
      localStorage.setItem('jobs',jsonJobs);
      return newJob;
    });
    setJob('')
  }

  const handleDelete = (i) =>{
    setJobs((jobs) => {
      const jobList  = jobs.filter((job) => job !== jobs[i]);
      localStorage.setItem('jobs',JSON.stringify(jobList));
      return jobList;
    })
  }
  
   return(

      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'
          }}
        >
          
          <Typography component="h1" variant="h5">
            To Do List
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Add to do"
              value={job}
              onChange={e => setJob(e.target.value)}
            />
            
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
             onClick={handleSubmit}
            >
              Add
            </Button>
          </Box>

          <Box component="form" noValidate sx={{ mt: 4 }}>
            <ul style={{listStyle:"none"}}>
               {
                 jobs.map((job,index) => (
                   <Grid container direction="row" justifyContent="space-between">
                     <li key={index}>{job}</li>
                     <button style={{margin:4}} onClick={() => handleDelete(index)}> X </button>
                   </Grid>
                 ))
               }
            </ul>
          </Box>
        </Box>
       
      </Container>
   )
}

export default App;