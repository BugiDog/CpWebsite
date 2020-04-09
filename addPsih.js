function pow1() {
  let str = 'https://bugidog-dbtest.glitch.me/addpsih?name=' + document.getElementById('name').value + '&surname=' + document.getElementById('surname').value + '&password=' + document.getElementById('password').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', str, true);
  xhr.send();
}


function pow2() {
  let checkbox = document.getElementById('pass_check_viz');
  let pass = document.getElementById('password')
  checkbox.checked ? pass.type = "text" : pass.type = "password"

}