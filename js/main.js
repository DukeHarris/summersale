$( document ).ready(function() {
	function formatCurrency(val) {
		if (!val) return "-";
		return "$" + parseFloat(val, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString()
	}

	function displayData(data) {
		var table = $("#stuff");
		$.each(data, function(index, val) {
			var tr = document.createElement('tr');

			$(tr).append("<td class='description'><span class='title'>" + val['title'] + "</span> (" + val['owner'] + ")" + " <br/> " + val['description'] + "</td>");
			$(tr).append("<td class='quantity'>" + val['quantity'] + "</td>");
			$(tr).append("<td class='price'>" + formatCurrency(val['price']) + " (" + formatCurrency(val['retail']) + ")</td>");

			var imgTd = document.createElement('td');

			$.each(val['images'], function(i, img) {
				if (img) {
					$(imgTd).append("<a class='" + index + "' href='" + img + "' rel='shadowbox'><img class='thump' src='" + img +"'' /></a>");
				}
			});

			$(tr).append(imgTd);
			table.append(tr);
			Shadowbox.setup("a."+index, {
				gallery: val['title']
			});

			var linksTd = document.createElement('td');
			$.each(val['urls'], function(i, url) {
				$(linksTd).append("<a href='" + url + "'>[" + (i+1) + "]</a>")
			});

			$(tr).append(linksTd);

		});

	}

	$.ajax("data/stuff.csv", {
		success: function(data) {
			var rowArrays = Papa.parse(data).data;
			console.log(rowArrays);
			var rowObjects = [];
			var fields = rowArrays[0];
			for (var i = 1; i < rowArrays.length; ++i) {
				var obj = {};
				for (var j = 1; j < fields.length; ++j) {
					obj[fields[j]] = rowArrays[i][j];

					if (fields[j] == "urls" || fields[j] == "images") {
						obj[fields[j]] = obj[fields[j]].split("\n");
					}
				}
				rowObjects.push(obj);
			}
			displayData(rowObjects);
		}
	});
});