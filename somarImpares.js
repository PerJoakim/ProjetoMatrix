function somarImpares(n){

  var sum = 0,
      count = 0;
  i = 0;

  if(verificarNumero(n))
  {    
    while (count < n)
    {
      if (i % 2 === 1)
      {
        sum = sum + i;
        count++;
      }
      i++;
    }
    return sum;
  }
}

function verificarNumero(n){
  if (typeof n === 'number'){
    return n;    
  }
}

console.log(somarImpares(5));