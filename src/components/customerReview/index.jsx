import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ActionAreaCard() {
	return (
		<Card sx={{ maxWidth: 545 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Dr. Awaatif Al
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Dental care
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

const CustomerReview = () => {
  return (
    <div>
			<Typography>What Our Customers Say</Typography>
			
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				{[1, 2].map(() => {
					return <ActionAreaCard />;
				})}
			</div>
		</div>
  )
}

export default CustomerReview