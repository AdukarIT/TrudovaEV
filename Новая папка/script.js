let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.html', false);
xhr.send();
xhr.onloaded = function (response) {
	if (response.status === 200) {
		var responseText = response.responseText || {},
			name = responseText.name
		;
	document.getElementById('super').innerHTML = name;
	};


};
xhr.status();