import React from "react";
import { Button, Stack } from "@mui/material";

const Inovation = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-evenly" }}>
			<div>
				<h1>Clinic With Innovative</h1>
				<p>
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
					}}>
					Learn More
				</Button>
			</div>
			<div>
				<div>
					<p>Qualified Doctors</p>
				</div>
				<div>
					<p>24 Hours Service</p>
				</div>
			</div>
			<div>
				<div>
					<p>Qualified Doctors</p>
				</div>
			</div>
		</div>
	);
};

export default Inovation;
