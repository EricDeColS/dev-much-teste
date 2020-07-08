import getGif from '../api/giphyService';
import getRecipe from '../api/recipePuppyService';

export default async function recipeController(req, res) {

    const ingredients = req.query.i;
    if (ingredients.length === 0) {
        return res.status(400).send({
            message: 'There`s nothing to be sniffed by puppies here, try adding ingredients or check for valid characters',
        });
    }
    const ingredientsArray = ingredients.split(',');
    // falta conferir quantidade de ingredientes.
    
    const recipesListed = {
        "keywords" : [...ingredientsArray],
        "recipes": []
    }

    const recievedRecipeArray = await getRecipe(ingredients);
    const recipes = recievedRecipeArray.data.results.map(async r =>{
        const{title, ingredients, href} = r;
        
        const giphy = await getGif(r.title);
        const image = giphy.data.data[0].images.downsized_large.url;
        
        recipesListed.recipes.push({
            title: title,
            ingredients: ingredients,
            link: href,
            gif: image
        });
    });
    Promise.all(recipes).then(()=>{
        return res.status(200).send(recipesListed);
    })
}