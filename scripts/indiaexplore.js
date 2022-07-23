import {
  subscribe,
  newsData,
  newsDisplayData,
  newsSideDisplayData,
  explore_details,
} from "../components/fetch.js";

// -------------------------------------------

import { navbar, sidebar, category } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let side = document.getElementById("sidemenu");
side.innerHTML = sidebar();

let cat = document.getElementById("category");
cat.innerHTML = category();

//----------------------------------------------

document.getElementById("subscribe-box").innerHTML = subscribe();
let temp1 = document.getElementById("subscribe_btn");
temp1.addEventListener("click", () => {
  let temp2 = document.getElementById("email");
  event.preventDefault();
  let h6 = document.createElement("h6");
  h6.innerText = "Thank you for subscribing!";
  h6.setAttribute("id", "subscribe_results");
  temp2.value = null;
  document.getElementById("subscribe_result").append(h6);
});

let autoData = JSON.parse(localStorage.getItem("news"));

let auto_explore = () => {
  let container = document.getElementById("newone");
  explore_details(autoData, container, "India");
};

let key = "76211eabc2274931b21c2df65860de1b";
let c = "in";
let cc = "health";
let autoNews = async () => {
  // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`

  let url = `https://newsapi.org/v2/top-headlines?country=${c}&pageSize=2&apiKey=${key}`;

  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("relatedNews");
  container.innerHTML = null;
  newsDisplayData(data.articles, container, "india", "./indiaexplore.html");
};

autoNews();

let sideNews = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=${key}`;

  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("right_sidebar_news");
  container.innerHTML = null;
  newsSideDisplayData(data.articles, container, "./indiaexplore.html");
};
sideNews();
auto_explore();
import { footer } from "../components/footer.js";
document.getElementById("footer_dum").innerHTML = footer();
