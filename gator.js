'use strict'

function gator() {
  console.log("gator呼び出されました");
  const num = document.querySelector(".numberImput").value;
  for (let i = 0; i < num; i++) {
    document.querySelector("#gatorHouse").innerText += "🐊";
  }
}

function chicken() {
  console.log("chicken呼び出されました");
  const num = document.querySelector(".numberImput").value;
  document.querySelector("#gatorHouse").innerText = document.querySelector("#gatorHouse").innerText.substring(num * 2)
  for (let i = 0; i < num; i++) {
    document.querySelector("#feedHouse").innerText += "🍗🐊";
  }
}

function lobster() {
  console.log("lobster呼び出されました");
  const num = document.querySelector(".numberImput").value;
  document.querySelector("#gatorHouse").innerText = document.querySelector("#gatorHouse").innerText.substring(num * 2)
  for (let i = 0; i < num; i++) {
    document.querySelector("#feedHouse").innerText += "🍤🐊";
  }
}

function alien() {
  console.log("alien呼び出されました");
  const num = document.querySelector(".numberImput").value;
  document.querySelector("#gatorHouse").innerText = document.querySelector("#gatorHouse").innerText.substring(num * 2)
  for (let i = 0; i < num; i++) {
    document.querySelector("#feedHouse").innerText += "🍔🐊";
  }
}

function Ryo() {
  console.log("Ryo呼び出されました");
  // const num = document.querySelector("#numberImputFeed").value;
  // document.querySelector("#gatorHouse").innerText = "";
  document.querySelector("#video").style.visibility = "visible";
  // for (let i = 0; i < num; i++) {
  //   document.querySelector("#feedHouse").innerText += "🍔🐊";
  // }
}



document.querySelector("#gatorButton").addEventListener("click", gator);
document.querySelector("#chickenButton").addEventListener("click", chicken);
document.querySelector("#lobsterButton").addEventListener("click", lobster);
document.querySelector("#alienButton").addEventListener("click", alien);
document.querySelector("#RyoButton").addEventListener("click", Ryo);