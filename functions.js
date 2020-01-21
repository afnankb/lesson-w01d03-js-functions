//Define a youRock function that accepts a string argument of a name and returns a string using that name.


const youRock = function(name){
  
    console.log(" You Rock  "+name)
    
    };
    
    youRock("Mohammed");
    youRock("Hisham");
    youRock("Sager");

    



//Define a square function that accepts a number argument and returns that number multiplied by itself.


const Square = function(number){
  
    return number*number
    
    };
    
    console.log(Square(2));
    console.log(Square(3));



//Define a cube function that accepts a number argument and returns that number raised to the third power. 


const cube = function(number){
  
    return number*number*number
    
    };
    
    console.log(cube(2));
    console.log(cube(3));

    
//Define a toTheFourth function that accepts a number argument and returns that number raised to the fourth power.


const toTheFourth = function(number){
  
    return number*number*number*number
    
    };
    
    console.log(toTheFourth(2));
    console.log(toTheFourth(3));
    

//Lab: FizzBuzz Function 


 const fizzBuzz = function (number){

if(number % 3 === 0 ){
  console.log("Fizz");
  
}
else if(number % 5 === 0){
  console.log("Buzz");
  
}
else if (number % 3 === 0 && number % 5 === 0)
{
  console.log("FizzBuzz");
  
}
else {
  console.log(number)
  
}



   }//end function 


   fizzBuzz(3);
   fizzBuzz(15);
   fizzBuzz(7);



   //Lab: RainDrop Function


   const rainDrop = function(number){

    let out ="";
    if(number % 3 === 0 ){
      out = out + "pling";
      
    }
    
    if(number % 5 === 0 ){
      out = out + "Plang";
      
    }
    
     if (number % 7 === 0 )
    {
      out = out + "Plong";
      
    }
    
    if (out===""){
      console.log(number)
    
    }
    else {
    console.log(out);
    }
    
    
    
    };
    
    rainDrop(28);
    rainDrop(1755);
    rainDrop(34);








// Extra Practice

    

    let total= "" ;
isNaN(5)
const calculator = function(num1,num2,string){
if(isNaN(num1)&&isNaN(num2)){

total="calculator only accepts numbers";

}

else {
    
if (string==="add"){

  
  total = num1+num2;
}

else if (string==="subtract"){

total = num1-num2;

}


else if (string==="divide")
{

total = num1 / num2 ;


}

else if  (string==="multiply") {

  total= num1 * num2;
}

else 
{
total = "calculator can only add, subtract, divide, or multiply";

}

}

return total;

};

console.log(calculator(13,4,"subtract"));