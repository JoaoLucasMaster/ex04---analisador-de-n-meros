let num = document.querySelector('input#formnum')
let lista = document.querySelector('select#formlist')
let res = document.querySelector('div#result')
let vdados = []

function validNumero(n){
    if(Number(n) >= 1 && Number(n)<=100)
    {
        return true
    }
    else{
        return false
    }
}

function contemList(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(validNumero(num.value)&& !contemList(num.value, vdados))
    {
        vdados.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value =''
    num.focus()
}

function finalizar(){
    if(vdados.length == 0)
    {
        alert('Adionar valores para finalizar!')
    }
    else{
        let total = vdados.length
        let maior = vdados[0]
        let menor = vdados[0]
        let soma = 0
        let media = 0
        for(let pos in vdados)
        { 
            soma += vdados[pos]
            if(vdados[pos] > maior){
                maior = vdados[pos]
            }
            if(vdados[pos] < menor)
            {
                menor = vdados[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>No total temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números informados são ${soma}.</p>`
        res.innerHTML += `<p>A média dos números informados são ${media}.</p>`
    }
}