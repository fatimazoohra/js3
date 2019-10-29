const c=document.querySelector(".cercle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);
function getCord(e){
	var x=(e.clientX-25);
	var y=(e.clientY-25);

	var w = window.innerWidth;
	var h = window.innerHeight; 

	var x2 = w-x+"px";
	var y2 = h-y+"px";

	c.style.top = y2;
	c.style.left = x2;
	console.log(x2,y2);
	return[x2,y2];
}

function changeColor(){
	c.style.backgroundColor = "green";
	c.style.borderColor = "green";
}

c.addEventListener("mouseleave",function(){
	c.removeAttribute("style")}, false)
document.addEventListener("mousemove",getCord);
c.addEventListener("mouseenter",changeColor);


	// var w = window.innerWidth;
	// var h = window.innerHeight; 
	// // var x2=w-x;
	// // var y2=h-y;
	// if(x<w/2){
	// 		x=w-x;
	// 		y=w
	// }