import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/'
});

export default async function getGif(recipe) {
    const query = `search?api_key=${process.env.GIPHY_API_KEY}&q=${recipe}&limit=1`;

    const res = await api.get(query);
    if (res.status !== 200) {
        return {
            error: 'Oh no! Our gifator is not gifing at the moment, try again later or call out support.'
        };
    }

    if (!res.data.data)
        return {
            error: 'Wow, your search doesn`t have a gif yet, did you just invented this dish?'
        };
    
    return res.data.data[0].url;
}