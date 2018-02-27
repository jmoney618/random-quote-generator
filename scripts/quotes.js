$(document).ready(function() {
  // generate random quote on page load
  generateQuote();

  // generate random quote on button click
  $("#getQuote").on("click", function() {
    generateQuote();
  });

});

// Wrap AJAX call in function to call when page is loaded and button is clicked
function generateQuote() {
  // Web API to get quote data and variables to store quote and author
  let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  let quote, author;
  // AJAX call to generate random quote
  $.getJSON(url, function(data) {

    quote = data.quoteText;
    if (data.quoteAuthor == "") {
      author = "Unknown";
    }
    author = data.quoteAuthor;

    $("#quote").html("\"" + quote + "\"");
    $("#author").html("- " + author);

    // tweet out quote
    $("#tweet").on("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author, height = 550, width = 430);
    }).close();
  });
}