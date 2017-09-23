var h=document.querySelector("h1");
var td=document.querySelectorAll("td");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var colors=["RED","GREEN","YELLOW","PINK","PURPLE","GREY","Lime","Blue","Teal","Aqua","Chocolate","DarkOrange","FireBrick","HotPink","LightSeaGreen","OliveDrab","Beige","BurlyWood","Coral","DarkKhaki","DarkOrchid","DarkSalmon","DeepPink","Gainsboro","GreenYellow","LightCyan"];
var ans=0,color="",n=6;
var state=document.querySelector("#state");

function randomgen(n) {
	var x=Math.floor((Math.random()*255));
	var z=Math.floor((Math.random()*255));
	var y=Math.floor((Math.random()*255));
	h.textContent="RGB("+x+","+y+","+z+")";
	color="rgb("+x+", "+y+", "+z+")";
	ans=Math.floor((Math.random()*n));
	state.textContent="";
	state.style.color="black";
}

///////////////////////////////////////////////////////////
var main=document.querySelector("#mainback");
var play=document.querySelector("#play");
//////////////////////////////////////////////////////
play.addEventListener("click",function () 
{
	if (play.textContent!="NEW COLORS") {
		Fillcolor(n);
	}	
});

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function fillsame() 
{
	state.textContent="Correct!!";
	play.textContent="PLAY AGAIN?";
	main.style.background=color;
	for (var i = 0; i <n; i++) {
		td[i].style.background=color;
	}
}

///////////////////////////////////////////////////
Fillcolor(6);
/////////////////////////////////////////

easy.addEventListener("click",function() 
{

	easy.classList.add("active");
	hard.classList.remove("active");
	n=3;
	Fillcolor(3);
});
hard.addEventListener("click",function() 
{
	easy.classList.remove("active");
	hard.classList.add("active");
	n=6;
	Fillcolor(6);
});

function Fillcolor(n) 
{
	randomgen(n);
	play.textContent="NEW COLORS";
	main.style.background="#3b74ce";
	for (var i = 0; i < 6; i++) {
	if (i<n) {
	if (i==ans) {
		td[i].style.background=color;
		console.log(ans);
	}else{

		td[i].style.background=colors[Math.floor((Math.random()*26))];	
	}}
	else{
			td[i].style.background="#1c1e21";
	}
	///////////////////////////////////////////////	
	td[i].addEventListener("click",function () 
	{
		var l=this.style.background;
	if (l===color) {
		fillsame();
	}
	else{
		state.textContent="Try Again";
		this.style.background="#1c1e21";
	}
	///////////////////////////////////////////	
});

}
}