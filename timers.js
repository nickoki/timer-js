/*
When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
When "Reset" is clicked, the text should return to "Stop Watch"
When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
*/

// TODO switch start button to reset button after click

// Global variables
var time = 0;
var seconds = "";
var minutes = "";
var hours = "";
var timerLog = [];
var isRunning = false;
var isPaused = false;


// Start button
$(start).on('click', function() {
	if (!isRunning) {
		// If not running
		// Change display
		$(timer).html("Time elapsed: ");
		$(timer).append('<span></span>');
		$(timer).children().html(time);
		// Enable pause button
		$(pause).removeAttr('class', 'disabled');
		// Start timing
		incrementTime();
		// Switch to stop button
		$(start).html('Stop');
		// Set clock to running
		isRunning = true;
	} else {
		// If running
		// Stop clock
		$(timer).html("Stop Watch");
		clearInterval(timerLog[0]);
		timerLog = [];
		time = 0;
		// Switch to start button
		$(start).html('Start');
		// Disable & fix pause button
		$(pause).attr('class', 'disabled');
		if (isPaused === true) {
			isPaused = false;
			$(pause).html('Pause');
		}
		// Set clock to not running
		isRunning = false;
	}

})

// Pause button
$(pause).on('click', function() {
	if (isPaused === false) {
		isPaused = true;
		$(pause).html('Unpause');
		$(pause).attr('class', 'active');
	} else {
		isPaused = false;
		$(pause).html("Pause");
		$(pause).removeAttr('class', 'active');
	}
})



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
	console.log(time);
	if (!isPaused) {
		time++;
		$(timer).children().html(time);
	}
}


// Time Formatting
