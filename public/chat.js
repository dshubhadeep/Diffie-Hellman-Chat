// Make conn.
const socket = io.connect("http://localhost:3300");
let secure = false;

let message = document.getElementById("message"),
	handle = document.getElementById("handle"),
	btn = document.getElementById("send"),
	output = document.getElementById("output"),
	feedback = document.getElementById("feedback");

window.onload = () => {
	let msg = document.getElementById("msg");
	let body = document.body;
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
				btn.className = "";
				btn.disabled = false;
				secure = true;
				alert("Connection secure.");
			} else {
				btn.className += "disabled";
				btn.disabled = true;
				alert("Connection not secure.");
			}
		});
	});
};

// Emit events
btn.addEventListener("click", function() {
	socket.emit("chat", {
		message: message.value,
		handle: handle.value
	});
	message.value = "";
	console.log("secure", secure);
});

message.addEventListener("keypress", function() {
	socket.emit("typing", handle.value);
});

// Listen for events
socket.on("chat", function(data) {
	feedback.innerHTML = "";
	output.innerHTML +=
		"<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on("typing", function(data) {
	feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});
