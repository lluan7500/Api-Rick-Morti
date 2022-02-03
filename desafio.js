function mudaopersonagem() {
    for(let i = 1; i<=3;i++) {
        var numero  = Math.floor(Math.random() * (826 - 1)) + 1;
        fetch('https://rickandmortyapi.com/api/character/'+numero)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data.image, data.name);
            document.getElementById("myImage"+i).src = data.image;  
            document.getElementById("nome"+i).innerText = data.name;  
            document.getElementById("vivo"+i).innerText = data.status; 
            document.getElementById("especie"+i).innerText = data.species; 
             
        });
     }        
    }
        
  