import axios from 'axios';

const api = axios.create({
    baseURL:'http://www.recipepuppy.com/api/'
});

export default async function recipes(i) {
    const res = await api.get(`?i=${i}`);
    
    console.log("status: " + res.status);


    if(res.status !== 200) {
        return {
            error: 'It looks like the puppies are asleep, let`s wake them, try again later'
        };
    }

    if(res.data.results.length < 1) {
        return {
            error: 'The puppies sniffed for goodies but nothing was found! It looks like you have something never sniffed before '
        };
    }

    const recipes  = res.data.results.map((recipe) => {
        const ingredientArray = recipe.ingredients.split(',');
        return {
            title: recipe.title,
            link: recipe.href,
            ingredients: ingredientArray.sort(),
            gif: ''
        };
    });
    return recipes;
}