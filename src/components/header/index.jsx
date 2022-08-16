import React from "react";
import { Button } from "@mui/material";
import "./style.css";
import img from "../../images/headerImg.png";

const Header = () => {
	return (
		<div className='header-container'>
			<div className='header-cont'>
				<h2>Welcome to MediCare+ Clinic</h2>
				<h1 className='best-name'>Best Specialists</h1>
				<p className='header-p'>
					We are on the leading edge of cancer care. Providing the full
					continuum of cancer treatments and supportive care services in a
					single convenient location.
				</p>
				<div className="header-btns">
					<Button
						variant='contained'
						sx={{ my: 2, px: 2, color: "white", display: "block" }}
						style={{
							color: "white",
							background: "#0073FF",
						}}>
						Make an appointment
					</Button>

					<Button
						variant='contained'
						sx={{ my: 2, px: 2, color: "white", display: "block" }}
						style={{
							color: "#0073FF",
							background: "white",
						}}>
						Departments
					</Button>
				</div>
			</div>
			<div>
				<img className='header-box' src={img} />
			</div>
		</div>
	);
};

export default Header;
