
$('.calc-button').on('click', function() {
	var mlMin = $('.ml-min').val();
	var rad = $('.rad').val();

	var result = ((mlMin*1000) * 60) / (Math.PI * (rad/2) * (rad/2));

	$('.result').val(result.toFixed(3)); 
});

$('.calc-button2').on('click', function() {
	var cmHr = $('.cm-hr').val();
	var rad2 = $('.rad2').val();

	var result = ((cmHr * Math.PI * (rad2/2) * (rad2/2)) / (60))/1000;

	$('.result2').val(result.toFixed(3)); 
});
