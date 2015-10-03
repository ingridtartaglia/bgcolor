$(document).ready(function(){
	var colors = ["LightSalmon", "LightSkyBlue", "Khaki", "Aquamarine", "Pink"];
	var index = 0;
	$("button").click(function(){
		$("body").css("background-color", colors[index++]);
		if (index == colors.length) {
			index = 0;
		}
	});
});