const btn = document.querySelector(".btn");

const animeContainer = document.querySelector(".anime-container");

const animeImage = document.querySelector(".anime-img");

const animeName = document.querySelector(".anime-name");

const apiKey = "4cCSRWhtBRsf2s19Nyv7UQ==iX1hRcPYIgfyUFV2";

const apiUrl = "https://api.api-ninjas.com/v1/randomimage?category=";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey, Accept: "image/jpg" },
};

btn.addEventListener("click", async function () {
  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
});
