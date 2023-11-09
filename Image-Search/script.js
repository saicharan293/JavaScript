const accessKey="z1-mQJtpxJKcaDtcgGJ8HWsBG5sqNEkCZdXkG8uZRVk"

const form=document.querySelector("form")

const search=document.getElementById("enter")

const searchResults=document.querySelector(".search-results")

const showMore=document.querySelector(".showmore");

let inputData="";

let page = 1;
async function searchImage(){
    inputData=enter.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response= await fetch(url);
    const data=await response.json();
    if(page === 1){
        searchResults.innerHTML=""
    }
    const results=data.results;

    results.map((result)=>{
        const imageWrapper= document.createElement("div");
        imageWrapper.classList.add("search-result");
        
        const image =  document.createElement("img");
        image.src= result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href= result.links.html;
        imageLink.target="_blank"
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++;

    // console.log(page)

    if(page > 1){
        showMore.style.display="block";
    }

    // console.log(results)
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showMore.addEventListener("click",()=>{
    searchImage();
})