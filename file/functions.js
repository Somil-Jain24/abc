

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse() {
    var current = new Date(); // Get the current date and time
    var futureDate = new Date(current); // Create a new date object for the future date
    futureDate.setFullYear(current.getFullYear() + 20); // Add 20 years to the current date

    var seconds = (futureDate - current) / 1000; // Calculate the difference in seconds
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60); // Ensure seconds is an integer

    // Format hours, minutes, and seconds to be two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Construct the result string
    var result = "Days <span class=\"digit\">" + days + "</span> " +
                 "Hours <span class=\"digit\">" + hours + "</span> " +
                 "Minutes <span class=\"digit\">" + minutes + "</span> " +
                 "Seconds <span class=\"digit\">" + seconds + "</span>"; // Added seconds

    $("#clock").html(result);
    var text = "THE WORLD JUST GOT LUCKIER SINCE ";
    $("#message-box").html(text);
}

// Usage
timeElapse(); // Call the function directly
