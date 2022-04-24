document.addEventListener("DOMContentLoaded", () => {
	Array.from(document.getElementsByClassName("element")).forEach((el) => {
		el.addEventListener("click", (event) => {
			console.log(event.target);
		});
	});
});

const choices = ["Rock", "Paper", "Scissors"];

const rock =  document.getElementById("rock");
const paper =  document.getElementById("paper");
const scissors =  document.getElementById("scissor");

var user_score = 0;
var comp_score = 0;

rock.addEventListener("click", function(){
	user_choice = "Rock";
	console.log(user_choice);
	var comp_choice = choices[Math.floor(Math.random() * choices.length)];
	console.log(comp_choice);

	if(comp_choice == "Paper"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Computer Wins </font>';
		comp_score++; 
		document.getElementById("computer_score").innerHTML = comp_score;
	}
	else if(comp_choice == "Scissors"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> You Win </font>';
		user_score++; 
		document.getElementById("human_score").innerHTML = user_score;
	}
	else{
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Draw </font>';
	}
});

paper.addEventListener("click", function(){
	user_choice = "Paper";
	console.log(user_choice);
	comp_choice = choices[Math.floor(Math.random() * choices.length)];
	console.log(comp_choice);
	if(comp_choice == "Scissors"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Computer Wins </font>';
		comp_score++; 
		document.getElementById("computer_score").innerHTML = comp_score;
	}
	else if(comp_choice == "Rock"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> You Win </font>';
		user_score++;
		document.getElementById("human_score").innerHTML = user_score;
	}
	else{
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Draw </font>';
	}
});

scissors.addEventListener("click", function(){
	user_choice = "Scissors";
	console.log(user_choice);
	comp_choice = choices[Math.floor(Math.random() * choices.length)];
	console.log(comp_choice);
	if(comp_choice == "Rock"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Computer Wins </font>';
		comp_score++; 
		document.getElementById("computer_score").innerHTML = comp_score;
	}
	else if(comp_choice == "Paper"){
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> You Win </font>';
		user_score++;
		document.getElementById("human_score").innerHTML = user_score;
	}
	else{
		document.getElementById("info").innerHTML = '<span style="font-weight: bold; font-size: 30px"> Draw </font>';
	}
});

