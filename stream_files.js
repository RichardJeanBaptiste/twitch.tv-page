$(document).ready(function() {

  $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       	
       $("#status").html("offline");
      $("#stream").toggleClass("offline");
     }else{
        console.log("online");
        $("#status").html("online");
        $("#game").html("currently playing -" + " " + data.stream.game);
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
     };
   }
});

  $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       
       $("#status").html("offline");
       $("#stream").toggleClass("offline");
     }else{
        console.log("online");
        $("#status1").html("online");
        $("#game1").html("currently playing -" + " " + data.stream.game);
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
     };
   }
});
  
   $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/NALCS1',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       	
       $("#status2").html("offline");
       $("#stream").toggleClass("offline");
}else{
        console.log("online");
        $("#status2").html("online");
        $("#game2").html("currently playing -" + " " + data.stream.game);
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/nalcs1" + ">" + data.stream.channel.display_name + "</a></p>");
     };
   }
});


   $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/overwatchcontenders',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
       $("#status3").html("offline");
       $("#stream").toggleClass("offline");
     }else{
        console.log("online");
        $("#status3").html("online");
        $("#game3").html("currently playing -" + " " + data.stream.game);
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
     };
   }
});

  
      $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/imaqtpie',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

     $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/nightblue3',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

       $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/cretetion',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/storbeck',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/habathcx',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/netherrealm',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});


    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/playoverwatch',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});


    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/forsenlol',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
       
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

     $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/SilentSentry',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

      $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/Wraxu',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

       $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/MakaHost',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/trick2g',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/TrumpSC',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

   $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/Savjz',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/dota2ti',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});


     $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/dota2ti_crowd',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});

      $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/anisajomha',
    dataType: 'jsonp',
    success: function(data){
      if(data.stream === null){
        //console.log(data.stream);
      } else {
        $("#home").append("<p " + ">" + "<a href=" + "https://www.twitch.tv/" + data.stream.channel.display_name + ">" + data.stream.channel.display_name + "</a></p>");
      };
   }
});
  
  
  
  

});