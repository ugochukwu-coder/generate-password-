

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
  "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
  "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
  "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];


let inputPasswordOne = document.getElementById("input__password--one")
let inputPasswordTwo = document.getElementById("input__password--two")
let btnGenerate = document.getElementById("btn__generate")

/*
btnGenerate.addEventListener("click", function(){
  let randomIndexOne = Math.floor(Math.random() * 15)
  let randomIndexTwo = Math.floor(Math.random() * 15)
  let randomElementOne = characters[randomIndexOne]
  let randomElementTwo = characters[randomIndexTwo]

  for (let i= 0; i < characters.length; i++ ) {
    if(characters[i] === randomElementOne) {
      inputPasswordOne.textContent += randomElementOne
    }else if (characters[i] === randomElementTwo){
      inputPasswordTwo.textContent += randomElementOne
    }
  }
})
*/

/* var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function generate () {
  for (i = 0; i < 10; i++) {
    var randomLetter = arr[Math.floor(arr.length * Math.random())];
    document.write(randomLetter); 
  } 
}*/


let randomIndexOne = false
let randomIndexTwo = false


btnGenerate.addEventListener("click", function(e){
  e.preventDefault()

  inputPasswordOne.textContent = " "
  inputPasswordTwo.textContent = " "

  for (let i = 0; i < 15; i++) {
    
    randomIndexOne = characters[Math.floor(characters.length * Math.random())]
    inputPasswordOne.textContent += randomIndexOne

    randomIndexTwo = characters[Math.floor(characters.length * Math.random())]
    inputPasswordTwo.textContent += randomIndexTwo
  } 
})











// btnGenerate.addEventListener("click", function(){
//   let newCharaters = [];
//   for (let i = 0; i < 15; i++) {
//     let randomIndexOne = Math.floor(Math.random() * characters.length)
//     newCharaters.push(characters[randomIndexOne]);
//     inputPasswordOne.textContent = characters.splice(randomIndexOne, 1)
//   }
 
// })





