//ADD LISTENERS TO EACH BUTTON:

//A: Find out the length of their class.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//B: Loop through them to add a listener to each of them
for( var i = 0; i < numberOfDrumButtons; i++){

  //B.1: Select each one individually with class .drum
  var b = document.querySelectorAll(".drum")[i];

  //B.2: Add event listener once clicked
  b.addEventListener("click", function(){

    //B.3: The event is to capturate the value of each one
     var buttonValue = this.innerHTML;

     //Once we have its value, we can call the functions
     makeSound(buttonValue);
     buttonAnimation(buttonValue);
  });
}

//ADD LISTENERS TO EACH KEYPRESS

document.addEventListener("keydown", function(event){

  //event = KEYPRESS DOM
  //event.key = value of it
  //Once we have its value, we can call the functions
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

// ADD ANIMATION TO BUTTON PRESSED
function buttonAnimation(value){

  //A: Select its class
  var buttonPressed = document.querySelector("."+value);

  //B: add a preexistent class that will be "animation"
  buttonPressed.classList.add("pressed");

  //C: Set a timeout to be removed (0.1 seconds)
  setTimeout(function(){

    buttonPressed.classList.remove("pressed");

  }, 100);
}
