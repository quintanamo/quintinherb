function changeProjectInfo(title) {

	var projectTitle = document.getElementById('project-title');
	var projectDescription = document.getElementById('project-description');
	var projectLink = document.getElementById('project-link');
	var projects = document.getElementsByClassName('project-name');

	for (project of projects) {
		project.style.borderRight = '10px solid transparent';
	}

	title.style.borderRight = '10px solid #ffffff';

	projectTitle.innerHTML = title.innerHTML;

	if (title.innerHTML == 'MyRecordCollection') {
		projectDescription.innerHTML = 'A user-friendly interface developed in Java to organize a record collection. The program accepts inputs for the catalog number, title, artist, and release year of the record. The user may sort their collection based on title, artist, or year in addition to searching by album title or artist name.';
		projectLink.href = 'https://quintinherb.net/downloads/projects/MyRecordCollection.zip';
	}
	if (title.innerHTML == 'Java Timer') {
		projectDescription.innerHTML = 'A second-based timer developed in Java that counts down from a given integer input to 0. The timer may be started at anywhere between 1-9999 seconds. The timer may be paused and resumed or reset at any given time. When the timer hits 0, the program outputs a message saying "Time\'s up!"';
		projectLink.href = 'https://quintinherb.net/downloads/projects/Timer.jar';
	}
	if (title.innerHTML == 'Paint by Quintin') {
		projectDescription.innerHTML = 'A simple paint program developed in C# as an individual project for CS320 to learn something entirely self-taught. The user can change brush color, canvas color, brush size, and brush shape in addition to saving their drawings as png, jpeg, gif, or bmp. The canvas may also be cleared at any time.';
		projectLink.href = 'https://quintinherb.net/downloads/projects/PaintByQuintin.zip';	
	}
	if (title.innerHTML == 'Hackman') {
		projectDescription.innerHTML = 'A text-based word-guessing game developed in QBasic to run on an MS-DOS computer. The player may select a difficulty which determines the number of letters in the word they are guessing. The game provides hints by notifying the player if any of the letters entered are positioned in relation to the word being guessed.';
		projectLink.href = 'https://quintinherb.net/downloads/projects/Hackman.zip';
	}
	if (title.innerHTML == 'Disk Game') {
		projectDescription.innerHTML = 'A simple Java game developed as an assignment for CS201 to explore and practice the concepts of object-oriented programming. The player attempts to place as many disks in a given area within the allotted time. The allotted time decreases with each disk placed. If the player runs out of time, overlaps disks, or places a disk out of bounds, the game ends.';
		projectLink.href = 'https://quintinherb.net/downloads/projects/DiskGame.jar';
	}

}