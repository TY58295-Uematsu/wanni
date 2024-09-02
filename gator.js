'use strict'

function gator(e) {
  console.log("gator呼び出されました");
  
  const num = document.querySelector("#numberImput").value;
  console.log(num);
  
  
  for (let i = 0; i < num; i++) {
    innerText = innerText + "🐊";
    console.log(innerText);
    document.querySelector("#gatorHouse").innerText = innerText
  }

  // gatorHouse.appendChild()
}
  
let innerText = document.querySelector("#gatorHouse").innerText;
console.log(innerText);
const gatorButton = document.querySelector("#gatorButton");
console.log(gatorButton);
const gatorHouse= document.querySelector("#gatorHouse");
console.log(gatorHouse);

gatorButton.addEventListener("click", gator)