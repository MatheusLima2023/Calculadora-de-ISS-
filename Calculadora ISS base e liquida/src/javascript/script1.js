document.getElementById('calcula5').addEventListener('click',function(){

    const num3 = parseFloat(document.getElementById('num3').value);
    const v1 = (100-5)/100;
    if (isNaN(num3)|| num3 === 0){
        document.getElementById('result3').textContent = 'Ivalido';
    
        (isNaN(num3)|| num3 === 0)
            document.getElementById('result4').textContent = 'Ivalido';
        return
    }
    
    let result3 =  num3/v1;
    
    if (Number.isInteger(result3)){
        document.getElementById('result3').textContent = ( "R$" + result3.toFixed(2).replace('.',','));
    
    }
    
    let result4 = result3 - num3;
    
    if (Number.isInteger(result4)){
        document.getElementById('result4').textContent = ("R$" + result4.toFixed(2).replace('.',','));
    
    }
    
    else{
        document.getElementById('result3').textContent =( "R$" + result3.toFixed(2).replace('.',','));
        document.getElementById('result4').textContent =("R$" + result4.toFixed(2).replace('.',','));
    }
});