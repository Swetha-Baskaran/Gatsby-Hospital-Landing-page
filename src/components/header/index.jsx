import React from "react";
import { Button, Stack } from "@mui/material";

const Header = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-evenly" }}>
			<div>
				<h2>Welcome to MediCare+ Clinic</h2>
				<h1>Best Specialists</h1>
				<p>
					We are on the leading edge of cancer care. Providing the full
					continuum of cancer treatments and supportive care services in a
					single convenient location.
				</p>
				<div style={{"display" : "flex"}}>
        <Button
					variant='contained'
					sx={{ my: 2, px: 2, color: "white", display: "block" }}
					style={{
						color: "white",
						background: "#0073FF",
						borderRadius: "30px",
					}}>
					Contact
				</Button>
				<Button
					variant='contained'
					sx={{ my: 2, px: 2, color: "white", display: "block" }}
					style={{
						color: "white",
						background: "#0073FF",
						borderRadius: "30px",
					}}>
					Contact
				</Button>
        </div>
			</div>
			<div>
				<svg
					width='374'
					height='472'
					viewBox='0 0 574 672'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='574' height='672' rx='32' fill='#EBEEFF' />
				</svg>
			</div>
		</div>
	);
};

export default Header;
