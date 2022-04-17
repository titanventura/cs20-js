//reference to each element
let player_rock = document.getElementById("rock");
let player_paper = document.getElementById("paper")
let player_scissor = document.getElementById("scissor")

 //Player => Rock
player_rock.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 1) {
		console.log("TIE");
	} else if(cpu_element == 2) {
		console.log("CPU wins!");
	} else if(cpu_element == 3) {
		console.log("Player wins!");
	}

})

//Player => Paper
player_paper.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 2) {
		console.log("TIE");
	} else if(cpu_element == 3) {
		console.log("CPU wins!");
	} else if(cpu_element == 1) {
		console.log("Player wins!");
	}
})

//Player => Scissor
player_scissor.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();

	if(cpu_element == 3) {
		console.log("TIE");
	} else if(cpu_element == 1) {
		console.log("CPU wins!");
	} else if(cpu_element == 2) {
		console.log("Player wins!");
	}
})

function get_cpu_element() {
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);

	return cpu_element;
}