const btn = document.querySelector(".btn");

const apiURL = "https://api.quotable.io/random";

const quotation = document.querySelector(".quotation");
const author = document.querySelector(".author");

async function getQuote() {
  try {
    btn.innerText="Loading..."
    btn.disabled=true;
    quotation.innerText="Updating..."
    author.innerText="Updating..."
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quotation.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;
    btn.innerText="Get a Quote";
    btn.disabled=false;
  } catch (error) {
    console.log(error)
    quotation.innerText="An error occured, try again later"
    author.innerText="An error occured"
    btn.innerText="Get a Quote";
    btn.disabled=false;
  }
}

btn.addEventListener("click", getQuote);
