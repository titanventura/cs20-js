//reference to each element
let player_rock = document.getElementById("rock");
let player_paper = document.getElementById("paper")
let player_scissor = document.getElementById("scissor")

let info = document.getElementById("info");

 //Player => Rock
player_rock.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 1) {
		info.textContent = "TIE!";
	} else if(cpu_element == 2) {
		info.textContent = "CPU wins!";
	} else if(cpu_element == 3) {
		info.textContent = "Player wins!";	
	}

})

//Player => Paper
player_paper.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 2) {
		info.textContent = "TIE!";
	} else if(cpu_element == 3) {
		info.textContent = "CPU wins!";
	} else if(cpu_element == 1) {
		info.textContent = "Player wins!";
	}
})

//Player => Scissor
player_scissor.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 3) {
		info.textContent = "TIE!";
	} else if(cpu_element == 1) {
		info.textContent = "CPU wins!";
	} else if(cpu_element == 2) {
		info.textContent = "Player wins!";
	}
})

function get_cpu_element() {
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);

	return cpu_element;
}