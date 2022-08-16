import React from "react";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import "./style.css";

const NewsLetter = () => {
	return (
		<div>
			<Container
				maxWidth='lg'
				className='news-cont'>
				<h1 className='news-head'>Subscribe to Newsletter</h1>
				<p className='news-p'>
					We have a wide experience in experience design and strategy,
				</p>
				<Box display='flex' justifyContent='center' alignItems='center'>
					<TextField
						style={{
							background: "white",
							color: "#0073FF",
							width: "70%",
							borderRadius: "5px 0 0 5px",
							height: "2%",
						}}
						placeholder='Enter your email address'
					/>
					<Button
						variant='contained'
						sx={{ my: 2, px: 2, color: "white", display: "block" }}
						className='sendBtn'
						style={{
							color: "white",
							background: "#0073FF",
							height: "3.4rem",
							borderRadius: "0 5px 5px 0",
							boxShadow: "0 0 3px #0000004d"
						}}>
						Send Now
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default NewsLetter;
