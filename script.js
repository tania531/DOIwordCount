var text = "When in the Course when, in the Course When in the ";

function countWords(text){
  var words = text.match(/\w+/gi);  // use regex to get only words
  
  var counts = {}; // create empty object called counts

  words.forEach(function(word, i){
    counts[word] = counts[word] || 0;  //create key val pairs - key is word, val is counts[word]
    counts[word]++;
  });
  return counts;
}

var the_count = countWords(text)
console.log("the_count: ", the_count);
