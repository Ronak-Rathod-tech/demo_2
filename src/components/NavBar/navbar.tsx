import React from 'react'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'


const Navbar = () => {
    return (
        
            <Typography sx={{ fontSize: 35 }} color="blue" variant="body1">Jeff's Auto Parts
            <span>
                <Button style={{margin:10}} variant="outlined" color="primary" size="small">Delete</Button>
                <Button variant="contained" color="primary" size="small">Put On Hold</Button>
            </span>
            </Typography>

    )
}

export default Navbar
