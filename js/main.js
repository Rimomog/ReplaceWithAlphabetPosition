function alphabetPosition(text) {
    let arr = "abcdefghijklmnopqrstuvwxyz".split('');
    let lettersInText = text.toLowerCase().split('');
    let indexOfLetters = [];
    lettersInText.forEach( (element) => {
       for(let i = 0; i < arr.length; i++) {
     if(arr[i] === element){
       indexOfLetters.push(i + 1);
     }
    }
    })
   
    return indexOfLetters.join(' ');
}