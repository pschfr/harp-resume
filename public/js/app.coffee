# If after 7pm or before 7am, add dark class
hour = new Date().getHours()
if (hour >= 19 or hour < 7)
	document.body.classList.add('dark')
else
	document.body.classList.remove('dark')
