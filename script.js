//1 display number in text box
function displayNumber(num){
    result.value+=num//+used to display numbers 
   

}
//2.
function clearBox(){
    result.value=""//to make the field empty
}
//3.evaluate expression
function evaluateExp(){
    //method1
   // exp=result.value
   // output=eval(exp)//eval method automatically perform action
   // result.value=output


    //method2-more simpler method

    result.value=eval(result.value)
  
  
 
    
    }
  //4.Remove last item
  function removelastItem() {
    result.value=result.value.slice(0,-1)//always starting value 0,to delete to left side give -1
  } 



  

