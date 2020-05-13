let plase = true   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'
let testName = "Методика Шульте-Горбова  «КРАСНО-ЧЕРНАЯ ТАБЛИЦА» "
let log, rezTable1, rezTable2
let idArr = generateArrayRandomNumber(1, 49)

function foo() {

  let score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  log = score[0];

}


function startTest() {
  document.getElementById('test_info').style.display = "none"
  document.getElementById('test_table1').style.display = "block"
  let redArr = generateArrayRandomNumber(1, 24), blackArr = generateArrayRandomNumber(1, 25)
  let redIndex = 0, blackIndex = 0
  console.log("redArr = " + redArr)
  console.log("blackArr = " + blackArr)
  console.log("idArr = " + idArr)
  let change = 1
  for (let i = 0; i < 49; i++) {

    let butId = 'button' + idArr[i]

    if (i%2!=0) {   //1-black  2-red
      let but = document.getElementById(butId)
      but.className = "red_btn"
      but.innerText = redArr[redIndex]
      redIndex++
    } else {
      let but = document.getElementById(butId)
      but.className = "black_btn"
      but.innerText = blackArr[blackIndex]
      blackIndex++
    }

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





function Table1(btn) {
  
console.log(btn.innerText, document.getElementById(btn.id).data-background  )


}
