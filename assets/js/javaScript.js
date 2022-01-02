var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var buttonOWrapper1 = document.getElementById('decrement').style
var buttonOWrapper2 = document.getElementById('increment').style

function decrement(){
    buttonOWrapper2.opacity = '100%';
    
    if(currentNumber > 0){
        currentNumberWrapper.style.color = 'white';
        currentNumber -= 1;
    } 
    if(currentNumber == 0){
        buttonOWrapper1.opacity = '50%';
        currentNumberWrapper.style.color = 'gray';
        /*currentNumberWrapper.style = '#currentNumber:hover{color: red}'*/
    }
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function increment(){
    buttonOWrapper1.opacity = '100%';
    
    if(currentNumber <= 9){
        currentNumberWrapper.style.color = 'white';
        currentNumber += 1;
    }
    if(currentNumber == 10){
        buttonOWrapper2.opacity = '50%';
        currentNumberWrapper.style.color = 'gray';
    } 
    currentNumberWrapper.innerHTML = currentNumber;
}