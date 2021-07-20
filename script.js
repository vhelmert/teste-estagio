var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://thiago.app/api/posts.php",false);
xhttp.send();
const conteudo =xhttp.responseText
var converte = JSON.parse(conteudo)

//procurar no objeto
function retornaModa (value){
    if (value.category=="Moda")
    return value;

}
function retornaEsportes (value){
    if (value.category=="Esportes")
    return value;

}
function retornaEletronicos (value){
    if (value.category=="Eletronicos")
    return value;

}

//filtra somente os itens do objeto q tem a palavra
var moda = converte.filter(retornaModa);
var esportes = converte.filter(retornaEsportes);
var eletronicos = converte.filter(retornaEletronicos); 


var primeiroQuadro = document.querySelector("#conteudo");

         primeiroQuadro.innerHTML+=`<div class='carousel-item active'>
            <div class='card'>
            <img src='https://picsum.photos/400?2' alt=''>
            <h1></h1>
            <h4></h4>
            </div>
            </div>`

        for(var i=0;i<10;i++){
            primeiroQuadro.innerHTML+=`<div class="carousel-item ">
            <div class="card">
                <img src="${esportes[i].imagem}" alt="">
                <h1>${esportes[i].title}</h1>
                <h4>${esportes[i].body}</h4>
            </div>
            </div>`
}
var segundoQuadro = document.querySelector("#conteudo2");

         segundoQuadro.innerHTML+=`<div class='carousel-item active'>
            <div class='card'>
            <img src='https://picsum.photos/400?3' alt=''>
            <h1></h1>
            <h4></h4>
            </div>
            </div>`

        for(var i=0;i<10;i++){
            segundoQuadro.innerHTML+=`<div class="carousel-item">
            <div class="card">
                <img src="${moda[i].imagem}" alt="">
                <h1>${moda[i].title}</h1>
                <h4>${moda[i].body}</h4>
            </div>
            </div>`
        }

            var terceiroQuadro = document.querySelector("#conteudo3");

         terceiroQuadro.innerHTML+=`<div class='carousel-item active'>
            <div class='card'>
            <img src='https://picsum.photos/400?1' alt=''>
            <h1></h1>
            <h4></h4>
            </div>
            </div>`

        for(var i=0;i<10;i++){
            terceiroQuadro.innerHTML+=`<div class="carousel-item">
            <div class="card">
                <img src="${verImagem(eletronicos[i].imagem)}" alt="">
                <h1>${eletronicos[i].title}</h1>
                <h4>${eletronicos[i].body}</h4>
            </div>
            </div>`
            
          
            
        }


function verImagem(dados){
    console.log(dados)
    if (dados=="24"){
        var imagemDefault="https://images.pexels.com/photos/8566564/pexels-photo-8566564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        return imagemDefault
    }else{
        return dados
    }
}