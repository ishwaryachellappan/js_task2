var inputArray = [];
var size = 5; //Maximum Array size


var inputArray = [];
var size = 5; //Maximum Array size

var i=0;
while(i<size) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
  i++;
}

for ( var i = 0; i < inputArray.length;i++)
   {
      inputArray[i] = inputArray[i]*inputArray[i]*inputArray[i];
   } 
   
    
  
    var product= inputArray.reduce(function(a, b){
        return a * b;
    }, 1);
    {
  
    if("inputArray=! 0"){
console.log(product);
}


else{
  alert( 'Array is Null' );
}
    }