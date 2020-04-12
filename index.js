function login() {
  
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