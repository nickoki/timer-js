/*
When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
When "Reset" is clicked, the text should return to "Stop Watch"
When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
*/

// TODO switch start button to reset button after click

var time = 0;
var timerLog = [];

// Start button
$(start).on('click', function() {
	$(timer).html("Time elapsed: ");
	$(timer).append('<span></span>');
	$(timer).children().html(time);

	incrementTime();
});

// Reset button
$(reset).on('click', function() {
	$(timer).html("Stop Watch");
	clearInterval(timerLog[0]);
	timerLog = [];
	time = 0;
});

// Pause button


// Time Increment function, every 1 second
function incrementTime() {
	// Check for multiple timers
	if (timerLog.length > 0) {
		throw "Only One Timer Allowed";
	} else {
		timerLog.push(setInterval(setTime, 1000));
	}
}

function setTime() {
	time++;
	console.log(time);
	$(timer).children().html(time);
}




/*
timers = [];
start.on("click", function(){
  timers.push(setInterval(singAnnoyingSong, 500));
  console.log(timers);
});

stop.on("click", function(){
  for (var i = 0; i < timers.length; i++) {
    clearInterval(timers[i])
  }
  timers = [];
});
*/
