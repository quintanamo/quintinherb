function moveSidebar(arrow) {

	var sidebar = document.getElementById('sidebar');

	if (arrow.innerHTML == '▸') {
		arrow.innerHTML = '&#9666;';
		sidebar.style.left = '0px';
	} else if (arrow.innerHTML == '◂') {
		arrow.innerHTML = '&#9656;';
		sidebar.style.left = '-70px';
	}
}