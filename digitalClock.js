



$document.ready(function()	{
	function displayTime()	{
		var currentTime = new Date();
		var hours = currentTime.getHours();	
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = "AM";

			if (hours > 12)	{
				hours = hours - 12;
				meridiem = "PM";
			}

			if (hours === 0)	{
				hours =12;
			}

			if (hours < 10)	{
				hours = "0" + hours;
			}

			if (minutes < 10)	{
				minutes = "0" + minutes;
			}

			if (seconds < 10)	{
				seconds = "0" + seconds;
			}




		//This gets a handle to the clock div in our html
		var clockDiv = document.getElementById('clock');


		//Then we set the text inside the clock div to the
		//hours, minutes, and seconds of the current time
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds; + " " + meridiem;

	}

		//This runsa the displayTime function the first time

		displayTime();

		//This makes our clock tick by repaetedly running the displayTime
		//function every second
		setInterval(displayTime, 1000);


});

