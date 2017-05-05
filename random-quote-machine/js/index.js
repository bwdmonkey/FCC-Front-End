
//quoteBundle
function quote() {
 
  var quoteBundle = ["Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. -Buddha", "The most important thing is to enjoy your life - to be happy - it's all that matters. - Audrey Hepburn", "Sometimes life hits you in the head with a brick. Don't lose faith. - Steve Jobs", "Life is really simple, but we insist on making it complicated. - Confucius", "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw", "We do not remember days, we remember moments. - Cesare Pavese", "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius", "Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard", "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln", "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit. - William J. Clinton"];
  return quoteBundle[Math.floor(Math.random() * 10)];

}
function colorGen() {
  var colorBundle = ["#831616", "#580000", "#0D4F4F", "3F8080", "#53AA53", "#126912", "#834816", "#D59A68"];
  return colorBundle[Math.floor(Math.random() * 8)];
}

$(document).ready(function() {
    $("#getQuote").on("click", function(){
      var randQuote = quote();
      var html = "<i class='fa fa-quote-left'></i><p>" + randQuote + "</p><i class='fa fa-quote-right'></i>";
      var color = colorGen();
      $(".bgcolor").css("background-color", color);
      $(".color").css("color", color);
      $(".quote").html(html);
      function randQuoteEdited(quote) {
        var res = quote.replace(/'/g, "%27");
        res = res.replace(/;/g, "%3B");
        return res;
      };
      var tweetHtml = "<a target='_blank' href = 'https://twitter.com/intent/tweet?text="+ randQuoteEdited(randQuote) +"%0A%0AGenerated%20from%20http%3A%2F%2Fcodepen.io%2Fwin981026%2Ffull%2FJKvYWd%2F' style= 'color:white'><i class='fa fa-twitter'></i></a>";
      
      $(".tweet").html(tweetHtml)
    });
  });