let plase = false   // true - lockalhost    false - server
let url = plase ? 'http://localhost:3000' : 'https://difficult-aquatic-culotte.glitch.me'


function login() {
  let pass = document.getElementById('password').value
  let log = document.getElementById('login').value
  let str = url +'/get/login?login=' + log + '&password=' + pass
  
  fetch(str, {
    method: 'GET',
  })
    .then(response => {
      response.text().then(data => {
        console.log(data)
        if (data == 'nope') {
          document.getElementById('checkLog').innerHTML = "Пользователь не найден"
        } else {
          if (data == 'passErr'){
            document.getElementById('checkLog').innerHTML = "Неверный пароль"
          } else {
            if (data == 'ok'){
              window.open('account.html?&'+log,"_self"); 
            }
          }
          
        }
      })
    })

   
}

function registration() {
  window.open('registration.html',"_self");
}


function pass_check_viz() {
  let checkbox = document.getElementById('pass_check_viz');
  let pass = document.getElementById('password')
  checkbox.checked ? pass.type = "text" : pass.type = "password"
}
