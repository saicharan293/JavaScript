const ratingEls = document.querySelectorAll(".ratings");

var selectedRating="";

const btn= document.querySelector(".btn")

const container=document.querySelector(".container");

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(e)=>{
        removeActive();
        selectedRating=e.target.innerText || e.target.parentNode.innerText;
        e.target.parentNode.classList.add("active")
        e.target.classList.add("active");
    })
})
btn.addEventListener("click",()=>{
    if(selectedRating!== ""){
        container.innerHTML=`
        <strong>Thank you</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use this feedback to improve our customer support.</p>
        `
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}