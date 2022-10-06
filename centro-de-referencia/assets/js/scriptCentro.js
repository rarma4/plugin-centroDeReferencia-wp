console.log('js do plugin centro de referencia');


function listar(id ){
    var id =  id
    document.getElementById('app').remove()
    var reconstrucao = document.createElement('div');
    reconstrucao.setAttribute('class', 'app')
    reconstrucao.setAttribute('id', 'app')
    var lista = document.querySelector("#lista")
    lista.appendChild(reconstrucao)
  
    var title = document.querySelector("#title")
    title.innerText = "Centro de Referência: "+id;
    
        
    let search = id
    fetch(url)
    .then((resp)=>resp.json())
    .then(function(data){
      console.log(data['posts'] )
      var count = 0
      for(var i=0;i< data['posts'].length; i++){
        if(data['posts'][i]['UF'] === search){
          // console.log(data['posts'][i]['cep'])
          count++
        }
      }
      // console.log(count)
      if(count === 0){
  
        var reconstrucao = document.createElement('div');
        reconstrucao.setAttribute('class', 'app')
        reconstrucao.setAttribute('id', 'app')
        var lista = document.querySelector("#lista")
        lista.appendChild(reconstrucao)
  
        var card2 = document.createElement('div');
        card2.setAttribute('class', 'card')
  
        var inst2 = document.createElement('div');
        inst2.setAttribute('class', 'content instituicao')
        inst2.innerText = "Nenhum Registro Cadastrado";
        card2.appendChild(inst2)
  
        var app2 = document.querySelector("#app")
        app2.appendChild(card2)
      }else{
        for(var i=0;i< data['posts'].length; i++){
          if(data['posts'][i]['UF'] === search && count !== 0){
            
            var reconstrucao = document.createElement('div');
            reconstrucao.setAttribute('class', 'app')
            reconstrucao.setAttribute('id', 'app')
            var lista = document.querySelector("#lista")
            lista.appendChild(reconstrucao)
              
            var card = document.createElement('div');
            card.setAttribute('class', 'card')
  
            var inst = document.createElement('div');
            inst.setAttribute('class', 'content instituicao')
            inst.innerText = data['posts'][i]['Nome'];
            card.appendChild(inst)
  
            var end = document.createElement('div');
            end.setAttribute('class', 'content')
            end.innerText = `${data['posts'][i]['endereco']} - ${data['posts'][i]['cidade']} - ${data['posts'][i]['UF']} - cep: ${data['posts'][i]['cep']}` ;
            card.appendChild(end)
  
            var mapstr = `https://www.google.com/maps/place/${data['posts'][i]['endereco']} - ${data['posts'][i]['cidade']} - ${data['posts'][i]['UF']} - cep: ${data['posts'][i]['cep']}`
            var link = document.createElement('div');
            link.setAttribute('class', 'footer')
  
            varIcon = document.createElement('i')
            varIcon.setAttribute('class', 'fa fa-map-marker')
            link.appendChild(varIcon)
  
            var linkmap = document.createElement('a')
            linkmap.setAttribute('href',mapstr )
            linkmap.setAttribute('target', '_blank')
            var linkText = document.createTextNode(' Link do Mapa')
            link.appendChild(linkmap)
            linkmap.appendChild(linkText)
  
            card.appendChild(link)
            var app = document.querySelector("#app")
            app.appendChild(card)
          }
        }
      }
    })
  }