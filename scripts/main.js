let modal = document.getElementById("modal");
let modalWrapper = document.getElementById("modal-wrapper");
let modalTitle = document.getElementById("modal-title");
let modalBody = document.getElementById("modal-body");
let modalLanguages = document.getElementById("modal-langauges-box");

function openModal(project) {
    modalWrapper.style.display = "block";
    populateModal(project);
}

function closeModal() {
    modalWrapper.style.display = "none";
}

function populateModal(projectName) {
    let project = projects[projectName];
    modalTitle.textContent = project.name;
    modalBody.innerHTML = project.description;
    modalLanguages.innerHTML = "";
    for (language of project.languages) {
        let languageSpan = document.createElement("span");
        languageSpan.className = "project-modal__language";
        languageSpan.textContent = language;
        modalLanguages.appendChild(languageSpan);
    }
}

const projects = {
    /*{
        name: 'YCAS Radio Telescope',
        languages: ['Kotlin', 'C#', 'HTML', 'CSS', 'JavaScript'],
        date: 'Spring 2020 - Spring 2021',
        description: '',
        github: '',
        download: '',
        view: ''
    },*/
    'Quindows95': {
        name: 'Quindows95',
        languages: ['HTML', 'CSS', 'JavaScript'],
        date: '2022',
        description: 'I decided to try to replicate the design of Windows 95 within a web page as a fun, lighthearted vanity project.  I may continue to add "applications" to it as time goes on if I ever need a quick project to fill my spare time.  View it <a href="https://quintinherb.net/Quindows95">here<a/>.',
        github: '',
        download: '',
        view: 'https://quintinherb.net/Quindows95'
    },
    'Checkbox Snake': {
        name: 'Checkbox Snake',
        languages: ['HTML', 'CSS', 'JavaScript'],
        date: '2021',
        description: 'I randomly got the idea to remake the iconic game Snake entirely with checkboxes.  The game is represented by checkboxes in various states such as the background being plain checkboxes, the snake being disabled checkboxes, and the fruit being checked checkboxes.  View it <a href="https://quintinherb.net/snake">here<a/>.',
        github: '',
        download: '',
        view: ''
    },
    'YCAS Radio Telescope': {
        name: 'YCAS Radio Telescope',
        languages: ['Kotlin', 'C#', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        date: '2020 - 2021',
        description: 'The York County Astronomical Society Radio Telescope project is currently being developed by York College of Pennsylvania students enrolled in the senior software design course. The aim of the project is to deliver real-world experience to students by exposing them to communication between both clients and teammates as well as serving as a joint operation between software engineers and mechanical engineers. There are five subteams within the software side of the project: control room, front-end, back-end, mobile, and VR, which must all work together to deliver a functional, satisfactory product. My involvement with the project began as a junior computer science student seeking opportunities that allow me to challenge myself. My advisor recommended that I join the team as an independent study student that will perform the same duties as my peers who are enrolled in the actual course so that I may assist where help is needed and facilitate the transition into the next year\'s senior software design team as a team lead. I started on the back-end subteam where I helped maintain the project\'s database to provide functionality, data persistence, and analytics to other subteams and the clients. Next semester, as a senior software student, I took on the responsibility of being the overall software lead of all of the five subteams on the project. This experience allowed me to practice organizing scrum meetings, interfacing more frequently with the clients and the capstone team, organizing presentations, and making decisions that affect the project as a whole. Additionally, I transitioned to the front-end team since previous members had graduated and left a gap in the team. This added responsibility and wearing of many hats has been an enjoyable, valuable challenge that I hope to experience something similar again. My favorite part was implementing astronomical algorithms to draw celestial objects in a JavaScript canvas object.',
        github: 'https://github.com/YCPRadioTelescope',
        download: '',
        view: ''
    },
    'Random Shift Solver': {
        name: 'Random Shift Solver',
        languages: ['Python'],
        date: 'Spring 2020',
        description: 'In my cryptology course, I was tasked with deciphering various texts that were ciphered by shifting a given letter within a given range. For example, if a message is "salad" and each letter may be shifted 0-4 places, one possible encipherment is "uanbg". While it is easier to decipher the message when the range is small, such as 0-2, doing larger ranges by hand becomes time-consuming and patterns become difficult to find. My solution to this was to first create a Python script that read 40 public domain books and keep count of how often each word in each text appears with a dictionary. This allowed me to find commonly used words across all 40 books with the intention that such common words could potentially appear in the enciphered messages. To filter out words with low numbers of occurrences, I simply took the top 10,000 words by appearance count. After writing the word list to a text file, I made a second script that takes an input of an enciphered message and the maximum range of shifts that were used when enciphering it. The script then generated shifted alphabets and searched for patterns that match potential words at a given letter. The script would then keep track of the letter each potential word match was found at and then output it in an appropriate position for easy reading. This was a very successful project as it helped find word matches that were perhaps too large to be a coincidence and which lead to deciphering the texts.',
        github: '',
        download: '',
        view: ''
    },
    'Arsenal Tracker': {
        name: 'Arsenal Tracker',
        languages: ['Python'],
        date: 'Spring 2020',
        description: 'With a Raspberry Pi, my curiosity grew in awe at the potential a computer the size of a credit card held. I decided to combine two of my strongest passions with it: programming and soccer. This project would utilize the Rasbperry Pi\'s GPIO to light up LEDs based on the current match status of my favorite soccer team Arsenal. The script on the Pi would request score data from Arsenal\'s website and output Arsenal\'s status in their latest match and output a visualization of the status using four LEDs. A green LED indicates that they are winning, yellow indicates drawing, and red indicates losing. Since a match isn\'t being played at every hour of the day (how exhausting that would be), a blue LED indicates if the status is from a live match, otherwise, it is the last match\'s status.',
        github: '',
        download: '',
        view: ''
    },
    'Find Us Food': {
        name: 'Find Us Food',
        languages: ['HTML', 'CSS', 'JavaScript'],
        date: 'Fall 2019',
        description: 'Find Us Food is a simple webpage that utilizes HERE\'s mapping API to find a random restaurant within a given radius. This project was independently developed and presented by myself for York College of Pennsylvania\'s 2019 Hackathon. A user may enter the postal code of the area they would like to eat and filter restaurant types to suit their interests. For example, if I was interested in only burger joints, pizza places, or fast food, I can use the checkboxes provided to find restaurants that fit that exact criteria.',
        github: '',
        download: '',
        view: 'https://quintinherb.net/FindUsFood'
    },
    'Virtual Keyboard': {
        name: 'Virtual Keyboard',
        languages: ['HTML', 'CSS', 'JavaScript'],
        date: 'Summer 2019',
        description: 'As an experiment, I wanted to develop an on-screen keyboard that could be depoloyed on a web page. Once I was able to add text to inputs from the virtual keyboard, I wanted to expand it in case others were interested in using it. Once the appropriate files are added to the project and linked, just a single line of HTML will automatically insert the virtual keyboard wherever the user put it in addition to automatically linking it with the textboxes on the page.',
        github: 'https://github.com/quintanamo/virtual-keyboard',
        download: '',
        view: ''
    },
    'Paint by Quintin': {
        name: 'Paint by Quintin',
        languages: ['C#'],
        date: 'Spring 2019',
        description: 'For my software engineering course, I had to take on a personal project and a team project. For my personal projected, I decided to make a simple doodle application to learn C#. In my painting program, the user has the ability to adjust their brush shape and size while also choosing their brush color and canvas background. The user may undo and redo their changes and save their work whenever they are finished.',
        github: 'https://github.com/quintanamo/PaintProgram',
        download: 'https://quintinherb.net/downloads/projects/PaintByQuintin.zip',
        view: ''
    },
    'EntreLink': {
        name: 'EntreLink',
        languages: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        date: 'Spring 2019',
        description: 'For my software engineering course, I had to take on a personal project and a team project. For the team project, my group worked on a web application that allows students within the college to share their skills and ideas to collaborate on a project. For example, if a student wants to make a mobile app to find vending machines on campus but doesn\'t know how, they may seek another student on the website who has mobile app development experience to help work on it. Students were able to create profiles displaying their interests and skills while also posting proposals either seeking help with a project or seeking to help somebody who needs it. They could also directly message a student from the post they found.',
        github: '',
        download: '',
        view: ''
    },
    'MyRecordCollection': {
        name: 'MyRecordCollection',
        languages: ['Java'],
        date: 'Spring 2019',
        description: 'To categorize my records, I developed a Java program that provided an interface I could use to add, remove, and sort records I owned. The program implemented custom comparators so I could sort by album titles, artist names, album release years, and catalog numbers. I used this project to explore Eclipse plugins that make graphical programming in Java easier.',
        github: 'https://github.com/quintanamo/MyRecordCollection',
        download: 'https://quintinherb.net/downloads/projects/MyRecordCollection.zip',
        view: ''
    },
    'Hackman': {
        name: 'Hackman',
        languages: ['QBasic'],
        date: 'Fall 2018',
        description: 'Being overtaken by curiousity, I wanted to try developing a program that could run on MS-DOS using QBasic. Using a computer with MS-DOS installed on it, I developed a game where a player tries to guess a random secret word of a given length depending on the difficulty they selected. For example, an easy word would consist of only three letters, and the user must make a guess with that knowledge. After each guess, the game will provide hints indicating if a letter in the guess matches with the actual word. For example, if the word is "ACE" and the user guessed "ARK", the game will indicate a single match since "A" appears in the same position for both the guess and the answer.',
        github: '',
        download: 'https://quintinherb.net/downloads/projects/Hackman.zip',
        view: ''
    },
};