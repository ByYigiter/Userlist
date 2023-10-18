import React, { useState, useEffect } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("useEffect");
		//componenet update olduğunda
		document.title = `${count} times click`;
	});
	return (
		<div>
			<p>butona {count} click edildi</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
}

export default Counter;
