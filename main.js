const body = document.querySelector("body"),
input1 = document.querySelector(".green-input"),
input2 = document.querySelector(".blue-input"),
lightButton = document.querySelector(".light"),
darkButton = document.querySelector(".dark"),
h1 = document.querySelector("h1")

function onColorChange(){
    body.style.background = "linear-gradient(to right ," + input1.value + ", "+ input2.value + ")"
}

function changeToDarkMode(){
    body.style.background = "#2d2d2d";
    h1.style.color =  "#fff"
}

function changeToLightMode(){
    body.style.background = "#fff";
    h1.style.color =  "#2d2d2d"
}


lightButton.addEventListener("click",changeToLightMode)
darkButton.addEventListener("click",changeToDarkMode)
input1.addEventListener("input",onColorChange)
input1,addEventListener("input",onColorChange)



function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }
  
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  
  console.log(reversedString); //