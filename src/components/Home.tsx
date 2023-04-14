import React from 'react'
import Bradcrumbs from './Bradcrumbs/bradcrumbs'
import Sidebar from './Sidebar/sidebar'
import Navbar from './NavBar/navbar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Home = () => {

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box>
            <Bradcrumbs />
            <Navbar />
            <Sidebar />
          </Box>
        </Container>
      </React.Fragment>
    </>
  )
}

export default Home
