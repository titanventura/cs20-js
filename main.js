//reference to each element
let player_rock = document.getElementById("rock");
let player_paper = document.getElementById("paper")
let player_scissor = document.getElementById("scissor")

 //Player => Rock
player_rock.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();
	console.log(cpu_element);
})

//Player => Paper
player_paper.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();
	console.log(cpu_element);
})

//Player => Scissor
player_scissor.addEventListener("click",function(){
	
	cpu_element = get_cpu_element();
	console.log(cpu_element);
})

function get_cpu_element() {
	// 1 ==> rock; 2 ==> paper; 3 ==> scissor 
	let cpu_element = Math.floor((Math.random() * 3) + 1);

	return cpu_element;
}