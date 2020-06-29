let plase = false   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'
let testName = "Методика Шульте-Горбова  «КРАСНО-ЧЕРНАЯ ТАБЛИЦА» "
let login, rezTable1, rezTable2
let rezMisTable1, rezMisTable2
let idArr = generateArrayRandomNumber(1, 49)

function foo() {

  let score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  login = score[0];
  console.log("login = " + login)
}


function startTest() {
  document.getElementById('test_info').style.display = "none"
  document.getElementById('test_table1').style.display = "block"
  let redArr = generateArrayRandomNumber(1, 24), blackArr = generateArrayRandomNumber(1, 25)
  let redIndex = 0, blackIndex = 0
  console.log("redArr = " + redArr)
  console.log("blackArr = " + blackArr)
  console.log("idArr = " + idArr)

  for (let i = 0; i < 49; i++) {
    idArr[i] = "button" + idArr[i]
    let butId = idArr[i]
    if (i % 2 == 0) {      //1-black  2-red
      let but = document.getElementById(butId)
      but.className = "black_btn"
      but.innerText = blackArr[blackIndex]
      blackIndex++
    } else {
      let but = document.getElementById(butId)
      but.className = "red_btn"
      but.innerText = redArr[redIndex]
      redIndex++
    }

  }
  


}




let time = 0
function Taimer(order) {
  if (order == "stop") {
    document.getElementById("taimer").style.display = "none"
    return (time)
  } else  if (order==1){
    time++
    document.getElementById("taimer").innerHTML = Math.floor(time / 60) + ":" + time % 60
    setTimeout("Taimer(1)", 1000)
  }



}



function generateArrayRandomNumber(min, max) {
  var totalNumbers = max - min + 1,
    arrayTotalNumbers = [],
    arrayRandomNumbers = [],
    tempRandomNumber;
  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);

  }
  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;

}


let colorBut, colorNeed = "black"
let redIndex = 25, blackIndex = 0
let mistake = 0

function stopTable1(but) {
  colorNeed = "red"
  redIndex = 2
  Table1(but)
}

let taimerStart=1
function Table1(but) {
  Taimer(taimerStart)
  taimerStart=0
  if (idArr.indexOf(but.id, 0) % 2 == 0) {      //1-black  2-red   
    colorBut = "black"
  } else {
    colorBut = "red"
  }
  console.log(idArr.indexOf(but.id, 0))
  console.log(colorBut)

  if (colorBut == colorNeed) {
    if (colorNeed == "black" & but.innerText == blackIndex + 1) {
      blackIndex++
      if (but.innerText == 25) { colorNeed = "red" }
    } else if (colorNeed == "red" & but.innerText == redIndex -1) {
      redIndex--
      if (but.innerText == 1) {
        rezTable1 = Taimer("stop")
        rezMisTable1=mistake
        document.getElementById("message").innerHTML = "Время выполнения:" + Math.floor(rezTable1 / 60) + ":" + rezTable1 % 60
        document.getElementById("nextTable").style.display="block"

      }
    } else {
      mistake++
      document.getElementById("mistake").innerHTML = mistake
    }
  } else {
    mistake++
    document.getElementById("mistake").innerHTML = mistake

  }



}

function nextTable(){

  document.getElementById("test_table1").style.display="none"
  document.getElementById("test_table2").style.display="block"
  idArr = generateArrayRandomNumber(1, 49)
  redArr = generateArrayRandomNumber(1, 24), blackArr = generateArrayRandomNumber(1, 25)
  redIndex = 0, blackIndex = 0
  time=0
  console.log("redArr = " + redArr)
  console.log("blackArr = " + blackArr)
  console.log("idArr = " + idArr)
  for (let i = 0; i < 49; i++) {
    idArr[i] = "buton" + idArr[i]
    let butId = idArr[i]
    if (i % 2 == 0) {      //1-black  2-red
      let but = document.getElementById(butId)
      but.className = "black_btn"
      but.innerText = blackArr[blackIndex]
      blackIndex++
    } else {
      let but = document.getElementById(butId)
      but.className = "red_btn"
      but.innerText = redArr[redIndex]
      redIndex++
    }

  }

colorNeed = "black"
redIndex = 25, blackIndex = 0
mistake = 0

}

let time2=0
function Taimer2(order) {
  if (order == "stop") {
    document.getElementById("taimer2").style.display = "none"
    return (time)
  } else  if (order==1){
    time2++
    document.getElementById("taimer2").innerHTML = Math.floor(time2 / 60) + ":" + time2 % 60
    setTimeout("Taimer2(1)", 1000)
  }



}



function stopTable2(but) {
  colorNeed = "black"
  blackIndex = 24
  but.id=idArr[0]
  Table2(but)
}



 let taimerStart2=1
function Table2(but) {
  Taimer2(taimerStart2)
  taimerStart2=0
  if (idArr.indexOf(but.id, 0) % 2 == 0) {      //1-black  2-red   
    colorBut = "black"
  } else {
    colorBut = "red"
  }
  console.log("But: "+but.id)
  console.log(idArr.indexOf(but.id, 0))
  console.log(colorBut)

  if (colorBut == colorNeed) {
    if (colorNeed == "black" & but.innerText == blackIndex + 1) {
      blackIndex++
      colorNeed = "red"
      if (blackIndex == 25) {
        rezTable2 = Taimer2("stop")
        rezMisTable2=mistake
        document.getElementById("message2").innerHTML = "Время выполнения:" + Math.floor(rezTable2 / 60) + ":" + rezTable2 % 60
        document.getElementById("vivodRez").style.display="block"

      }
    } else if (colorNeed == "red" & but.innerText == redIndex - 1) {
      redIndex--
      colorNeed = "black"

    } else {
      mistake++
      document.getElementById("mistake2").innerHTML = mistake
    }
  } else {
    mistake++
    document.getElementById("mistake2").innerHTML = mistake

  }

  console.log('colorNeed: '+colorNeed)
  console.log('blackIndex:  '+blackIndex)
  console.log('redIndex:   '+redIndex)

}



function vivodRez(){
  let rez= rezTable1 +" "+rezMisTable1+" "+rezTable2+" "+rezMisTable2
 // let rez= rezTable1 +rezMisTable1+rezTable2+rezMisTable2
  console.log('login:   '+login)
  let str = url + '/add/testrez?login=' + login + '&testname=' + testName + '&rezult=' + rez
  fetch(str, {
    method: 'GET',
  })




  document.getElementById("test_table2").style.display = "none"
  document.getElementById("vivod_rez").style.display = "block"
  document.getElementById("time1").innerHTML =  Math.floor(rezTable1 / 60) + ":" + rezTable1 % 60
  document.getElementById("rezMisTable1").innerHTML = rezMisTable1
  document.getElementById("time2").innerHTML = Math.floor(rezTable2 / 60) + ":" + rezTable2 % 60
  document.getElementById("rezMisTable2").innerHTML = rezMisTable2
  document.getElementById("timeSwitch").innerHTML = Math.floor((rezTable2-rezTable1) / 60) + ":" + (rezTable2-rezTable1) % 60

  

}