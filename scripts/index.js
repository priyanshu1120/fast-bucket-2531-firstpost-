import { navbar, sidebar, category } from "../components/navbar.js";

  let nav = document.getElementById("navbar");
  nav.innerHTML = navbar();

  let side = document.getElementById("sidemenu");
  side.innerHTML = sidebar();

  let cat = document.getElementById("category");
  cat.innerHTML = category();

let api = `76211eabc2274931b21c2df65860de1b`;

import {fetchingApi,appendToHome,fetchApi2,appendToSide} from "./home_components/fetch&append.js"

let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${api}`;

let data = await fetchingApi(url);

let contain = document.getElementById('left-tank'); 

appendToHome(data,contain);

let url2 = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${api}`

let data2 = await fetchApi2(url2);

let container = document.getElementById('right-tank');

appendToSide(data2,container);

import {footer} from "../components/footer.js";

  document.getElementById("footer_dum").innerHTML = footer()







