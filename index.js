function login() {
  let pass = document.getElementById('password').value
  let log = document.getElementById('login').value
 let str ='https://difficult-aquatic-culotte.glitch.me/get/login?login=' + log+ '&password=' + pass// serv
  //let str = 'http://localhost:3000/get/login?login=' + log + '&password=' + pass//lockalhost
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

  location.href = 'registration.html'
}

function pass_check_viz() {
  let checkbox = document.getElementById('pass_check_viz');
  let pass = document.getElementById('password')
  checkbox.checked ? pass.type = "text" : pass.type = "password"

}
function pow1(){
  location.href = 'addUser.html'
}