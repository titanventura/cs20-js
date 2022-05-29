let human_score=0;
let computer_score=0;



if (computer_score>=10){
	document.getElementById('info').innerHTML='Computer wins';
	computer_score=0;
	human_score=0;
}


if (human_score==10){
	document.getElementById('info').innerHTML='Human wins';
	computer_score=0;
	human_score=0;
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
		computer_score=computer_score+1;
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
		human_score=human_score+1;
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
	}
	document.getElementById('human_score').innerHTML=human_score;
	document.getElementById('computer_score').innerHTML=computer_score;
})


paper.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
		computer_score=computer_score+1;
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
		human_score=human_score+1;
	}
	document.getElementById('human_score').innerHTML=human_score;
	document.getElementById('computer_score').innerHTML=computer_score;
})


scissor.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
		human_score=human_score+1;
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
		computer_score=computer_score+1;
	}
	document.getElementById('human_score').innerHTML=human_score;
	document.getElementById('computer_score').innerHTML=computer_score;
})