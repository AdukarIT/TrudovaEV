$("document").ready(function(){
	$.ajax("https://jsonplaceholder.typicode.com/users", {
		method: "GET",
		dataType: 'json',
		error: function(jqXHR, textStatus, errorThrown){
			let error = 1;
		}, 
		success: function(data) {
			data.forEach(function(item){
				let user = $("<option>" + item.name + "</option>").attr("value", item.id);
				$("#users").append(user);
			});

			$("#enter").click(function(){
				let nameTmp = $("#users option:selected");
				name = nameTmp[0].innerHTML;

				data.forEach (function(item){
					if (name == item.name) {
						console.log(item);
					}

				})
			})
			
		}
	})

});

//https://jsfiddle.net/fr2yv9d6/3/  //