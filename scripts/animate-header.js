let count = -1;
let headerText = document.getElementById('animate-header');
let options = ['ualified', 'uaint', 'ualitative', 'uiet', 'uintin' ];

setInterval(function(){ 
    headerText.className = "fadeOut";
    setTimeout(function(){
        headerText.textContent = options[count];
        headerText.className = "fadeIn";
    }, 1100);
    count++;
    if (count > options.length - 1) {
        count = 0;
    }
 }, 5000);