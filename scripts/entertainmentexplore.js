import {
  subscribe,
  newsData,
  newsDisplayData,
  newsSideDisplayData,
  explore_details,
} from "../components/fetch.js";

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
  explore_details(autoData, container, "Entertainment");
};


let key = "44e0c93e86de472dab37ad046e8a4e43";
let c = "in";
let cc = "health";
let autoNews = async () => {
  // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`

  let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=${cc}&pageSize=2&apiKey=${key}`;

  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("relatedNews");
  container.innerHTML = null;
  newsDisplayData(data.articles, container, "Entertainment","./entertainmentExplore.html");
};

autoNews();

let sideNews = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=${key}`;

  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("right_sidebar_news");
  container.innerHTML = null;
  newsSideDisplayData(data.articles, container,"./entertainmentExplore.html");
};
sideNews();
auto_explore();

import {footer} from "../components/footer.js"
document.getElementById("footer_dum").innerHTML=footer();