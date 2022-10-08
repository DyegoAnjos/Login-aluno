const formNotas = document.getElementById('formNota')
const formLogin = document.querySelector('#formLogin')
const matricula = document.getElementById('matricula')
const turma = document.getElementById('turma')
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const retorno = document.getElementById('retorno')

formLogin.addEventListener("submit", (e) =>{
    e.preventDefault()
    var matriculaValor = matricula.value
    var turmaValor = turma.value

    if (validarLogin(matriculaValor,turmaValor) !=  false){
        formLogin.classList.add("form-sair")
    }
})

function validarLogin(matricula,turma){
    if (matricula === ''){
        alert("Matricula vazia")
        return false 
    }

    else if (turma === ''){
        alert("Turma vazia")
        return false 
    }
}

formNotas.addEventListener("animationstart", (e) =>{
    if(e.animationName === "form-entrar")
        formNotas.style.display = "flex"
})


// formNotas.addEventListener("submit", (e) =>{
//     e.preventDefault()
    
//     var nota1Valor = nota1.value
//     var nota2Valor = nota2.value
//     var nota3Valor = nota3.value

//     if (validarInpus(nota1Valor,nota2Valor,nota3Valor) != false)
//         calcMedia(matriculaValor,nota1Valor,nota2Valor,nota3Valor)
// })

// function validarInpus(nota1,nota2,nota3){
//     if (nota1 === '' || nota2 === '' || nota3 === ''){
//         alert("Nota vazia")
//         return false 
//     }

//     if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
//         alert("Apenas valores entre 0 e 10")
//         return false 
//     }
        
//     else
//         return true
// }

// function calcMedia(nome,nota1,nota2,nota3){
//     const n1 = Number(nota1)
//     const n2 = Number(nota2)
//     const n3 = Number(nota3)
//     const media = (n1+n2+n3)/3
//     retorno.innerText = `A sua media é ${media}`

//     if (media < 5)
//         retorno.innerText = `A media de ${nome} é ${media}\nRecuperação`
    
//     else if (media < 6)
//         retorno.innerText = `A media de ${nome} é ${media}\nPrecisa de prova final`

//     else
//         retorno.innerText = `A media de ${nome} é ${media}\nAprovado`
// }