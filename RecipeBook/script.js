const recipeList = document.getElementById("recipe-list");

const API_KEY = "24d06e97a9b44293847ce6f952ac6833";
const URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;

function displayRecipe(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "recipe Image";

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `<strong>Ingredients: <strong>${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const recipeLink=document.createElement("a");
    recipeLink.href=recipe.sourceUrl;
    recipeLink.innerText="view recipe"

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  const response = await fetch(URL);

  const data = await response.json();

  return data.recipes;
}
async function init() {
  const recipes = await getRecipes();
  displayRecipe(recipes);
}

init();
