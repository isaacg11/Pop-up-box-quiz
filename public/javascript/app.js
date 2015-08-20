var score=0;
//THE 4 QUESTIONS AND SCORE COUNTER//
var start=function(){
if (prompt("WHAT COLOR IS THE SKY? (1)Blue (2)Red (3)Yellow (4)Green")
==="1"){
score=score+20;
}
if (prompt("WHAT DOES WATER TASTE LIKE? (1)Soda (2)Beer (3)Wine (4)Nothing")
==="4"){
score=score+20;
}
if (prompt("WHAT IS STRONGER THAN STEEL? (1)Titanium (2)Copper (3)Gold (4)Superman")
==="1"){
score=score+20;
}
if (prompt("WHY IS THE EARTH ROUND? (1)Aliens (2)The gods (3)Humans (4)No one knows")
==="4"){
score=score+20;
}
if (prompt("WHAT ARE HOTDOGS MADE OF? (1)Chicken (2)Beef (3)Fish (4)Everything")
==="4"){
score=score+20;
}

//FINAL SCORE CALCULATOR//
document.getElementById('result').innerHTML="Scoring...";
alert("Scoring...");
if(score===100){
	document.getElementById('result').innerHTML=score+"%";
}
if(score===80){
	document.getElementById('result').innerHTML=score+"%";
}
if(score===60){
	document.getElementById('result').innerHTML=score+"%";	
}
if(score===40){
	document.getElementById('result').innerHTML=score+"%";
}
if(score===20){
	document.getElementById('result').innerHTML=score+"%";
}
if(score===0){
	document.getElementById('result').innerHTML=score+"%";
}
}