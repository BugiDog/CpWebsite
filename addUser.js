let plase = true   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'
let resp
let i = 0
let rez=''
let viv = document.getElementById('test')
let testName



function pow1() {
  let str = url + '/get/test?testname=' + testName


  fetch(str, {
    method: 'GET',
  })
    .then(response => {
      response.json()
        .then(data => {
          document.getElementById('pole').innerHTML=data.HTML_Form
          viv = document.getElementById('test')
          resp = data
          viv.innerHTML = resp.questions[i]
          // console.log(i)
          // console.log(resp.questions.length)
        })
    })

}
// if (i < response.questions.length) {

//   viv.innerHTML = response.questions[i]
function pow2() {
  rez+='1'
  if (i < resp.questions.length - 1) {
    i++
    console.log(i)
    console.log(rez)
    viv.innerHTML = resp.questions[i]
  } else {
    document.getElementById('viz_but2').style.display = "none"
    document.getElementById('viz_but3').style.display = "none"
    document.getElementById('viz_but4').style.display = "inline"
  }
}
function pow3() {
  rez+='0'
  if (i < resp.questions.length - 1) {
    i++
    console.log(i)
    console.log(rez)
    viv.innerHTML = resp.questions[i]
  } else {
    document.getElementById('viz_but3').style.display = "none"
    document.getElementById('viz_but2').style.display = "none"

    document.getElementById('viz_but4').style.display = "inline"
  }

}
function pow4 (){
  let vivad=''
  let str = url + '/add/testrez?login=test' +'&testname='+testName+'&rezult='+rez
  fetch(str, {
    method: 'GET',
  })
  let a=0

    vivad+=resp.key[0].scalename
    for (let j=0; j<resp.key[0].yes.length;j++){  
       if (rez[parseInt(resp.key[0].yes[j])]==='1') a++
    }
    for (let j=0; j<resp.key[0].no.length;j++){  
      if (rez[parseInt(resp.key[0].no[j])]==='0') a++
   }
   vivad+='  '+a+'    '
   a=0



   vivad+=resp.key[1].scalename
    for (let j=0; j<resp.key[1].yes.length;j++){  
       if (rez[parseInt(resp.key[1].yes[j])]==='1') a++
    }
    vivad+='  '+a+'    '
    a=0


    vivad+=resp.key[2].scalename
    for (let j=0; j<resp.key[2].yes.length;j++){  
       if (rez[parseInt(resp.key[2].yes[j])]==='1') a++
    }
    for (let j=0; j<resp.key[2].no.length;j++){  
      if (rez[parseInt(resp.key[2].no[j])]==='0') a++
   }
    vivad+='  '+a+'    '
    a=0


    vivad+=resp.key[3].scalename
    for (let j=0; j<resp.key[3].yes.length;j++){  
       if (rez[parseInt(resp.key[3].yes[j])]==='1') a++
    }
    for (let j=0; j<resp.key[3].no.length;j++){  
      if (rez[parseInt(resp.key[3].no[j])]==='0') a++
   }
    vivad+='  '+a+'    '
    a=0

   i = 0
   
   viv.innerHTML =vivad

}













function pow5 (){
   //let testName=document.getElementById('login').value
  let newquestion = document.getElementById('addQuestion').value
  let str = url + '/add/testupdate?testname=test1&newquestion='+newquestion
  fetch(str, {
    method: 'GET',
  })
  document.getElementById('addQuestion').value='' 


}





















function foo (){
 let str = url + '/get/testlist'
 fetch(str, {
   method: 'GET',
 }) .then(response => {
  response.json()
    .then(data => {
      console.log(data)
      console.log(data.length)
      for (let j=0; j<data.length; j++){
        console.log(data[j].testname)
         let newBtn = document.createElement('button');
         newBtn.innerText = data[j].testname;
         newBtn.className="button"
         newBtn.addEventListener ("click", function() {
          testName= this.innerText
          console.log(testName)
        });       
         document.getElementById('pole').appendChild(newBtn);

      }

    })
})



}


function pow6(){
  
  console.log("testName")
}










