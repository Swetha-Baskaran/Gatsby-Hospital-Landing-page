import React from 'react'
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const NewsLetter = () => {
  return (
    <div>
      <Container maxWidth="lg" style={{padding: "2rem", backgroundColor : "#0073FF", color : "white", textAlign : "center"}}>
        <Typography>
          Subscribe to Newsletter
        </Typography>
        <p>
          We have a wide experience in experience design and strategy,
        </p>
        <Box display="flex" justifyContent="center" backgroundColor="white">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
							variant='contained'
              sx={{ my: 2, px:2, color: "white", display: "block" }}
							style={{
								color: "white",
								background: "#0073FF",
								borderRadius: "30px",
							}}>
							Send Now
						</Button>
        </Box>
      </Container>
    </div>
  )
}

export default NewsLetter