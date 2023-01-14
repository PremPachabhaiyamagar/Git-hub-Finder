// const Alert = (alert) => {
// 	let message = "please enter something";
// 	console.log("alert+", alert);
// 	return (
// 		alert !== null && (
// 			<div className={`alert alert-${alert.type}`}>
// 				<i className="fas fa-info-circle" /> {message}
// 			</div>
// 		)
// 	);
// };
// console.log(alert);

import React from "react";

const Alert = ({ alertt }) => {
	let message = "please enter something";

	return (
		<>
			{alertt && (
				<div className={`alert`}>
					<i className="fas fa-info-circle" /> {message}{" "}
				</div>
			)}
		</>
	);
};

export default Alert;
