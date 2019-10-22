

const elmnt = document.querySelector(".normal");
function eventclbk1(e){
	elmnt.classList.toggle("normal");
}
function eventclbk2(e){
	console.log("cliked");
}

elmnt.addEventListener("click",eventclbk1,true);
elmnt.addEventListener("click",eventclbk2,true);
// var n=document.createTextNode()

// const fig =document.querySelector(.mafig)
