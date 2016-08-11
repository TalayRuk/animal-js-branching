var animal = ""


$(document).ready(function(){

  $("#turtle").click(function(){
    animal = 1;
  });
  $("#snakes").click(function(){
    animal = 2;
  });
  $("#insects").click(function(){
    animal = 3;
  });


$(".btn").click(function(){
if (animal === 1){
  $(".snakes,.insects").hide();
  $(".turtles").show();
}else if (animal === 2) { 
  // if use == doesn't have to match number to number .. it can match string to number//
  $(".turtles, .insects").hide();
  $(".snakes").show();
}else if (animal === 3) {
  $(".turtles, .snakes").hide();
  $(".insects").show();
}else {
  $(".turtles, .snakes, .insects").hide();
}


  });
});
