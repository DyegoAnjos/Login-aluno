const form = document.getElementById('form')
const nome = document.getElementById('nome')
const turma = document.getElementById('turma')
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const retorno = document.getElementById('retorno')

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    var nomeValor = nome.value
    var turmaValor = turma.value
    var nota1Valor = nota1.value
    var nota2Valor = nota2.value
    var nota3Valor = nota3.value

    if (validarInpus(nomeValor,turmaValor,nota1Valor,nota2Valor,nota3Valor) == true)
        calcMedia(nomeValor,nota1Valor,nota2Valor,nota3Valor)
})

function validarInpus(nome,turma,nota1,nota2,nota3){
    if (nome === '')
        alert("Nome vazio")

    else if (turma === '')
        alert("Á campos vazios")
    
    else if (nota1 === '' || nota2 === '' || nota3 === ''){
        alert("Nota vazia")
    }
       
    else
        return true

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10)
        alert("Apenas valores entre 0 e 10")
    else
        return true
}

function calcMedia(nome,nota1,nota2,nota3){
    const n1 = Number(nota1)
    const n2 = Number(nota2)
    const n3 = Number(nota3)
    const media = (n1+n2+n3)/3
    retorno.innerText = `A sua media é ${media}`

    if (media < 5)
        retorno.innerText = `A media de ${nome} é ${media}\nRecuperação`
    
    else if (media < 6)
        retorno.innerText = `A media de ${nome} é ${media}\nPrecisa de prova final`

    else
        retorno.innerText = `A media de ${nome} é ${media}\nAprovado`
}