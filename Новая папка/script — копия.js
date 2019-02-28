let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.instagram.com/v1/users/2093101329/media/recent/?access_token=2093101329.0e4abd3.d017a21b3e6e45408126e42cf0940d79', true);
xhr.send();
xhr.onreadystatechange = function (e) { 
	var response = xhr.responseText;
	if (xhr.readyState == 4) {
		console.log(response);
		var xparse = JSON.parse(response);
		var xData = 
	}
}
xhr.status();