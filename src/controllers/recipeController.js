import getGif from '../api/giphyService';
import getRecipe from '../api/recipePuppyService';

export default async function recipeController(req, res) {

    const ing = req.query.i;
    if (ing.length === 0) {
        return res.status(400).send({
            message: 'AAAAAAAAAAAAAAA',
        });
    }
    const ingredientsArray = ing.split(',');
    console.log("array de ing: " + ingredientsArray);
    const recievedRecipe = await getRecipe(ing);
    
    const gif = await getGif(recievedRecipe.title);
    console.log("titulo da receita: " + recievedRecipe.title);

    return res.status(200).send({keywords: ingredientsArray, recipes: recievedRecipe });
}