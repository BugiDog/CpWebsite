let plase = true   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'


function checkLogin() {
  let log = document.getElementById('login').value
  let strCheckLog = url +'/get/checkLogin?login='+ log

  fetch(strCheckLog, {
    method: 'GET',
  })
    .then(response => {
      response.text().then(data => {
        console.log(data)
        if (data == 'ok') {
          document.getElementById('checkLog').innerHTML = "OK"
        } else {
          document.getElementById('checkLog').innerHTML = "Логин занят"
        }
      })
    })

}



function pass_check_viz() {

  let checkbox = document.getElementById('pass_check_viz');
  let pass1 = document.getElementById('password1')
  let pass2 = document.getElementById('password2')
  if (checkbox.checked) {
    pass1.type = "text"
    pass2.type = "text"
  } else {
    pass1.type = "password"
    pass2.type = "password"
  }
}

function add() {

  let pass1 = document.getElementById('password1').value
  let pass2 = document.getElementById('password2').value
  if (pass1 == pass2) {
    let log = document.getElementById('login').value
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let hooPsih = document.getElementById('psih')
    let hoo = "Пациент"
    if (hooPsih.checked) hoo = "Психиатор"
    let strCheckLog=url +'/get/checkLogin?login='+ log

    fetch(strCheckLog, {
      method: 'GET',
    })
      .then(response => {
        response.text().then(data => {
          console.log(data)
          if (data == 'ok') {
            let str=url+'/add/user?type='+ hoo + '&login=' + log + '&name=' + name + '&surname=' + surname + '&password=' + pass1          
           
           
            fetch(str, {
              method: 'GET',
            })
              .then(response => {
                response.text().then(data => {
                  document.getElementById('checkLog').innerHTML = data
                  console.log(data)
                })
              })
          } else {
            document.getElementById('checkLog').innerHTML = "Логин занят"
          }
        })
      })

  }
  else {
    alert('Пароли не совпадают')
  }
}