let help = false

$(document).ready(function(){
  $(".showHelp").on("click", function(){
    if(!help){

      $(".help").show(500);
      $(".showHelp").text("X");
      help = true;
    }else{
      $(".help").hide(500);
      $(".showHelp").text("?");
      help = false;
    };
  });
});
