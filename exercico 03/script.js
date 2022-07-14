function contar(){
    
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso')
    let res =document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] falta dados')
    }else{
        res.innerHTML = 'Contando...'
        let inicioN = Number(inicio.value);
        let fimN = Number(fim.value);
        let passoN = Number(passo.value);

        if (inicioN < fimN){
            for (let contador = inicioN; contador <= fimN; contador += passoN){
                res.innerHTML += `${contador} \u{1F449}`;
            }
        }else{
           for (let contador = inicioN; contador >= fimN; contador -= passoN){
               res.innerHTML += `${contador} \u{1F449}`
           }
        }
        res.innerHTML += '\u{1F3C1}';
    }
}