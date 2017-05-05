$(document).ready(function($) {
  $("#submitQuery").click(function(event) {
    var jsonURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + $("#givenQuery").val() + "&callback=?";
    console.log(jsonURL);
    $.ajax({
      type: "GET",
      url: jsonURL,
      dataType: "json",
      async: true,
      success: function(data) {
        console.log(data);
        $("#wikiContent").html("");
        for (var i = 0; i < data[1].length; i++) {
          var content = "<a href="+ data[3][i] +" target='_blank'><ul class='list-group'><li class='list-group-item'><h1>" + data[1][i] + "</h1></li><li class='list-group-item'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data[2][i] + "</li></ul></a>";
        $("#wikiContent").append(content);
      }
      }
    });
  event.preventDefault();
  });
  /*
    function searchResult(title, descriptor, link) {
      var boxStart = "<div class='box'>";
      var line = "<hr>";
      var boxEnd = "</div>";
      var titleHTML = "<h2>" + title + "</h2>";
      var descriptorHTML = "<p>" + descriptor + "</p>";
      var linkStart = "<a href=" + link + " target='_blank' class='clean'>";
      var linkEnd = "</a>";

      return boxStart + linkStart + titleHTML + line + descriptorHTML + linkEnd + boxEnd;
    }
    */
});