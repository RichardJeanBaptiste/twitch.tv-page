$(document).ready(function() {

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
     var streamUrl = 'https://wind-bow.gomix.me/twitch-api/users/' + searchTerm;

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


