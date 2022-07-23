import {
    subscribe,
    newsData,
    newsDisplayData,
    newsSideDisplayData,
    explore_details,
  } from "../components/fetch.js";


  // <-----------------navbar --------------------------->


  import {navbar,sidebar,category} from "../components/navbar.js";


  document.getElementById("navbar").innerHTML =navbar();
  let side = document.getElementById("sidemenu");
  side.innerHTML=sidebar();
  
  let cat = document.getElementById("category");
  cat.innerHTML=category();



// <------------------------footer--------------------------------->

import {footer} from "../components/footer.js"
document.getElementById("footer_dum").innerHTML=footer();
  
// <------------------------middle portion subscribe box--------------------------------->

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


  
  // <------------------------middle portion left side whole  details news  box--------------------------------->
  
  let autoData = JSON.parse(localStorage.getItem("news"));
  let auto_explore = () => {
    let container = document.getElementById("newone");
    explore_details(autoData, container, "Opinion");
  };

  // <------------------------middle portion left side  box--------------------------------->

  let key = "e43e2e25bfd040998ae269b42949e400";
  let c = "in";
  let cc = "business";
  let autoNews = async () => {
    // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`
  
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=${cc}&pageSize=2&apiKey=${key}`;
  
    let data = await newsData(url);
    console.log(data.articles);
    let container = document.getElementById("relatedNews");
    container.innerHTML = null;
    newsDisplayData(data.articles, container, "Opinion","opinionExplore.html");
  };
  
  autoNews();
  


 // <------------------------middle portion right side  box--------------------------------->


  let sideNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=${key}`;
  
    let data = await newsData(url);
    console.log(data.articles);
    let container = document.getElementById("right_sidebar_news");
    container.innerHTML = null;
    newsSideDisplayData(data.articles, container,"opinionExplore.html");
  };
  sideNews();

  auto_explore();
  