let plase = true   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'



function foo() {
  let score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
   log = score[0];
  let str = url + '/get/account?login=' + log   

  fetch(str, {
    method: 'GET',
  })
    .then(response => {
      response.json()
        .then(data => {
          let blockHoo = document.getElementById('blockHoo')
          let blockLogin = document.getElementById('blockLogin')
          let blockName = document.getElementById('blockName')
          let blockSurname = document.getElementById('blockSurname')

          blockHoo.innerHTML = data.type + ':'
          blockLogin.innerHTML = 'Логин: ' + data.login
          blockName.innerHTML = 'Имя: ' + data.name
          blockSurname.innerHTML = 'Фамилия: ' + data.surname

        })

    })






  // let str2 = url + '/get/testlist'
  // fetch(str2, {
  //   method: 'GET',
  // }).then(response => {
  //   response.json()
  //     .then(data => {
  //       for (let j = 0; j < data.length; j++) {
  //         let newBtn = document.createElement('button');
  //         newBtn.innerText = data[j].testname;
  //         newBtn.className = "button"
  //         newBtn.addEventListener("click", function () {
  //           testName = this.innerText
  //         });
  //         document.getElementById('poleTestList').appendChild(newBtn);
  //       }
  //     })
  // })
}

function openTestAizeck() {
  window.open('Tests/aizeck.html?&'+log,"_self");
}
function openTestRedBlack() {
  window.open('Tests/red_black_table.html?&'+log,"_self");
}

// function startTest() {
//   let str = url + '/get/test?testname=' + testName


//   fetch(str, {
//     method: 'GET',
//   })
//     .then(response => {
//       response.json()
//         .then(data => {
//           document.getElementById('butYes').style.display = "inline"
//           document.getElementById('butNo').style.display = "inline"
//           resp = data
//           outputTest.innerHTML = resp.questions[i]

//         })
//     })

// }

// function yes() {
//   rez+='1'
//   if (i < resp.questions.length - 1) {
//     i++
//     console.log(i)
//     console.log(rez)
//     outputTest.innerHTML = resp.questions[i]
//   } else {
//     document.getElementById('butYes').style.display = "none"
//     document.getElementById('butNo').style.display = "none"
//     document.getElementById('vivodRez').style.display = "inline"
//   }
// }


// function no() {
//   rez+='0'
//   if (i < resp.questions.length - 1) {
//     i++
//     console.log(i)
//     console.log(rez)
//     outputTest.innerHTML = resp.questions[i]
//   } else {
//     document.getElementById('butYes').style.display = "none"
//     document.getElementById('butNo').style.display = "none"

//     document.getElementById('vivodRez').style.display = "inline"
//   }

// }

// function vivodRez (){
//   let str = url + '/add/testrez?login=' + log +'&testname='+testName+'&rezult='+rez
//   fetch(str, {
//     method: 'GET',
//   })
//   outputTest.innerHTML =''
//   let a=0

//     for (let j=0; j<resp.key[0].yes.length;j++){  
//        if (rez[parseInt(resp.key[0].yes[j])]==='1') a++
//     }
//     for (let j=0; j<resp.key[0].no.length;j++){  
//       if (rez[parseInt(resp.key[0].no[j])]==='0') a++
//    }
//    document.getElementById('poleExtra-Intro').innerHTML=resp.key[0].scalename + a
//    a=0



//     for (let j=0; j<resp.key[1].yes.length;j++){  
//        if (rez[parseInt(resp.key[1].yes[j])]==='1') a++
//     }
//     document.getElementById('poleNeuro').innerHTML=resp.key[1].scalename + a
//     a=0


//     for (let j=0; j<resp.key[2].yes.length;j++){  
//        if (rez[parseInt(resp.key[2].yes[j])]==='1') a++
//     }
//     for (let j=0; j<resp.key[2].no.length;j++){  
//       if (rez[parseInt(resp.key[2].no[j])]==='0') a++
//    }
//    document.getElementById('polePsycho').innerHTML=resp.key[2].scalename + a
//     a=0


//     for (let j=0; j<resp.key[3].yes.length;j++){  
//        if (rez[parseInt(resp.key[3].yes[j])]==='1') a++
//     }
//     for (let j=0; j<resp.key[3].no.length;j++){  
//       if (rez[parseInt(resp.key[3].no[j])]==='0') a++
//    }
//    document.getElementById('poleLies').innerHTML=resp.key[3].scalename + a
//     a=0

//    i = 0
   

// }

