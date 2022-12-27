function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[Erro] Confira os dados!')
    } else {
    var x = 0
    var res = window.document.getElementById('resposta')

    res.innerHTML = `A Tabuada do ${n} é:`
    do {
        r = n*x
        res.innerHTML += `<br> ${e} X ${x} = ${r}`
        x++
    } while (x <= e)
    }
}