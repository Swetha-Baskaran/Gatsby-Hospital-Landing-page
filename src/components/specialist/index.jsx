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
					<Typography variant='body2' color='text.secondary'>
						Dental care
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

const Speciality = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Typography>We Have The Best Specialist</Typography>
			<p>
				We have a wide experience in experience design and strategy, with
				locally-rooted knowledge.
			</p>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				{[1, 2, 3, 4].map(() => {
					return <ActionAreaCard />;
				})}
			</div>
		</div>
	);
};

export default Speciality;
