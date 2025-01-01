function expand() {
	var x = document.getElementById("links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
	return x
}

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
