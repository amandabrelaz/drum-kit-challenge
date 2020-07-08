
//Add an event listener on click
$(".drum").click(function(){

  var buttonValue = this.innerHTML;

  makeSound(buttonValue);
  buttonAnimation(buttonValue);

});


//Add event listener on keypress
$(".drum").keypress(function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

//ADD A SOUND TO EACH BUTTON
function makeSound(value){

  switch(value){

    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    default: console.log(value);
  }
}

function buttonAnimation(value){

  //Grab button's pressed class
  var buttonPressed = $("."+value);

  //add a class
  $(buttonPressed).addClass("pressed");

  //timeout to remove class
  setTimeout(function(){

    $(buttonPressed.removeClass("pressed"));

  },100);

}
