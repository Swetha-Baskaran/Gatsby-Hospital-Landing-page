import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import "./style.css"
import axios from "axios";



function ActionAreaCard({ value }) {
	return (
		<Card className="card-size">
				<CardContent>
					<p className="review-msg">{value.Reviews}</p>
					<div className="card-flex">
						<div className="avatar-review">
					    	<Avatar className="avatar-img" />
						</div>
						<div>
							<h3>{value.Name}</h3>
							<p>{value.Company}</p>
						</div>
					</div>
				</CardContent>
		</Card>
	);
}

const CustomerReview = () => {
	let [state, setState] = useState([]);

	useEffect(()=>{
		axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
           .then((res) => {
			   setState(res.data.data)
			   console.log(res.data.data)
           });
	}, [])
	return (
		<div>
			<h2 className="cust-head">What Our Customers Say...</h2>
				<div className="cust-cards">
				{
					state.length !== 0 &&
					[0, 1].map((e)=>{
						return <ActionAreaCard value={state[e]} />
					})
				}
			    </div>
		</div>
	);
};

export default CustomerReview;
