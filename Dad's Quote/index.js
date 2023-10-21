var btnEl=document.querySelector(".btn")
const jokeEl=document.querySelector(".joke");

const apikey="4cCSRWhtBRsf2s19Nyv7UQ==iX1hRcPYIgfyUFV2";

const options={
    method: "GET",
    headers:{
        "X-Api-Key": apikey,
    },
}

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){


    try {
        
        jokeEl.innerText="Updating......";
        btnEl.disbaled=true;
        btnEl.innerText="Loading..."
        const joker=await fetch(apiurl,options)
        const data=await joker.json()
    
        btnEl.disbaled=false;
        btnEl.innerText="Tell me a Joke"
        // console.log(data[0].joke)
        jokeEl.innerText=data[0].joke;
    } catch (error) {
        jokeEl.innerText="An error happened, try again later"
        btnEl.disbaled=false;
    btnEl.innerText="Tell me a joke"
        console.log(error)
    }
}

btnEl.addEventListener("click",getJoke);

