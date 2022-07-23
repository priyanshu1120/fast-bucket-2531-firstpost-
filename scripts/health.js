import {
  subscribe,
  newsData,
  newsDisplayData,
  newsSideDisplayData,
} from "../components/fetch.js";
import { navbar, sidebar, category } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let side = document.getElementById("sidemenu");
side.innerHTML = sidebar();

let cat = document.getElementById("category");
cat.innerHTML = category();

// nav

let key = "76211eabc2274931b21c2df65860de1b";
let c = "in";
let cc = "health";
let autoNews = async () => {
  // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`

  let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=${cc}&pageSize=20&apiKey=${key}`;
  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("newone");
  container.innerHTML = null;
  newsDisplayData(data.articles, container, "Health", "./healthexplore.html");
};

autoNews();

document.getElementById("subscribe-box").innerHTML = subscribe();
let connn = document.getElementById("subscribe_result");
// connn.innerHTML = "";
let temp1 = document.getElementById("subscribe_btn");
temp1.addEventListener("click", () => {
  let temp2 = document.getElementById("email");
  event.preventDefault();
  let h6 = document.createElement("h6");
  h6.innerText = "Thank you for subscribing!";
  h6.setAttribute("id", "subscribe_results");
  temp2.value = null;
  connn.innerHTML = null;
  connn.append(h6);
});

let obj = [
  {
    image_url:
      "https://www.businessinsider.in/photo/93056828/the-1st-us-polio-case-in-9-years-left-a-man-paralyzed-it-could-have-been-avoided-with-vaccination-experts-say-.jpg?imgsize=103688",
    cate: "Health",
    tab: "The 1st US polio case in 9 years left a man paralyzed",
  },
  {
    image_url:
      "https://cdn.siasat.com/wp-content/uploads/2022/07/IMG_20220722_193610_1200_x_900_pixel.jpg",
    cate: "Health",
    tab: "Third in Gulf, Qatar reports first case of monkeypox",
  },
  {
    image_url:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/06/eat_and_calculate_cholesterol_ratios_732x549_thumb.jpg",
    cate: "Health",
    tab: "Cholesterol ratios: How to calculate them",
  },
];

slideshow();
let i = 0;
function slideshow() {
  let slideshows = document.getElementById("full");
  setInterval(function () {
    console.log(i);
    if (i === obj.length) {
      i = 0;
    }
    let img = document.createElement("img");
    img.src = obj[i].image_url;

    let div = document.createElement("div");
    div.setAttribute("id", "slidebox");

    let p1 = document.createElement("h3");
    p1.innerText = obj[i].cate;
    p1.style.borderBottom = "1px solid #fad65f";
    p1.style.borderWidth = "5px";
    p1.style.width = "40px";

    let p = document.createElement("h2");
    p.innerText = obj[i].tab;

    slideshows.innerHTML = null;

    div.append(p1, p);

    slideshows.append(img, div);
    i++;
  }, 2000);
}

let sideNews = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${key}`;
  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("right_sidebar_news");
  container.innerHTML = null;
  newsSideDisplayData(data.articles, container, "./healthexplore.html");
};
sideNews();

let refreshPAge = () => {
  window.location.reload();
  console.log("abc");
};
document.getElementById("xyz").addEventListener("click", refreshPAge);
document.getElementById("xya").addEventListener("click", refreshPAge);
document.getElementById("xyb").addEventListener("click", refreshPAge);
document.getElementById("xyc").addEventListener("click", refreshPAge);
import { footer } from "../components/footer.js";
document.getElementById("footer_dum").innerHTML = footer();
