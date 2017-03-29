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

//two functions to breakdown input text in seperate words(had to look at solution and learn more regex)
function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

//function to define words and display result text with numbers from functions
function displayText(text) {

	var words = tokenizeText(text);
	
	$('dl.js-text-report').removeClass('hidden');
	$('dd.js-word-count').text(countWords(words));
	$('dd.js-unique-word-count').text(countUniqueWords(words));
	$('dd.js-avg-word-length').text(getAverageWordLength(words));
}

//function for when analyze button is clicked(added removeReturns from solution)
function getInputText() {
	$('button.js-submit').click(function (event) {
		var inputText = $('#user-text').val();
		displayText(removeReturns(inputText));
	});
}

$(function() {
	getInputText();
});