var a = [1, 2, 3, 4, 5];
for ( var i = 0; i < a.length;i++)
   {
      a[i] = a[i]*a[i]*a[i];
   } 
    
    // Getting sum of numbers
   // Getting sum of numbers
    var product= a.reduce(function(a, b){
        return a * b;
    }, 1);
    
    console.log(product);
  
  if("a =! 0"){
console.log(product);
}


else{
  alert( 'Array is Null' );
}
  