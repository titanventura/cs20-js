let humanScore=0;
let compScore=0;

if (compScore>=10)
{
	document.getElementById('info').innerHTML='Computer wins';
	compScore=0;
	humanScore=0;
}

if (humanScore==10)
{
	document.getElementById('info').innerHTML='Human wins';
	compScore=0;
	humanScore=0;
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click',function() 
{
	compChoice=Math.floor(Math.random() * 3)+1;
	if (compChoice==2)
	{
		document.getElementById('info').innerHTML='Computer choice: PAPER';
		compScore=compScore+1;
	}
	else if(compChoice==3)
	{
		document.getElementById('info').innerHTML='Computer choice: SCISSOR';
		humanScore=humanScore+1;
	}
	else
	{
		document.getElementById('info').innerHTML='Computer choice: ROCK';
	}
	document.getElementById('humanScore').innerHTML=humanScore;
	document.getElementById('compScore').innerHTML=compScore;
})


paper.addEventListener('click',function() 
{
	compChoice=Math.floor(Math.random() * 3)+1;
	if (compChoice==2)
	{
		document.getElementById('info').innerHTML='Computer choice: PAPER';
	}
	else if(compChoice==3){
		document.getElementById('info').innerHTML='Computer choice: SCISSOR';
		compScore=compScore+1;
	}
	else{
		document.getElementById('info').innerHTML='Computer choice: ROCK';
		humanScore=humanScore+1;
	}
	document.getElementById('humanScore').innerHTML=humanScore;
	document.getElementById('compScore').innerHTML=compScore;
})


scissor.addEventListener('click',function() 
{
	compChoice=Math.floor(Math.random() * 3)+1;
	if (compChoice==2)
	{
		document.getElementById('info').innerHTML='Computer choice: PAPER';
		humanScore=humanScore+1;
	}
	else if(compChoice==3){
		document.getElementById('info').innerHTML='Computer choice: SCISSOR';
	}
	else{
		document.getElementById('info').innerHTML='Computer choice: ROCK';
		compScore=compScore+1;
	}
	document.getElementById('humanScore').innerHTML=humanScore;
	document.getElementById('compScore').innerHTML=compScore;
})