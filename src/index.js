function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d2708010555719bt44c67of9ef1394ba";
  let prompt = `Generate a recipe using the ingredients ${instructionsInput.value}`;
  let context =
    "You are a busy family and all recipes should take under 30 minutes to prepare. Provide an overview of the time to make. Provide answer in basic HTML format using lists and include a picture";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<div class="blink">🔎 Generating recipe for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
