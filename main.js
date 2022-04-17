//reference to each element
let player_rock = document.getElementById("rock");
let player_paper = document.getElementById("paper")
let player_scissor = document.getElementById("scissor")

let info = document.getElementById("wintext");

let player_score = document.getElementById("human_score");
let cpu_score = document.getElementById("computer_score");

 //Player => Rock
player_rock.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 1) {
		info.textContent = "TIE!";
	} else if(cpu_element == 2) {
		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;
	} else if(cpu_element == 3) {
		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;	
	}

})

//Player => Paper
player_paper.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 2) {
		info.textContent = "TIE!";
	} else if(cpu_element == 3) {
		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;
	} else if(cpu_element == 1) {
		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;
	}
})

//Player => Scissor
player_scissor.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 3) {
		info.textContent = "TIE!";
	} else if(cpu_element == 1) {
		info.textContent = "CPU wins!";
		cpu_score.textContent = parseInt(cpu_score.textContent) + 1;
	} else if(cpu_element == 2) {
		info.textContent = "Player wins!";
		player_score.textContent = parseInt(player_score.textContent) + 1;
	}
})

function get_cpu_element() {
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);

	return cpu_element;
}