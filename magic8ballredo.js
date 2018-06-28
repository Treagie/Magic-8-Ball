const startGame = document.getElementById("button-start");

startGame.addEventListener("click", function(){
  swal({
    title: "A gust of wind whips around you",
    text: "The game begins...",
    icon: "success",
    button: "I'm ready!",
  });
  
  //alert("The game begins...")
  let userName = prompt("What is your name?");
  let question = prompt(`Hello, ${userName}! What is your question?`)
});

function eightBall() {
	var responses = ["It is certain", "It is decidedly so", "Reply hazy try again", "Cannot predict now", "Do not count on it", "My sources say no", "Outlook not so good", "Signs point to yes"];
	
	for(var i = 0; i < responses.length; i++) {
		i = Math.floor(Math.random() * responses.length);
		return responses[i];
	}
}

const endGame = document.getElementById("button-end");

endGame.addEventListener("click", function(){
  
  swal({
    title: "In a voice etched with the creaking of time, it says:",
    text: eightBall(),
    icon: "info",
    button: "So now you know!"
  })
})