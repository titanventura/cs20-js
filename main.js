//references to html elements
let player_info = document.getElementById("human_info");
let cpu_info = document.getElementById("computer_info");

let player_score = document.getElementById("human_score");
let cpu_score = document.getElementById("computer_score");
let info = document.getElementById("wintext");

//generates random choice for cpu
function get_cpu_element() {
	
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);
	return cpu_element;
}

const elements = ['rock','paper','scissors'];

//reference to the various choices for player
const player_elements = document.querySelectorAll(".element");

player_elements.forEach(player_element => {

	player_element.addEventListener('click', () => {
		
		//Assigns value to the various elements
		// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
		let player_element_value = elements.indexOf(player_element.id);

		let cpu_element_value = get_cpu_element() - 1;
		
		//changes image to element used by player and cpu
		player_info.src = elements[player_element_value] + ".svg";
		cpu_info.src = elements[cpu_element_value] + ".svg";

		//checking win coditions
		if(player_element_value == cpu_element_value) {
			info.textContent = "TIE!";

			info.style.color = "darkorange";
		}
		else if((player_element_value + 1)%3 == cpu_element_value) {
			info.textContent = "CPU wins!";
			cpu_score.textContent = parseInt(cpu_score.textContent) + 1;

			info.style.color = "red";
		}
		else if(player_element_value == (cpu_element_value+ 1)%3) {
			info.textContent = "Player wins!";
			player_score.textContent = parseInt(player_score.textContent) + 1;

			info.style.color = "green";
		}
	})
})