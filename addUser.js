function pow1() {
  let str = 'http://localhost:3000/adduser?name=' +
  document.getElementById('name').value + '&surname=' + document.getElementById('surname').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', str, true);
  xhr.send();
}
