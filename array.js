var inputArray = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

for ( var i = 0; i < inputArray.length;i++)
   {
      inputArray[i] = inputArray[i]*inputArray[i]*inputArray[i];
   } 
    
  
    var product= inputArray.reduce(function(a, b){
        return a * b;
    }, 1);{
  
    if("inputArray=! 0"){
console.log(product);
}


else{
  alert( 'Array is Null' );
}
    }