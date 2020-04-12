
let user = ''

function pow1() {
  let log = document.getElementById('login').value
  let str = 'http://localhost:3000/get/user?login=' + log

  fetch(str, {
    method: 'GET',
  })
    .then(response => {
      response.json()
      .then(data => {
        console.log(data)
        let viv = document.getElementById('123')
        viv.innerHTML=JSON.stringify(data)
      })

    })




}

