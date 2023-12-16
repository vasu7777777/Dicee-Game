var randomNumber1=Math.floor(Math.random()*6)+1;
var imageOne="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageOne);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imageTwo="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageTwo);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw Match...";
}