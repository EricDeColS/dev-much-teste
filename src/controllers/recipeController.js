import getGif from '../api/giphyService';
import getRecipe from '../api/recipePuppyService';

export default async function recipeController(req, res) {

    const { i } = res.query;

    const ingredients = i.split(',');

    const recipes = await getRecipe(i);

    const gif = await getGif(recipes.title)
    
    return res.status(200);
}