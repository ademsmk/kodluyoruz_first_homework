 let fullName = prompt("Lütfen Adınızı Giriniz: ");

 let myName = document.querySelector("#myName");

 myName.innerHTML = `
 ${myName.innerHTML} ${fullName}
`

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
    minutes = checkTime(minutes);
    second = checkTime(second);
    document.getElementById('myClock').innerHTML= hour + ":" + minutes + ":" + second + "" ;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  
  startTime();
