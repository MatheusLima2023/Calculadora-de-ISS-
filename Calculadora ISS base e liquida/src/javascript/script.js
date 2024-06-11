document.getElementById('calcula').addEventListener('click',function(){

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1)|| isNaN(num2) || num1 === 0){
        document.getElementById('result1').textContent = 'Ivalido';
    
        (isNaN(num1)|| num1 === 0)
            document.getElementById('result2').textContent = 'Ivalido';
        return
    }
    
    let result1 = (num1 * num2) / 100;
    
    if (Number.isInteger(result1)){
        document.getElementById('result1').textContent = ( "R$" + result1.toFixed(2).replace('.',','));
    
    }
    
    let result2 = num1 - result1 ;
    
    if (Number.isInteger(result2)){
        document.getElementById('result2').textContent = ("R$" + result2.toFixed(2).replace('.',','));
    
    }
    
    else{
        document.getElementById('result1').textContent =( "R$" + result1.toFixed(2).replace('.',','));
        document.getElementById('result2').textContent =("R$" + result2.toFixed(2).replace('.',','));
    }
});
