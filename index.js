
/*
$(document).ready(function() {
  
  //Twitch api workaround
  //https://wind-bow.gomix.me/twitch-api - /users/:user, /channels/:channel, /streams/:stream
  //Put all the streams into an array then use a for loop to go through the streams and return all the online or offline streams  
  //FCC stream
 var FCCapi = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
  $.getJSON(FCCapi, function(data) {
    var codecampStream = data.stream;
    

    if (codecampStream == null) {
      console.log("offline");
      $("#status").html("offline");
    } else {
      //console.log("online");
      var FCCapi2 = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp";
      var codecampGame = data.game;
      $.getJSON(FCCapi2, function(data) {
        $("#status").html("online");
        $("#game").html("currently playing -" + " " + codecampGame);
      });

    }
    $("#display").click(function() {
      window.open('https://www.twitch.tv/freecodecamp');
    });

  });

  //ESL stream
  var ESLapi = "https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2";
      
  $.getJSON(ESLapi, function(data) {
    var eslStream = data.stream;
    
    var eslGame = data.stream.game;
    if (eslStream == null) {
      //console.log("offline");
      $("#status1").html("offline");
    } else {
      //console.log("online");
      $("#status1").html("online");
      $("#game1").html("currently playing -" + " " + eslGame);

    }
  });
  $("#display1").click(function() {
    window.open('https://www.twitch.tv/esl_sc2');
  });
  //OG gaming stream
  var OGapi = "https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2";
  $.getJSON(OGapi, function(data) {
    console.log(data.stream.game);
    console.log(data.stream.channel.display_name);

    var ogStream = data.stream;
    var ogSC2 = data.stream.channel.display_name;
    var ogGame = data.stream.game;

    //$("#display").html(ogSC2);
    if (ogStream == null) {
      console.log("offline");
      $("#status2").html("offline");
    } else {
      //console.log("online");
      $("#status2").html("online");
      $("#game2").html("currently playing -" + " " + ogGame);

    }
    //only loads the page on IE dont know why codepen glitch
    $("#display2").click(function() {
      window.open('https://www.twitch.tv/ogamingsc2');
    });

  });

 
  

});

*/