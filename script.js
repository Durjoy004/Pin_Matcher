let firstBtn = document.getElementById('Generate');
let secBtn = document.querySelectorAll('#bttns');
let firstInputBox = document.getElementById('inpuOne');
let secInputBox = document.getElementById('inpuSec');
let submitBtn = document.getElementById('submit');
let right = document.querySelector('.right')
let wrong = document.querySelector('.wrong');
let str = "";

// generate the pin

firstBtn.addEventListener('click',()=>{
    function getRandomIntInclusive(min=99, max=9999) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
      }
      let generatePin = getRandomIntInclusive();
      firstInputBox.value = generatePin;
})

//  Type the pin on the sceond screen

 Array.from(secBtn).forEach(button => {
    button.addEventListener('click',(e)=>{
      if(e.target.innerText === 'AC')
      {
        str = '';
        secInputBox.value = str;
      }
      else if(e.target.innerText === 'Del'){
        str = String(str.substring(0,str.length-1));
        secInputBox.value = str;

      }
      else{
        str = str + e.target.innerText;  
        secInputBox.value = str; 
      }
    })
 });


 // submit button & check the pin is right or wrong


 submitBtn.addEventListener('click',()=>{
    
    if(secInputBox.value===firstInputBox.value){
        right.style.display ='block';
        wrong.style.display = 'none';

    }
    else{
      right.style.display ='none';
      wrong.style.display = 'block';
    }
 })