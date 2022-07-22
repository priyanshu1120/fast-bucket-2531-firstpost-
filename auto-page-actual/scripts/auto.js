import {
  subscribe,
  newsData,
  newsDisplayData,
  newsSideDisplayData,
} from "../components/fetch.js";

let key = "bb025f8cfd2d42748f38ba6ab456f616";
let c = "in";
let cc = "technology";
let autoNews = async () => {
  // let url =`https://newsapi.org/v2/everything?q=general&from=2022-07-19&to=2022-07-19&sortBy=popularity&apiKey=dfec4f3db9ce45279d598a21cd4d6366`

  let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=${cc}&pageSize=20&apiKey=${key}`;
  let data = await newsData(url);
  console.log(data.articles);
  let container = document.getElementById("newone");
  container.innerHTML = null;
  newsDisplayData(data.articles, container, "auto");
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
      "https://www.firstpost.com/wp-content/uploads/2022/07/Tata-lost-the-number-2-position-to-Hyundai-in-June-planning-to-offer-huge-discounts-in-July.jpg?impolicy=website&width=640&height=362",
    cate: "auto",
    tab: "Tata lost the number 2 position to Hyundai in June, planning to offer huge discounts in July",
  },
  {
    image_url:
      "https://images.firstpost.com/wp-content/uploads/2022/06/2022-Maruti-Suzuki-Brezza-1.jpg?impolicy=website&width=640&height=363",
    cate: "auto",
    tab: "'2022 Maruti Suzuki Brezza launched in India, priced from Rs 7.99 lakh",
  },
  {
    image_url:
      "https://www.firstpost.com/wp-content/uploads/2022/07/The-government-is-planning-an-electric-highway-between-Delhi-and-Mumbai_-Nitin-Gadkari.jpg?impolicy=website&width=640&height=362",
    cate: "auto",
    tab: "The government is planning an electric highway between Delhi and Mumbai: Nitin Gadkari",
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
  newsSideDisplayData(data.articles, container);
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