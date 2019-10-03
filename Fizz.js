var Numeros = 100;
var divisibleEn3 = false;
var divisibleEn5 = false;

for (i=1;i<=100;i++){
  divisibleEn3 = false;
  divisibleEn5 = false;
  if ((i%3)==0){
    divisibleEn3 = true;
  }
  if((i%5)==0){
    divisibleEn5 = true;
  }

  if(divisibleEn3&divisibleEn5){
    document.write ("<strong>FizzBuzz</strong>");
  }else{
    if(divisibleEn3){
      document.write ("<strong>Fizz</strong>");
    }else{
      if(divisibleEn5){
        document.write ("<strong>Buzz</strong>");
      }else{
        document.write (i);
      }
    }
  }
  document.write ("<br />");
}
