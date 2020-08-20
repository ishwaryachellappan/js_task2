const a = [1,2,3,4];
var product = a.map(Math.sqrt)

//function to product each term with 10
for ( var i = 0; i < a.length;i++)
   {
      a[i] = a[i]*10;
   } 
    
    // Getting sum of numbers
    var sum = a.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);