import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";

function ActionAreaCard() {
	return (
		<Card className='speciality-card'>
			<CardActionArea>
				<div className='empty-space'></div>
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
		<div style={{ textAlign: "center" }} className='spe-hold'>
			<h1 className='spe-h1'>We Have The Best Specialist</h1>
			<p className='spe-p'>
				We have a wide experience in experience design and strategy, with
				locally-rooted knowledge.
			</p>
			<div className="spe-cards-hold">
				{[1, 2, 3, 4].map(() => {
					return <ActionAreaCard />;
				})}
			</div>
		</div>
	);
};

export default Speciality;
