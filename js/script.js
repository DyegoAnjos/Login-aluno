const login = document.getElementById('formLogin')
const matricula = document.getElementById('matricula')
const senha = document.getElementById('senha')
const turma = document.getElementById('turma')

const nota = document.getElementById('formNota')
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const retorno = document.getElementById('retorno')

login.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    if(validarLogin()===true){
        login.classList.add('form-sair')
    }
})

login.addEventListener("animationend", (e) =>{
    if(e.animationName === 'sair'){
        login.style.display = 'none'
        nota.style.display = 'flex'
        nota.classList.add('form-entrar')
    }
})

function validarLogin(){
    const matriculaValor = matricula.value
    const senhaValor = senha.value
    const turmaValor = turma.value

    if(matriculaValor === ''){
        setarErroPara(matricula)
    }

    else{
        setarSucessoPara(matricula)
    }

    if(senhaValor === ''){
        setarErroPara(senha)
    }

    else if (senhaValor.length < 6){
        setarErroPara(senha)
    }

    else{
        setarSucessoPara(senha)
    }

    if(turmaValor === ''){
        setarErroPara(turma)
    }

    else{
        setarSucessoPara(turma)
        return true
    }
}

nota.addEventListener('submit', (e) =>{
    var nota1Valor = nota1.value
    var nota2Valor = nota2.value
    var nota3Valor = nota3.value
    
    e.preventDefault()

    if(validarNota(nota1Valor,nota2Valor,nota3Valor)===3){
        calcMedia(nota1Valor,nota2Valor,nota3Valor)
    }
})

function validarNota(nota1V,nota2V,nota3V){
    var sucesso=0
    if (nota1V === '' || nota1V < 0 || nota1V >10){
        setarErroPara(nota1)
        
    }

    else{
        setarSucessoPara(nota1)
        sucesso++
    }

    if (nota2V === '' || nota2V < 0 || nota2V >10){
        setarErroPara(nota2)
    }

    else{
        setarSucessoPara(nota2)
        sucesso++
    }

    if (nota3V === '' || nota3V < 0 || nota3V >10){
        setarErroPara(nota3)
        
    }

    else{
        setarSucessoPara(nota3)
        sucesso++
    }

    return sucesso
}

function calcMedia(nota1,nota2,nota3){
    const n1 = Number(nota1)
    const n2 = Number(nota2)
    const n3 = Number(nota3)
    const media = (n1+n2+n3)/3

    if (media < 5)
        retorno.innerText = `A media é ${media}\nRecuperação`
    
    else if (media < 6)
        retorno.innerText = `A media é ${media}\nPrecisa de prova final`

    else
        retorno.innerText = `A media é ${media}\nAprovado`
}

function setarErroPara(input){
    const formControl = input.parentElement

    formControl.className = 'erro'
}

function setarSucessoPara(input){
    const formControl = input.parentElement

    formControl.className = 'acerto'
}