function foo(){
    let score = decodeURIComponent(location.search.substr(1)).split('&');
    score.splice(0, 1);
    let log = score[0];
    console.log(log);
    let str = 'http://localhost:3000/get/account?login=' + log
  
    fetch(str, {
      method: 'GET',
    })
      .then(response => {
        response.json()
        .then(data => {
          console.log(data)
          let blockHoo = document.getElementById('blockHoo')
          let blockLogin = document.getElementById('blockLogin')
          let blockName = document.getElementById('blockName')
          let blockSurname = document.getElementById('blockSurname')
          
          blockHoo.innerHTML=data.type
          blockLogin.innerHTML='Логин: '+data.login
          blockName.innerHTML='Имя: '+data.name
          blockSurname.innerHTML='Фамилия: '+data.surname

        //   blockHoo.innerHTML=JSON.stringify(data.type)
        //   blockLogin.innerHTML=JSON.stringify(data.login)
        //   blockName.innerHTML=JSON.stringify(data.name)
        //   blockSurname.innerHTML=JSON.stringify(data.surname)
        })
  
      })

    

}