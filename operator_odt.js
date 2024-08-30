 /*sybols,character,keywords which perform special task is called operators
 types of operators
 1. Arthematic operators==>
    +,-,*,/,% 

 2. Increasement / decreasement operators
   * to change any value either by inceasing with 1 or decreasing value by 1 then
    we can do==> a++ or a--

 3. Assaignment Operators
        = , += , -= ,  *= , /= , %= 
    *or to change by 5
    we do a+=5  or a-=5
4. string concatation operators 
  to add any two or more than two  strings.
  we use   +  or  , 

5. Comperasion operators 
we use this to compare two or more than two varaiables .
comparision may be either with numbers or strings or any things 
   < less then
   > greater than
  <= less and equals
   >=  greater and equals  
   ==  value is equal to value 
   === value is equal to data type
   !=  is not equlas to
   !== value is not equals data type

6. Logical Operators
       &&  and ==> if all expression is true then we can use &&
       ||  or  ==> if any one expression is true 
       !   not ==> if result is true then it shows false and if is false change to true. 

 */
//**1&2. arthematic and increasement or decreasemennt operator
// let a=10;
// let b=2;   
// let c=a/b  //5==> division
// let d= a%b //0==>remainder
//  console.log(a++);//10
//  console.log(++a);//12
//  console.log(a++);//12
//  console.log(++a);//14


// 3. Assaignment operators 
let a = 10;
console.log(a+=100);//==> 110
console.log(a-=10); //==> 100
console.log(a*=5);  //==> 500
console.log(a/=5); //==> 100
console.log(a%=5); //==>0

//4. string concatation operators 
let first= "first";
let last = "Name";
first = first+" "+ last// print first Name
first+=" "+last        // print also first Name
console.log(first)

// 5. comparision operator 
let x=10;
let y = "10";
console.log(x==y);//true
console.log(x===y);//false
console.log(x!=y);//false
console.log(x!==y); // true
console.log(x<y); // false
console.log(x<=y); //true
console.log(x>y);//false
console.log(x>=y);//true

//6. Logic operator 
