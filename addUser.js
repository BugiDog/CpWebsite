function pow1() {
  let str = 'https://difficult-aquatic-culotte.glitch.me/adduser?name=' +
  document.getElementById('name').value + '&surname=' + document.getElementById('surname').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', str, true);
  xhr.send();
}
