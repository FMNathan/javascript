function Tabuada(){
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('selTab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1 
        tabuada.innerHTML = ''
        while (c  <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}