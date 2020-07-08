import getGif from '../api/giphyService';
import getRecipe from '../api/recipePuppyService';

export default async function recipeController(req, res) {

    const ing = req.query.i;
    // if (i.length === 0) {
    //     return res.status(400).send({
    //         message: 'AAAAAAAAAAAAAAA',
    //     });
    // }
    const ingredientsArray = ing.split(',');
    console.log(ingredientsArray);
    const recievedRecipe = await getRecipe(i);
    
    const gif = await getGif(recievedRecipe.title);
    console.log(recievedRecipe.title);

    return res.status(200).send({oi: 'oi'});
}