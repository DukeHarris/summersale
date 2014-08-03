$( document ).ready(function() {

	$.getJSON( "/stuff.json", null, function( data, Status, xhr ){

		var table = $("#stuff");
		var random = 0;
		$.each(data, function(index, val) {

			var random = Math.floor((Math.random() * 100000000) + 1);
			var tr = document.createElement('tr');

			$(tr).append("<td class='description'><span class='title'>" + val['title'] + "</span> (" + val['owner'] + ")" + " <br/> " + val['description'] + "</td>");
			$(tr).append("<td class='quantity'>" + val['quantity'] + "</td>");
			$(tr).append("<td class='price'>$" + parseFloat(val['price'], 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString() + " ($" + parseFloat(val['retail'], 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString() + ")</td>");

			var imgTd = document.createElement('td');

			$.each(val['images'], function(index, img) {
				$(imgTd).append("<a class='" + random + "' href='" + img + "' rel='shadowbox'><img class='thump' src='" + img +"'' /></a>");
			});

			$(tr).append(imgTd);
			table.append(tr);
			Shadowbox.setup("a."+random, {
				gallery: val['title']
			});

			var linksTd = document.createElement('td');
			$.each(val['urls'], function(index, url) {
				$(linksTd).append("<a href='" + url + "'>[" + (index+1) + "]</a>")
			});

			$(tr).append(linksTd);

		});

	});



});