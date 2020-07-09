import getGif from "../api/giphyService";
import getRecipe from "../api/recipePuppyService";

export default async function recipeController(req, res) {
  const ingredients = req.query.i;
  const ingredientsArray = ingredients.split(",").sort();

  if (ingredients.length === 0) {
    return res.status(400).send({
      message:
        "There's nothing to be sniffed by puppies here, try adding ingredients or check for valid characters",
    });
  }

  if (ingredientsArray.length > 3) {
    return res.status(400).send({
      message: "Please use 3 main ingredients at max.",
    });
  }

  const recipesListed = {
    keywords: ingredientsArray,
    recipes: [],
  };
  const recievedRecipeArray = await getRecipe(ingredients);
  const recipes = recievedRecipeArray.data.results.map(async (r) => {
    const { title, ingredients, href } = r;

    const cleanTitle = title.replace(/[\n\t]/g, " ").replace("&amp;", "&");

    let orderedIngredients = ingredients.split(",");
    orderedIngredients = orderedIngredients.map((item) => item.trim()).sort();

    const giphy = await getGif(title);
    const image = giphy.data.data[0].images.downsized_large.url;

    recipesListed.recipes.push({
      title: cleanTitle,
      ingredients: orderedIngredients.sort(),
      link: href,
      gif: image,
    });
  });
  Promise.all(recipes)
    .then(() => {
      return res.status(200).send(recipesListed);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
