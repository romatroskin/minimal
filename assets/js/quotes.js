$(function() {
    var QUOTES_URL = 'https://gist.githubusercontent.com/romatroskin/6d32e7ec0ca0cd44670f0de771072a5a/raw/dcb7753294b228a344ad784e11cc12e18a07178d/quotes.json';
    $.getJSON(QUOTES_URL, function(data) {
      var index = Math.floor(Math.random() * data.quotes.length);
      $("#quote-text").text(data.quotes[index].text);
      $("#quote-author").text(data.quotes[index].author);
    });
  })