function getResults(event) {
	$('.submit').click(function showResults(event) {
		$('dl.text-report').removeClass('hidden');
	});
}

getResults();
