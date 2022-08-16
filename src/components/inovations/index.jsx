import React from "react";
import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

const Inovation = () => {
	return (
		<div md={{ display: "block" }} className='inovation-container'>
			<div className='inovation-cont'>
				<h1 className='best-name'>Clinic With Innovative</h1>
				<p className='inovation-header-text'>
					We provide the most full medical services, so every person could
					heave the oppurtunity to receive qualitative medical help.
				</p>
				<Button
					variant='contained'
					sx={{ my: 2, px: 2, color: "white", display: "block" }}
					style={{
						color: "white",
						background: "#0073FF",
						borderRadius: "30px",
						margin: "2rem 0",
					}}>
					Learn More
				</Button>
			</div>
			<div className='box-cont'>
				<div className='box-cont-inovation'>
					<ActionAreaCard value={dataArray[0]} />
					<br />
					<ActionAreaCard value={dataArray[1]} />
				</div>
				<div className='box-cont-inovation'>
					<ActionAreaCard value={dataArray[2]} />
				</div>
			</div>
		</div>
	);
};

function ActionAreaCard({ value }) {
	return (
		<Card sx={{ maxWidth: 345 }} className='inovation-card'>
			<CardActionArea>
				<img src={value.svg} className='inovation-img' />
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='inovation-name'>
						{value.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Inovation;

const dataArray = [
	{
		name: "Qualified Doctors",
		svg: img1,
	},
	{
		name: "24 Hours Services",
		svg: img2,
	},
	{
		name: "Emergency Care",
		svg: img3,
	},
];
