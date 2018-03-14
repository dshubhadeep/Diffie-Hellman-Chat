// Make conn.
const socket = io.connect("http://localhost:3300");

window.onload = () => {
	let msg = document.getElementById("msg");
	const b = Math.floor(Math.random() * 9) + 1;
	socket.emit("request");
	socket.on("request", data => {
		console.log(data);
		let { q, p } = data;
		console.log("q", q, "p", p);
		console.log("b", b);
		let B = Math.pow(parseInt(q), b) % parseInt(p);
		console.log("B", B);
		socket.emit("exchange", B);
		socket.on("exchange", data => {
			let { K_a, A } = data;
			// Calculate K_b
			const K_b = Math.pow(A, b) % p;
			console.log("K_b", K_b);
			if (K_a == K_b) {
				msg.innerHTML = "SECURE";
			} else {
				msg.innerHTML = "NOT SECURE";
			}
		});
	});
};
