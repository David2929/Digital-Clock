

var dateDiv = document.getElementsByClassName("date")[0]
var body = document.getElementsByTagName("body")[0]

setInterval(function()	{
	var date = new Date()

	var seconds = date.getSeconds()
	var minutes = date.getMinutes()
	var hours = date.getHours()

	if (seconds < 10)	{
		seconds = "0" + seconds
	}else if (minutes < 10)	{
		minutes = "0" + minutes
	}else if (hours < 10 ){
		hours = "0" + hours
	}else{
		seconds = seconds.toString()
		minutes = minutes.toString()
		hours = hours.toString()
	}

var hex = "#" + hours + minutes + seconds

dateDiv.innerText = hex
body.style.backgroundColor = hex


},	1000)

