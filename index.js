const calculate = document.getElementById('send');

    function imcValue(){    
        const weightValue = document.getElementById("weightValue").value;
        const heightValue = document.getElementById("heightValue").value;
        const result = document.getElementById("result");
        
        if(weightValue !== '' && heightValue !== ''){
            const imcCalc = (weightValue  / (heightValue * heightValue)).toFixed(2);

            let obesity = '';

                if(imcCalc <= 18.5){
                    obesity = "abaixo do peso."                    
                } result.textContent = "Seu IMC é de: " + imcCalc + ". Você está " + obesity;
                
                if(imcCalc >= 18.5 && imcCalc <= 24.9) {
                    obesity = "com o peso normal."
                } result.textContent = "Seu IMC é de: " + imcCalc + ". Você está " + obesity;

                if(imcCalc >= 25.5 && imcCalc <= 29.9) {
                    obesity = "sobrepeso."
                } result.textContent = "Seu IMC é de: " + imcCalc + ". Você está " + obesity;

                if(imcCalc >= 30 && imcCalc <= 39,9) {
                    obesity = "obeso."
                } result.textContent = "Seu IMC é de: " + imcCalc + ". Você está " + obesity;

                if(imcCalc >= 40) {
                    obesity = "com obesidade morbida."
                } result.textContent = "Seu IMC é de: " + imcCalc + ". Você está " + obesity;
             }  else {
            result.textContent = 'Preencha tudo'
        }

}

calculate.addEventListener('click', imcValue)