
var ran1 = Math.floor(Math.random()*6)+1;

var ranimg = "dice" + ran1 + ".png" ;
var final1 = "images/" + ranimg;

document.querySelectorAll("img")[0].setAttribute("src", final1);

var ran2 = Math.floor(Math.random()*6)+1;
var final2 = "images/dice" + ran2 + ".png"; 

document.querySelectorAll("img")[1].setAttribute("src", final2);

if(ran1>ran2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(ran2>ran1){
    document.querySelector("h1").innerHTML="Player 2 Wins";

}
else{
    document.querySelector("h1").innerHTML="draw!";
}
