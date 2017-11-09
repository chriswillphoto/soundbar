let help = false

$(".showHelp").on("click", function(){
  if(!help){

    $(".help").css("display", "block");
    help = true
  }else{
    $(".help").css("display", "none");
    help = false
  }
})
