
// //  message to show 
function mySite(){

alert ("This Is The Flowers Site")
console.log('Hello Everyone')
}


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

var userFlower = prompt('How many flowers do you want to buy ?')

while(userFlower >= '5' )
{
userFlower = prompt('Sorry ,this is large number to get it,try again!')
}


 var userFlower = prompt('whats your favorite type ?DahliaIn or Aster ?  ')
 while(userFlower !== 'DahliaIn' && userFlower !=='Aster'){
   userFlower = ('try again')
 }
 
 var flowerCount = prompt('how many flowers you want to see?')

for ( var x = 0; x < flowerCount ;x++){
  if (userFlower ==='DahliaIn' || userFlower === 'Aster'){
   document.write('<img src= "https://s3.gifyu.com/images/red-rose.png">')
  }
}
  
mySite();

