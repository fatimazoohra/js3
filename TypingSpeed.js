
var speed=document.getElementById('Speed');
var text=document.getElementById('text');

	var sec=00;
	var min=00;
	var hour=00;
	speed.innerText = hour+":"+min+":"+sec;
function StartChrono() {
	sec= sec+1;
	setTimeout(StartChrono,1000);
	speed.innerText = hour+":"+min+":"+sec;
	if(sec>=60){
		min+=1;
		sec=00;
	}
	if(min>=60){
		hour+=1;
		min=00;
	}
}

function Redemarrer(){
	 sec =00;
	 min =00;
	 hour=00;
	speed.innerText = hour+":"+min+":"+sec;


}


















// const prod1=(a,b) => a*b;
// prod1(3,4);


// const prod2=(a) => (b) =>a*b;
// prod2(3);
// prod2(3)(4);

// const comp= (f,g) => (a) => f(g(a));
// let somme=(n) = (n) =>n+1;
// comp(somme,somme)(3);



// const a=[2,5,4,7,8,6];
// let b = a.filter((a) => n%2===0);