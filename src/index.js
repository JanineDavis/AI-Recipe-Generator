function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
  recipeElement.innterHTML = "Recipe";

  alert("Generating recipe");
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
