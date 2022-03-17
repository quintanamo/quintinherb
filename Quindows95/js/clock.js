function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = checkTime(minutes);
    let suffix = "AM";
    if (hours > 12) {
        hours -= 12;
        suffix = "PM";
    } else if (hours == 0) {
        hours = 12;
    } else if (hours == 12) {
        suffix = "PM"
    }
    document.getElementById('clock').innerHTML =  hours + ":" + minutes + " " + suffix;
    setTimeout(startTime, 1000);
}
  
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
}