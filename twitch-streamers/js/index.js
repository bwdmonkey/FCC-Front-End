// TODO: Add more streamers

$(document).ready(function() {
  var streamerID = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  for (var i = 0; i < streamerID.length; i++) {
    //getLogo(streamerID[i]);
    getStatus(streamerID[i]);
  }

  function getLogo(name) {
    
  }

  function getStatus(name) {
    var callLogoURL = "https://api.twitch.tv/kraken/channels/";
    var logoURL = callLogoURL + name;
    var callStatusURL = "https://api.twitch.tv/kraken/streams/";
    var statusURL = callStatusURL + name;
    $.getJSON(statusURL, function(data) {
      var status;
      var logo;
      var twitchURL = "https://www.twitch.tv/"
      var streamerURL = twitchURL + name;
      
      if (data["stream"]) {
        status = data["stream"]["channel"]["status"];
        logo = data["stream"]["channel"]["logo"];
        $("#twitchtable").append("<tr class='tableactive'><td><img src=" + logo + " class='streamerLogo'/></td><td><a target='_blank' href=" + streamerURL + ">" + name + "</a></td><td>" + status + "</td>");
      } else {
        status = "Offline";
        $.getJSON(logoURL, function(data) {
          logo = data["logo"];
          $("#twitchtable").append("<tr><td><img src=" + logo + " class='streamerLogo'/></td><td><a target='_blank' href=" + streamerURL + ">" + name + "</a></td><td>Offline</td>");
    });
      }
    });
  }

});