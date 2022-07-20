let api = `662aa30ca2b1499189f1cbba8cb46f5a`;

import {fetchingApi,appendToHome,fetchApi2,appendToSide} from "./home_components/fetch&append.js"

let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${api}`;

let data = await fetchingApi(url);

let contain = document.getElementById('left-tank'); 

appendToHome(data,contain);

let url2 = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${api}`

let data2 = await fetchApi2(url2);

let container = document.getElementById('right-tank');

appendToSide(data2,container);







