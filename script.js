

const inputFieldEl = document.querySelector("#result");
const buttonsEl = document.querySelectorAll("button");

for(let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const val = buttonsEl[i].textContent;
        if(val == "C"){
            clearInput();
        }
        else if(val == "="){
            calcresult();
        }
        else if(val == ".delete"){
            backInputValue();
        }
        else{
            addedInputValue(val);
        }
    })

}

function clearInput(){
    inputFieldEl.value = "";
}
function calcresult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}
function addedInputValue(val){
    inputFieldEl.value = inputFieldEl.value + val;
}
function backInputValue(){
    inputFieldEl.value = inputFieldEl.value.slice(0,-1);
}