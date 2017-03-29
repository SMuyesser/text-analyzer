// function to count all words
function countWords(words) {
	return words.length;
}

// function to count words not including repeated words
function countUniqueWords(words) {
	var uniqueWords = [];
	for (var i = 0; i < words.length; i++) {
		if (uniqueWords.indexOf(words[i]) === -1) {
			uniqueWords.push(words[i])
		}
	}
	return uniqueWords.length;
}

// function to determine average word length
function getAverageWordLength(words) {
	var total = words.join('').length;
	return total / countWords(words);
}



function results(event) {
	$('.submit').click(function showResults(event) {
		$('dl.text-report').removeClass('hidden');
	});
}
results();
