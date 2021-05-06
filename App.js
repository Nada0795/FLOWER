
// //  message to show 
alert ("This Is The Flowers Site")


var userName = prompt('whats Your Name?')

alert('Hello ' + userName)

var flowerType = prompt("whats type of flowers you want ? DahliaIn , Aster, Delphinium ,Calla Lily")


if(flowerType == 'DahliaIn')
{img ='<img src ="img/m1.jpg">';}

else if(flowerType == "Aster")
{img = '<img src="img/m2.jpg">';}

else if (flowerType == "Calla Lily")
console.log ("this is beatiful flower")

else if (flowerType ==="Delphinium")
{
  document.write('<img src="img/m3.jpg">')
}

else {
  alert("this type of flower not found")
}

confirm("THANK YOU")

// Ask the user what the number of flowers
// you need to buy ?
// if the user answer more than or equal 5 flowers
// keep asking them and show the msg (Sorry , this is large number to get it) 

var userFlower = prompt('What is your favorite color of flowers')

while(userFlower !== 'red' || userFlower !=='blue')
{
userFlower = prompt('Sorry, this color not found,try again!')
}


var userFlower = prompt('How many flowers do you want to buy ? ');

for (x = 0; x < userFlower ;x++)
{
  if (userFlower === 'red'){document.write('<img src="https://s3.gifyu.com/images/red-rose.png">')
  }



