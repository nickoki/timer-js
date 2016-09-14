/*
When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
When "Reset" is clicked, the text should return to "Stop Watch"
When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
*/

var time = 0;

$(start).on('click', function() {
	time = 0;
	$(timer).html("Time elapsed: ");
	$(timer).append('<span></span>');
	$(timer).children().html(time);

	incrementTime();
});

// Time Increment function, every 1 second
function incrementTime() {
	setInterval(setTime, 1000);
}

function setTime() {
	time++;
	console.log(time);
	$(timer).children().html(time);
}
