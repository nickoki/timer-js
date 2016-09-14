// Global variables
var seconds = 0;
var minutes = 0;
var hours = 0;
var timerLog = [];
var isRunning = false;
var isPaused = false;



// Start button
$(start).on('click', function() {
	if (!isRunning) {
		// If not running
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
		clearInterval(timerLog[0]);
		timerLog = [];
		seconds = 0;
		// Reset display
		$("#timer-hours").html("00");
		$("#timer-minutes").html("00");
		$("#timer-seconds").html("00");
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



// Time Increment (every 1 second)
function incrementTime() {
	// Check for multiple timers
	if (timerLog.length > 0) {
		throw "Only One Timer Allowed";
	} else {
		timerLog.push(setInterval(setTime, 1000));
	}
}

// Check Pause
function setTime() {
	if (!isPaused) {
		seconds++;
		formatTime();
		printTime();
		//$(timer).children().html(time);
	}
}

// Time Formatting
function formatTime() {
	// Every 60 seconds, increment minute, reset seconds
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	}
	// Every 60 minutes, increment hours, reset minutes
	if (minutes === 60) {
		hours++;
		minutes = 0;
	}
}

// Time Printing
function printTime() {
	// if seconds/minutes/hours are less than 10
	if (hours < 10) {
		$("#timer-hours").html('0' + hours);
	} else {
		$("#timer-hours").html(hours);
	}
	if (minutes < 10) {
		$("#timer-minutes").html('0' + minutes);
	} else {
		$("#timer-minutes").html(minutes);
	}
	if (seconds < 10) {
		$("#timer-seconds").html('0' + seconds);
	} else {
		$("#timer-seconds").html(seconds);
	}
}
