$('.calc-button').on('click', function() {
	var mlMin = $('.ml-min').val();
	var rad = $('.rad').val();

	var result = (mlMin * 60) / (Math.PI * rad * rad);

	$('.result').val(result.toFixed(3)); 
});

$('.calc-button2').on('click', function() {
	var cmHr = $('.cm-hr').val();
	var rad2 = $('.rad2').val();

	var result = ( (cmHr * Math.PI * (rad2 * rad2) ) * (1/60) );

	$('.result2').val(result.toFixed(3)); 
});
