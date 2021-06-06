var getusername = prompt("Enter Your Name");

console.log(getusername);

document.getElementById("username").innerText = getusername;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  