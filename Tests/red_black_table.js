let plase = true   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'
let testName = "Методика Шульте-Горбова  «КРАСНО-ЧЕРНАЯ ТАБЛИЦА» "
let log
let outputTest=document.getElementById('question')


function foo() {

  let score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  log = score[0];

}


function startTest() {
  document.getElementById('test_info').style.display = "none"
  document.getElementById('test_question').style.display = "inline"
  

}


function yes() {
  rez += '1'
  if (i < resp.questions.length - 1) {
    i++
    console.log(i)
    console.log(rez)
    outputTest.innerHTML = resp.questions[i]
  } else {
    document.getElementById('butYes').style.display = "none"
    document.getElementById('butNo').style.display = "none"
    document.getElementById('vivodRez').style.display = "inline"
  }
}


function no() {
  rez += '0'
  if (i < resp.questions.length - 1) {
    i++
    console.log(i)
    console.log(rez)
    outputTest.innerHTML = resp.questions[i]
  } else {
    document.getElementById('butYes').style.display = "none"
    document.getElementById('butNo').style.display = "none"

    document.getElementById('vivodRez').style.display = "inline"
  }

}

function vivodRez() {
  let str = url + '/add/testrez?login=' + log + '&testname=' + testName + '&rezult=' + rez
  fetch(str, {
    method: 'GET',
  })
  document.getElementById('test_question').style.display = "none"
  document.getElementById('test_rez').style.display = "inline"

  let a = 0

  for (let j = 0; j < resp.key[0].yes.length; j++) {
    if (rez[parseInt(resp.key[0].yes[j])] === '1') a++
  }
  for (let j = 0; j < resp.key[0].no.length; j++) {
    if (rez[parseInt(resp.key[0].no[j])] === '0') a++
  }
  document.getElementById('poleExtra-Intro').innerHTML = resp.key[0].scalename + a
  a = 0



  for (let j = 0; j < resp.key[1].yes.length; j++) {
    if (rez[parseInt(resp.key[1].yes[j])] === '1') a++
  }
  document.getElementById('poleNeuro').innerHTML = resp.key[1].scalename + a
  a = 0


  for (let j = 0; j < resp.key[2].yes.length; j++) {
    if (rez[parseInt(resp.key[2].yes[j])] === '1') a++
  }
  for (let j = 0; j < resp.key[2].no.length; j++) {
    if (rez[parseInt(resp.key[2].no[j])] === '0') a++
  }
  document.getElementById('polePsycho').innerHTML = resp.key[2].scalename + a
  a = 0


  for (let j = 0; j < resp.key[3].yes.length; j++) {
    if (rez[parseInt(resp.key[3].yes[j])] === '1') a++
  }
  for (let j = 0; j < resp.key[3].no.length; j++) {
    if (rez[parseInt(resp.key[3].no[j])] === '0') a++
  }
  document.getElementById('poleLies').innerHTML = resp.key[3].scalename + a
  a = 0

  i = 0


}  