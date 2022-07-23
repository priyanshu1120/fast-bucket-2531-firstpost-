import { navbar, sidebar, category } from "../components/navbar.js";

  let nav = document.getElementById("navbar");
  nav.innerHTML = navbar();

  let side = document.getElementById("sidemenu");
  side.innerHTML = sidebar();

  let cat = document.getElementById("category");
  cat.innerHTML = category();

let api = `662aa30ca2b1499189f1cbba8cb46f5a`;

import {fetchingApi,appendToHome,fetchApi2,appendToSide} from "./cricket_components/fetch&append.js";

let url = `https://newsdata.io/api/1/news?apikey=pub_944869e38eb5301475b41f0b5c3c71340f64&q=sports`;

let data = await fetchingApi(url);
console.log(data);

let contain = document.getElementById('left-tank'); 

appendToHome(data,contain);

let url2 = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${api}`  
  
let data2 = await fetchApi2(url2);

let container = document.getElementById('right-tank'); 

appendToSide(data2,container); 


import {footer} from "../components/footer.js";
  document.getElementById("footer_dum").innerHTML = footer();