//reference to each element
let player_rock = document.getElementById("rock");
let player_paper = document.getElementById("paper")
let player_scissor = document.getElementById("scissor")

let info = document.getElementById("wintext");

let player_score = document.getElementById("human_score");
let cpu_score = document.getElementById("computer_score");

let player_info = document.getElementById("human_info");
let cpu_info = document.getElementById("computer_info");

 //Player => Rock
player_rock.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	player_info.src = "rock.svg";

	if(cpu_element == 1) {
		cpu_info.src = "rock.svg";

		info.textContent = "TIE!";

		info.style.color = "darkorange";

	} else if(cpu_element == 2) {
		cpu_info.src = "paper.svg";

		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;

		info.style.color = "red";

	} else if(cpu_element == 3) {
		cpu_info.src = "scissors.svg";

		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;

		info.style.color = "green";

	}

})

//Player => Paper
player_paper.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	player_info.src = "paper.svg";

	if(cpu_element == 2) {
		cpu_info.src = "paper.svg";
		
		info.textContent = "TIE!";

		info.style.color = "darkorange";

	} else if(cpu_element == 3) {
		cpu_info.src = "scissors.svg";

		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;

		info.style.color = "red";

	} else if(cpu_element == 1) {
		cpu_info.src = "rock.svg";

		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;

		info.style.color = "green";

	}
})

//Player => Scissor
player_scissor.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	player_info.src = "scissors.svg";

	if(cpu_element == 3) {
		cpu_info.src = "scissors.svg";

		info.textContent = "TIE!";

		info.style.color = "darkorange";

	} else if(cpu_element == 1) {
		cpu_info.src = "rock.svg";

		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;

		info.style.color = "red";

	} else if(cpu_element == 2) {
		cpu_info.src = "paper.svg";

		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;

		info.style.color = "green";

	}
})

function get_cpu_element() {
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);

	return cpu_element;
}