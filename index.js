// let counterElement = document.getElementById("counterValue");


// function onIncrement() {
//   let previousCounterValue = counterElement.textContent;
//   let updatedCounterValue = parseInt(previousCounterValue) + 1;
//   if (updatedCounterValue > 0) {
//     counterElement.style.color = "green";
//   } else if (updatedCounterValue < 0) {
//     counterElement.style.color = "red";
//   } else {
//     counterElement.style.color = "black";
//   }
//   counterElement.textContent = updatedCounterValue;
// }


// function onDecrement() {
//   let previousCounterValue = counterElement.textContent;
//   let updatedCounterValue = parseInt(previousCounterValue) - 1;
//   if (updatedCounterValue > 0) {
//     counterElement.style.color = "green";
//   } else if (updatedCounterValue < 0) {
//     counterElement.style.color = "red";
//   } else {
//     counterElement.style.color = "black";
//   }
//   counterElement.textContent = updatedCounterValue;
// }


// function onReset() {
//   let counterValue = 0;
//   counterElement.textContent = counterValue;
//   counterElement.style.color = "black";
// }




let counterElement=document.getElementById("counterValue");


function onDecrement(){
   let previousCounterValue=counterElement.textContent;
   let updateCounterValue=previousCounterValue-1;
   console.log(updateCounterValue);
   if(updateCounterValue > 0){
    counterElement.style.color="green";
   }else if(updateCounterValue < 0){
    counterElement.style.color="red";
   }else{
    counterElement.style.color="black";
   }
   counterElement.textContent=updateCounterValue
}
function onIncrement(){
    let previousCounterValue=counterElement.textContent;
    let updateCounterValue=parseInt(previousCounterValue)+1;
    console.log(updateCounterValue);
    if(updateCounterValue > 0){
        counterElement.style.color="green";
       }else if(updateCounterValue < 0){
        counterElement.style.color="red";
       }else{
        counterElement.style.color="black";
       }
    counterElement.textContent=updateCounterValue
 }
function onReset(){
    counterElement.textContent=0;
    counterElement.style.color="black";
}





































