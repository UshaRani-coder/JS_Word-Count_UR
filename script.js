let inputTextArea = document.querySelector("textarea");
let wordsCount = document.querySelector("#words span");
let charsCount = document.querySelector("#chars span");

function count(){
    //number of words
    let wordsSplit = inputTextArea.value.trim().split(" ");
    const totalWords = wordsSplit.filter((e)=>{
       if(e !== " "){
            return e;
        }
    })
     wordsCount.innerHTML = totalWords.length;
     //console.log(wordsSplit);
     //console.log(wordsCount);

    //number of characters
   let charsSplit = inputTextArea.value.trim().split("");
   console.log(charsSplit);
   const totalChars = charsSplit.filter((e)=>{
    if((e !== " ") && (e !== "\n")){
        console.log(e);
         return e;
     }
 })
    charsCount.innerHTML = totalChars.length;
     //console.log(charsCount);
}
