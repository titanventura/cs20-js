function myFunction()
{
 const options = document.querySelectorAll(".options");
 let pScore = 0;
 let cScore = 0;

 options.forEach((option) => {
   option.addEventListener("click", function () {

	 const pInput = this.textContent;

	 const cOptions = ["rock", "paper", "scissors"];
	 const cInput = cOptions[Math.floor(Math.random() * 3)];

	 compareInputs(pInput, cInput);
	 updateScore();
	 if (checkWinner()) {
	   pScore = cScore = 0;
	   updateScore();
	 }
   });
 });

 function compareInputs(pInput, cInput) {
   //const currentMatch = `${pInput} vs ${cInput}`;
   if (pInput === cInput) {
	 alert(`It's a Tie`);
	 return;
   }

   if (pInput === "rock") {
	 if (cInput === "scissors") {
	   alert(`You Win`);
	   pScore++;
	 } else {
	   alert(`Computer Wins`);
	   cScore++;
	 }
   }
   //Check for Paper
   else if (pInput === "paper") {
	 if (cInput === "rock") {
	   alert(`You Win`);
	   pScore++;
	 } else {
	   alert(`Computer Wins`);
	   cScore++;
	 }
   }
   //Check for Scissors
   else {
	 if (cInput === "paper") {
	   alert(`You Win`);
	   pScore++;
	 } else {
	   alert(`Computer Wins`);
	   cScore++;
	 }
   }
 }

 function updateScore() {
   document.getElementById("human_score").textContent = pScore;
   document.getElementById("computer_score").textContent = cScore;
 }

 function checkWinner() {
   if (pScore === 5 || cScore === 5) {
	 const winner = pScore === 5 ? "You win the game! Congratulations!" : "Computer wins the game! Try again next time!";
	 alert(winner);
	 return true;
   }
   return false;
 }


}