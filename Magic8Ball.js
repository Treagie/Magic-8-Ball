const startGame = document.getElementById("button-start");

startGame.addEventListener("click", function(){
  alert("The game begins...")
  let userName = prompt("What is your name?");
  let question = prompt(`Hello, ${userName}! What is your question?`)
});

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
   eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

//use DOM to alert outcome to the page here:

const endGame = document.getElementById("button-end");

endGame.addEventListener("click", function(){
  alert("The mystical, magical 8 Ball speaks...");
  alert("In a voice etched with the creaking of time, it says: " + eightBall + ".");
  //var result = document.querySelector("p");
  //result.textContent = ("The Great and Powerful Magic 8 Ball responded with..." + eightBall);
})





//alert(`The eight ball answered: ${eightBall}`);
