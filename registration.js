//servert
function add() {
  let pass1 = document.getElementById('password1').value
  let pass2 = document.getElementById('password2').value
  if (pass1 == pass2) {
    let log = document.getElementById('login').value
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let hooPaz = document.getElementById('paz')
    let hooPsih = document.getElementById('psih')
    let hoo = "user"
    if (hooPsih.checked) hoo = "psih"

    let str = 'https://difficult-aquatic-culotte.glitch.me/add/' + hoo + '?login=' + log + '&name=' + name +'&surname='+ surname+'&password='+pass1
   
  let xhr = new XMLHttpRequest();
    xhr.open('GET', str, true);
    xhr.send();
  }
  else {
    alert('Пароли не совпадают')
  }
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
// lockalhost
// function add() {
//   let pass1 = document.getElementById('password1').value
//   let pass2 = document.getElementById('password2').value
//   if (pass1 == pass2) {
//     let log = document.getElementById('login').value
//     let name = document.getElementById('name').value
//     let surname = document.getElementById('surname').value
//     let hooPaz = document.getElementById('paz')
//     let hooPsih = document.getElementById('psih')
//     let hoo = "user"
//     if (hooPsih.checked) hoo = "psih"

//     let str = 'http://localhost:3000/add/' + hoo + '?login=' + log + '&name=' + name +'&surname='+ surname+'&password='+pass1
   
//   let xhr = new XMLHttpRequest();
//     xhr.open('GET', str, true);
//     xhr.send();
//   }
//   else {
//     alert('Пароли не совпадают')
//   }
// }