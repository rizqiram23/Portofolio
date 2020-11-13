const txtElement = ['Front-end Developer','UI Designer','UX Researcher'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function type(){
 
 if (count == txtElement.length){
     count = 0;
 }

 currentTxt = txtElement[count];

 words = currentTxt.slice(0, ++txtIndex);
 document.querySelector('.type-effect').textContent = words;

 if(words.length == currentTxt.length){
     count++;
     txtIndex=0;
 }
 
 setTimeout(type, 500);

}) ();