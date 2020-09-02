const num=prompt();  //025468
const str = num.toString();
const result = [str[0]];

function call(string){
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
return result;
}
var answer = call();
document.write(answer.join(''));
