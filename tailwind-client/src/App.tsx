import "./App.css";

import React from "react";

function App() {
	const buttonCount = 20;

	return (
		<div className='bg-red-200 w-full h-auto'>
			{Array.from({ length: buttonCount }).map((_, index) => (
				<button
					key={index}
					className='h-24 w-24 bg-red-700 m-2 rounded-full hover:bg-blue-200 hover:rounded-none font-bold text-lg'
				>
					{index}
				</button>
			))}
		</div>
	);
}

export default App;
