import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ActionAreaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Dr. Awaatif Al
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

const ServiceComponent = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Typography>Our Services</Typography>
			<p>
				We provide the most full medical services, so every person could
				heave the oppurtunity to receive qualitative medical help.
			</p>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				{[1, 2, 3, 4].map(() => {
					return <ActionAreaCard />;
				})}
			</div>
		</div>
	);
};

export default ServiceComponent;
