var a = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	a[i] = prompt('Enter Element ' + (i+1));
}

var product = a.map(Math.sqrt)
var number=prompt("enter the number to multiply:");

//function to product each term with 10
for ( var i = 0; i < a.length;i++)
   {
      a[i] = a[i]*number;
   } 
    
    // Getting sum of numbers
    var sum = a.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);