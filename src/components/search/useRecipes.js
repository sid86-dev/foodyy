import Axios from "axios";
import {useQuery} from 'react-query';

const data = {
    "SPOONACULAR_API_KEY": "4657697774ac42dcbe50bf95b6c4fa02",
    "EDAMAM_APIKEY": '1c4d9352f4588bdeec1aca6f87033fc6',
    "EDAMAM_APIID": '166e00e1',

}


const fetchRecipes = (query,from=0,to=5) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${data.EDAMAM_APIID}&app_key=${data.EDAMAM_APIKEY}&from=${from}&to=${to}`
    const res = Axios.get(url);
    return res;
};

export default function useRecipes(query, from ,to){
    return useQuery(['query', query], () => fetchRecipes(query, from,to));
}