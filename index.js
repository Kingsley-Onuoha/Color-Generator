let numbersAndLetters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]

let firstColorBox = document.getElementById(`first-color-box`)

let firstHexCode = document.getElementById(`first-hex-code`)

let secondColorBox = document.getElementById(`second-color-box`)

let secondHexCode = document.getElementById(`second-hex-code`)

let thirdColorBox = document.getElementById(`third-color-box`)

let thirdHexCode = document.getElementById(`third-hex-code`)




function generateRandomNumber(){
  let randomNumber = Math.floor(Math.random()*16)
  return randomNumber
}

let button = document.getElementById(`button`)
button.addEventListener(`click`, (event)=>{
  
  let hexCodeFirstBox = `#`
for (let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++) {
  let randomHex = numbersAndLetters[generateRandomNumber()]
  hexCodeFirstBox += randomHex
  console.log(randomHex)
  console.log(hexCodeFirstBox)
  
}
firstColorBox.style.backgroundColor = hexCodeFirstBox;
firstHexCode.innerText = hexCodeFirstBox


})
button.addEventListener(`click`, (event)=>{
  let hexCodeSecondBox = `#`
  
  for (let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++) {
    let brandomHex = numbersAndLetters[generateRandomNumber()]
    hexCodeSecondBox += brandomHex
  }
  
  secondColorBox.style.backgroundColor = hexCodeSecondBox;
  secondHexCode.innerText = hexCodeSecondBox
   
  })
  
  button.addEventListener(`click`, (event)=>{
    let hexCodeThirdBox = `#`
    
    for (let myThirdLoop = 0; myThirdLoop < 6; myThirdLoop++) {
      let crandomHex = numbersAndLetters[generateRandomNumber()]
      hexCodeThirdBox += crandomHex
    }
    
    thirdColorBox.style.backgroundColor = hexCodeThirdBox;
    thirdHexCode.innerText = hexCodeThirdBox
     
    })
    