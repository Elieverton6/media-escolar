function media() {
    let txtm1 = document.getElementById("txtmedia1");
    let txtm2 = document.getElementById("txtmedia2");
    let txtm3 = document.getElementById("txtmedia3");
    let txtm4 = document.getElementById("txtmedia4");
    let res = document.getElementById("res");
    let txtmateria = document.getElementById("txtmateria")
    
    if(txtmateria.value.length <= 3) {
        res.innerHTML = "[ ERRO! ] O nome da materia não pode ficar vazio!"
    } else if(txtm1.value.length == 0) {
        res.innerHTML = "[ ERRO! ] A media do 1º Bimestre não pode ficar vázia!"
    } else if(txtm2.value.length == 0) {
        res.innerHTML = "[ ERRO! ] A media do 2º Bimestre não pode ficar vázia!"
    } else if(txtm3.value.length == 0) {
        res.innerHTML = "[ ERRO! ] A media do 3º Bimestre não pode ficar vázia!"
    } else if(txtm4.value.length == 0) {
        res.innerHTML = "[ ERRO! ] A media do 4º Bimestre não pode ficar vázia!"
    } else {
        let n1 = Number(txtm1.value);
        let n2 = Number(txtm2.value);
        let n3 = Number(txtm3.value);
        let n4 = Number(txtm4.value);
        let materia = txtmateria.value;
        let result = [n1 + n2 + n3 + n4] / 4;

        if(result > 10) {
            res.innerHTML = ("[ERRO!] A média do bimestre não pode ser maior que 10.");
        } else {
            if(result < 6) {
                console.log(result)
                res.innerHTML = (`[REPROVADO] Sua media em ${materia} foi: ${result}`);
            } else if(result == 6 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 6,0`)
            } else if(result >= 6.1 && result <= 6.5 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 6,5`)
            } else if(result >= 6.6 && result <= 7 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 7,0`)
            } else if(result >= 7.1 && result <= 7.5 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 7,5`)
            } else if(result >= 7.6 && result <= 8 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 8,0`)
            } else if(result >= 8.1 && result <= 8.5 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 8,5`)
            } else if(result >= 8.6 && result <= 9 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 9,0`)
            } else if(result >= 9.1 && result <= 9.5 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 9,5`)
            } else if(result >= 9.6 && result <= 10 ) {
                console.log(result)
                res.innerHTML = (`Parabéns! Você foi aprovado na materia de ${materia} com a média: 10,0`)
            } else {
                res.innerHTML = ("[ ERRO!] Caso tenha acontecido erro me informe o que houve pelo Whatsapp")
            }
        }        
    }
}