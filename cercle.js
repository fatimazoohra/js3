const c=document.querySelector(".cercle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);
function getCord(e){
	var x=(e.clientX-25)+"px";
	var y=(e.clientY-25)+"px";
	c.style.top=y;
	c.style.left=x;
	console.log(x,y);
	return[x,y];
}
//var b =document.querySelector("body");
document.addEventListener("mousemove",getCord);
