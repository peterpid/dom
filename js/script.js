var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
	console.log(buttons[i].innerHTML);
	alert('found button: ' + buttons[i].innerHTML);
}