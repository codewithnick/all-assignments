import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box'; 
import Navbar from './Navbar';
import Todo from './Todo';
import MyRouter from './myrouter';
import { Container, Icon, Typography } from '@mui/material';

function App() {
  return (
    <>

    <Container sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
      <Navbar></Navbar>
      <MyRouter></MyRouter>
    </Container>
    </>
  )
  }
  

export default App;
