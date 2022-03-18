let numWindows = 0;
let currWindowID = 1;

function dragElement(element) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(element.id + "-header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(element.id + "-header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		element.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

  	function elementDrag(e) {
	  	if (!element.classList.contains("maximized")) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			if (element.offsetTop - pos2 < 0)
			{
				element.style.top = 0 + "px";
			}
			else if (element.offsetTop - pos2 > document.body.clientHeight - 70)
			{
				element.style.top = (document.body.clientHeight - 70) + "px";
			}
			else
			{
				element.style.top = (element.offsetTop - pos2) + "px";
			}
			if (element.offsetLeft - pos1 < 0)
			{
				element.style.left = 0 + "px";
			}
			else if (element.offsetLeft - pos1 > document.body.clientWidth - 50)
			{
				element.style.left = (document.body.clientWidth - 50) + "px";
			}
			else
			{
				element.style.left = (element.offsetLeft - pos1) + "px";
			}
		}
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function maxWindow(id, button) {
	let element = document.getElementById(id);

	button.setAttribute("onMouseDown", "javascript: unmaxWindow('" + id + "', this, " + element.offsetWidth+", " + element.offsetHeight + ", " + element.offsetTop + ", " + element.offsetLeft + ");" );

	if (button.textContent == "☐") {
		button.textContent = "❐";
	}

	element.classList.add("maximized");
	element.style.width = "100%";
	element.style.height = (document.body.clientHeight - 36) + "px";
	element.style.top = "0px";
	element.style.left = "0px";
	element.style.resize = "none";
}

function unmaxWindow(id, button, width, height, top, left) {
	let element = document.getElementById(id);

	button.setAttribute("onMouseDown", "javascript: maxWindow('" + id + "', this);" );

	if (button.textContent == "❐") {
		button.textContent = "☐";
	}

	element.classList.remove("maximized");
	element.style.width = width + "px";
	element.style.height = height + "px";
	element.style.top = top + "px";
	element.style.left = left + "px";
	element.style.resize = "both";
}

function inactivateAllTaskbarButtons() {
	let taskbarButtons = document.getElementsByClassName("taskbar-button");
	for (var i = 0; i < taskbarButtons.length; i++) {
		if (taskbarButtons[i].classList.contains("active")) {
			taskbarButtons[i].classList.remove("active");
		}
	}
}

function selectDesktop(e) {
	let desktop = document.getElementById("desktop");
	if (e !== null && e.target == desktop) {
		inactivateAllTaskbarButtons();
	}
}

function updateSelectedWindow(window) {
	inactivateAllTaskbarButtons();
	let taskbarButton = document.getElementById(window.id + "-tab");
	console.log(window, taskbarButton);
	taskbarButton.classList.add("active");
	putWindowOnTop(window.id);
}

function selectWindow(e, window) {
	if (e != null && !e.target.classList.contains("window-header-button")) {
		updateSelectedWindow(window);
	}
}

function hideWindow(id) {
	let windowToHide = document.getElementById(id);
	windowToHide.style.visibility = "hidden";
	let windows = document.getElementsByClassName("window");
	let highestWindow = null;
	for (let window of windows) {
		if (window.style.visibility != "hidden") {
			if (highestWindow == null || window.style.zIndex > highestWindow.style.zIndex) {
				highestWindow = window;
			}
		}
	}
	if (highestWindow != null) {
		updateSelectedWindow(highestWindow);
	} else {
		inactivateAllTaskbarButtons();
	}
}

function selectTaskbarButton(button) {
	if (!button.classList.contains("active")) {
		inactivateAllTaskbarButtons();
		button.classList.add("active");
		putWindowOnTop(button.id.replace("-tab", ""));
	} else {
		hideWindow(button.id.replace("-tab", ""));
		button.classList.remove("active");
	}
}

function putWindowOnTop(id) {
	let selectedWindow = document.getElementById(id);
	selectedWindow.style.visibility = "visible";
	let oldIndex = selectedWindow.style.zIndex;
	let newIndex = oldIndex;
	let windows = document.getElementsByClassName("window");
	for (let window of windows) {
		if (window.id != id && window.style.zIndex > oldIndex) {
			window.style.zIndex -= 1;
			newIndex++;
		}
	}
	selectedWindow.style.zIndex = newIndex;
	setObjectElementPointerEvents(selectedWindow.id + "-object");
}

function setObjectElementPointerEvents(id) {
	let objects = document.getElementsByTagName("object");
	for (let object of objects) {
		object.style.pointerEvents = "none";
	}
	let updateObject = document.getElementById(id);
	updateObject.style.pointerEvents = "auto";
}

function closeWindow(id) {
	let windowToClose = document.getElementById(id);
	let taskbarButton = document.getElementById(windowToClose.id + "-tab");
	let oldIndex = windowToClose.style.zIndex;
	windowToClose.remove();
	taskbarButton.remove();
	let windows = document.getElementsByClassName("window");
	let highestWindow = null;
	for (let window of windows) {
		if (window.style.visibility != "hidden") {
			if (highestWindow == null || window.style.zIndex > highestWindow.style.zIndex) {
				highestWindow = window;
			}
		}
		if (window.style.zIndex > oldIndex) {
			window.style.zIndex -= 1;
		}
	}
	if (highestWindow != null) {
		updateSelectedWindow(highestWindow);
	} else {
		inactivateAllTaskbarButtons();
	}
	numWindows--;
	//reassignWindowAndTaskbarIDs(id);
}

/*function reassignWindowAndTaskbarIDs(id) {
	let idNumber = id.replace(/^\D+/g, '');
	let windows = document.getElementsByClassName("window");
	for (let window of windows) {
		let windowIDNumber = window.id.replace(/^\D+/g, '');
		console.log(window.id, windowIDNumber);
		if (windowIDNumber > idNumber) {
			let taskbarButton = document.getElementById(window.id + "-tab");
			window.id = "window-" + windowIDNumber - 1;
			taskbarButton.id = window.id + "-tab";
		}
	}
}*/

function openApplication(key) {
	let application = applications[key];
	numWindows++;

	// create new window container
	let newWindow = document.createElement("div");
	newWindow.classList.add("window");
	newWindow.id = "window-" + numWindows;
	newWindow.setAttribute("onMouseDown", "javascript: selectWindow(event, this);" );
	newWindow.style.width = application.defaultWidth;
	newWindow.style.height = application.defaultHeight;
	newWindow.style.top = "40px";
	newWindow.style.left = "40px";
	newWindow.style.zIndex = numWindows + 1;
	
	// create window header
	let windowHeader = document.createElement("div");
	windowHeader.classList.add("window-header");
	windowHeader.id = newWindow.id + "-header";

	// create window title
	let windowTitle = document.createElement("div");
	windowTitle.classList.add("window-header-text");
	windowTitle.textContent = application.title;
	windowHeader.appendChild(windowTitle);

	// create close button
	let windowClose = document.createElement("div");
	windowClose.classList.add("window-header-button");
	windowClose.setAttribute("onMouseUp", "javascript: closeWindow('" + newWindow.id + "');" );
	windowClose.textContent = "✖";
	windowHeader.appendChild(windowClose);

	// create maximize button
	let windowMax = document.createElement("div");
	windowMax.classList.add("window-header-button");
	windowMax.setAttribute("onMouseDown", "javascript: maxWindow('" + newWindow.id + "', this);" );
	windowMax.textContent = "☐";
	windowHeader.appendChild(windowMax);

	// create hide button
	let windowHide = document.createElement("div");
	windowHide.classList.add("window-header-button");
	windowHide.setAttribute("onMouseDown", "javascript: hideWindow('" + newWindow.id + "');" );
	windowHide.textContent = "_";
	windowHeader.appendChild(windowHide);

	// append header to window
	newWindow.appendChild(windowHeader);

	// create window content
	let windowContent = document.createElement("div");
	windowContent.classList.add("window-content");
	windowContent.innerHTML = '<object type="text/html" id="' + newWindow.id + '-object" data="' + application.content + '" style="width: 100%; height: 100%;"></object>'

	// append window content to window
	newWindow.appendChild(windowContent);

	// append new window to desktop
	let desktop = document.getElementById("desktop");
	desktop.appendChild(newWindow);

	// create taskbar button
	let taskbarButton = document.createElement("div");
	taskbarButton.classList.add("taskbar-button");
	taskbarButton.id = newWindow.id + "-tab";
	taskbarButton.setAttribute("onMouseDown", "javascript: selectTaskbarButton(this);" );
	taskbarButton.textContent = application.title;

	// append taskbar button to footer
	let footer = document.getElementById("footer");
	footer.appendChild(taskbarButton);

	// make window draggable
	dragElement(newWindow);

	// set window as active
	updateSelectedWindow(newWindow);

	currWindowID++;
}