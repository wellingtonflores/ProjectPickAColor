const colors = ["Red", "Blue", "Yellow", "Purple", "Green"] //Variavel para as cores
const btn = document.getElementById("btn") // Variavel para o botão da pagina
const color = document.querySelector(".color") //Variavel para colocar o nome das cores

//No click
btn.addEventListener("click", function(){
    const randomColor = getRandomColor() // Puxando a função de numero randomico
    document.body.style.background = colors[randomColor] //aplicando a cor ao back-ground
    color.textContent = colors[randomColor] // COlocando o nome das cores na pagina
})

//Gerando numero randomicos
function getRandomColor(){
    return Math.floor(Math.random() * colors.length) // Retornando um numero randomico sem as casas depois va virgula e adicionando que o tamanho dos numeros randomicos seja os indices das cores
}

