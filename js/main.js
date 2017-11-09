let help = false

$(".showHelp").on("click", function(){
  if(!help){

    $(".help").css("display", "block");
    $(".showHelp").text("X");
    help = true;
  }else{
    $(".help").css("display", "none");
    $(".showHelp").text("?");
    help = false;
  };
});
