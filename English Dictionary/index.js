const input= document.querySelector(".input");

// There is api failure for the audio
// json must have the () " Parenthesis" since its an object to extract data present in it
const info= document.querySelector(".info");

const meaning=document.querySelector(".meaning");

const title=document.querySelector(".title");

const resultantMean=document.querySelector(".resultant-meaning")

const audio=document.getElementById("audio")

async function fetchAPI(word){
    try {
        info.style.display="block";
        meaning.style.display="none";

        info.innerText=`Searching the meaning of "${word}"`
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result=await fetch(url).then((res)=>res.json());
        console.log(result)
        info.style.display="none";
        meaning.style.display="block";

        title.innerText=result[0].word;
        resultantMean.innerText=result[0].meanings[0].definitions[0].definition;
        audio.src=result[0].phonetics[0].audio;

    } catch (error) {
        
    }
}

input.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key=== "Enter")
    fetchAPI(e.target.value)
})