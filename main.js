let Player_Score=0;
let AI_Score=0;



if (AI_Score>=10){
	document.getElementById('info').innerHTML='Computer wins';
	AI_Score=0;
	Player_Score=0;
}


if (Player_Score==10){
	document.getElementById('info').innerHTML='Human wins';
	AI_Score=0;
	Player_Score=0;
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
		AI_Score=AI_Score+1;
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
		Player_Score=Player_Score+1;
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
	}
	document.getElementById('human_score').innerHTML=Player_Score;
	document.getElementById('computer_score').innerHTML=AI_Score;
})


paper.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
		AI_Score=AI_Score+1;
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
		Player_Score=Player_Score+1;
	}
	document.getElementById('human_score').innerHTML=Player_Score;
	document.getElementById('computer_score').innerHTML=AI_Score;
})


scissor.addEventListener('click',function() {
	computer_option=Math.floor(Math.random() * 3)+1;
	if (computer_option==2){
		document.getElementById('info').innerHTML='Computer choose paper';
		Player_Score=Player_Score+1;
	}
	else if(computer_option==3){
		document.getElementById('info').innerHTML='Computer choose scissor';
	}
	else{
		document.getElementById('info').innerHTML='Computer choose rock';
		AI_Score=AI_Score+1;
	}
	document.getElementById('human_score').innerHTML=Player_Score;
	document.getElementById('computer_score').innerHTML=AI_Score;
})