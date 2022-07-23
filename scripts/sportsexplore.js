import {
    subscribe,
    newsData,
    newsDisplayData,
    newsSideDisplayData,
    explore_details,
  } from "../components/fetch.js";

// <------------------------------navbar page--------------------------->

import {navbar,sidebar,category} from "../components/navbar.js";


document.getElementById("navbar").innerHTML =navbar();
let side = document.getElementById("sidemenu");
side.innerHTML=sidebar();

let cat = document.getElementById("category");
cat.innerHTML=category();

// <------------------------------footer page--------------------------->
import {footer} from "../components/footer.js";
document.getElementById("footer_dum").innerHTML =footer();


  
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
    explore_details(autoData, container, "Sports");
  };

  
  let key = "e43e2e25bfd040998ae269b42949e400";
  let c = "in";
  let cc = "sports";
  let autoNews = async () => {
    // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`
  
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=${cc}&pageSize=4&apiKey=${key}`;
  
    let data = await newsData(url);
    console.log(data.articles);
    let container = document.getElementById("relatedNews");
    container.innerHTML = null;
    newsDisplayData(data.articles, container, "Sports","sportsExplore.html");
  };
  
  autoNews();
  
  let sideNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=${key}`;
  
    let data = await newsData(url);
    console.log(data.articles);
    let container = document.getElementById("right_sidebar_news");
    container.innerHTML = null;
    newsSideDisplayData(data.articles, container,"sportsExplore.html");

  };
  sideNews();
  auto_explore();

  