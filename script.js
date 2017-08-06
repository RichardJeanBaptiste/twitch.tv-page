$(document).ready(function() {

 $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       	console.log(data.stream);
       $("#status").html("offline");
     }else{
        console.log("online");
        $("#status").html("online");
        $("#game").html("currently playing -" + " " + data.stream.game);
     };
   }
});

  $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       	console.log(data.stream);
       $("#status").html("offline");
     }else{
        console.log("online");
        $("#status1").html("online");
        $("#game1").html("currently playing -" + " " + data.stream.game);
     };
   }
});

   $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       	console.log(data.stream);
       $("#status2").html("offline");
     }else{
        console.log("online");
        $("#status2").html("online");
        $("#game2").html("currently playing -" + " " + data.stream.game);
     };
   }
});

   // page redirects
     $("#display").click(function() {
      window.open('https://www.twitch.tv/freecodecamp');
    });

     $("#display1").click(function() {
    window.open('https://www.twitch.tv/esl_sc2');
  });

      $("#display2").click(function() {
      window.open('https://www.twitch.tv/ogamingsc2');
    });

  // find stream

   $("#search").click(function(){
     var searchTerm = $("#searchTerm").val();
     var streamUrl = 'https://wind-bow.gomix.me/twitch-api/users/' + searchTerm

       $.ajax({
    url: streamUrl,
    dataType: 'jsonp',
    success: function(data){
          if(data.status === 404){
            $("#output").html(data.message);
          }else{
            $("#output").html("<a href=" + "https://www.twitch.tv/" + searchTerm + ">" + searchTerm + "</a>");
          }
       }
        
      });
   
    
   });

});


