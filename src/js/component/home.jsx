import React from "react";
import Lights from "./Lights";

const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Semáforo</h1>
			<div>
				<Lights></Lights>
			</div>
			<p>
				Made by{" "}
				<a href="https://github.com/SabrinaESMO">SabrinaESMO</a>, con amor 
			</p>
		</div>
	);
};

export default Home;
