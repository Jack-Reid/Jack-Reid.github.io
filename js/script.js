function expand(id,disp) {
	var x = document.getElementById(id);
	if (x.style.display === disp) {
		x.style.display = "none";
	} else {
		x.style.display = disp;
	}
	return x
}

function gen_mailto_link(site,user) {
	document.write("<a href=\"mailto");
	document.write(":" + user + "@");
	document.write(site + "\">" + user + "@" + site + "<\/a>");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event=>document.body.classList.toggle('dark-mode'))

window.onload = function() {if (window.matchMedia('(prefers-color-scheme: dark)').matches) {document.body.classList.add('dark-mode')} else {document.body.classList.remove('dark-mode')}};
