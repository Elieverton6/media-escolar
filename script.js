function media() {
    let txtm1 = document.getElementById("txtmedia1");
    let txtm2 = document.getElementById("txtmedia2");
    let txtm3 = document.getElementById("txtmedia3");
    let txtm4 = document.getElementById("txtmedia4");
    let res = document.getElementById("res");
    let txtmateria = document.getElementById("txtmateria")
    
    if(txtm1.value.length == 0) {
        res.innerHTML = "<p><img width='25px' src='icons/error.png'/> A media do 1º bimestre não pode ficar vázia!</p>";
    } else if(txtm2.value.length == 0) {
        res.innerHTML = "<p><img width='25px' src='icons/error.png'/> A media do 2º bimestre não pode ficar vázia!</p>";
    } else if(txtm3.value.length == 0) {
        res.innerHTML = "<p><img width='25px' src='icons/error.png'/> A media do 3º bimestre não pode ficar vázia!</p>";
    } else if(txtm4.value.length == 0) {
        res.innerHTML = "<p><img width='25px' src='icons/error.png'/> A media do 4º bimestre não pode ficar vázia!</p>";
    } else {
        let n1 = Number(txtm1.value);
        let n2 = Number(txtm2.value);
        let n3 = Number(txtm3.value);
        let n4 = Number(txtm4.value);
        let result = (n1 + n2 + n3 + n4) / 4;

        if(txtm1.value > 10) {
            res.innerHTML = "<p><img width='25px' src='icons/error.png'/>A média do 1º bimestre não pode ser maior que 10.</p>";
        } else if(txtm2.value > 10) {
            res.innerHTML = "<p><img width='25px' src='icons/error.png'/>A média do 2º bimestre não pode ser maior que 10.</p>";
        } else if(txtm3.value > 10) {
            res.innerHTML = "<p><img width='25px' src='icons/error.png'/>A média do 3º bimestre não pode ser maior que 10.</p>";
        } else if(txtm4.value > 10) {
            res.innerHTML = "<p><img width='25px' src='icons/error.png'/>A média do 4º bimestre não pode ser maior que 10.</p>";
        } else {
            if(result < 6) {
                console.log(result)
                res.innerHTML = (`Deu ruim! Sua média foi: ${result}`);
            } else if(result == 6 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 6,0.</p>`)
            } else if(result >= 6.1 && result <= 6.5 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 6,5.</p>`)
            } else if(result >= 6.6 && result <= 7 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 7,0.</p>`)
            } else if(result >= 7.1 && result <= 7.5 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 7,5.</p>`)
            } else if(result >= 7.6 && result <= 8 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 8,0.</p>`)
            } else if(result >= 8.1 && result <= 8.5 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 8,5.</p>`)
            } else if(result >= 8.6 && result <= 9 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 9,0.</p>`)
            } else if(result >= 9.1 && result <= 9.5 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 9,5.</p>`)
            } else if(result >= 9.6 && result <= 10 ) {
                console.log(result)
                res.innerHTML = (`<p><img width='25px' src='icons/real.png'/>Parabéns! Você foi aprovado com a média: 10,0.</p>`)
            } else {
                res.innerHTML = ("Caso tenha acontecido erro me informe o que houve pelo Whatsapp")
            }
        }        
    }
}