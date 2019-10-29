

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

var f=(){
	const a="Bonjour";
	const f2=(b) => {
		console.log(a);
		a = b;
		console.log(a);
	}
	return f2;
}
var g1= f();
var g2= f();