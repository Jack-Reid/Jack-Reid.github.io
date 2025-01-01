function expand() {
	var x = document.getElementById("links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
	return x
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event=>document.body.classList.toggle('dark-mode'))

window.onload = function() {if (window.matchMedia('(prefers-color-scheme: dark)').matches) {document.body.classList.add('dark-mode')} else {document.body.classList.remove('dark-mode')}};
