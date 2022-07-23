let subscribe = () => {
  return `  <h1>Subscribe to our foreign policy newsletter</h1>
    <p>Sign up for a weekly curated briefing of the most important strategic affairs stories from across the world.</p>
    <p>Email Address </p>
    <form id="form">
    <input type="text" id="email" required >
    <div id="subscribe_result"></div>
   <input id="subscribe_btn" type="submit" value="Subscribe">
</form>
         `;
};

let newsData = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};

let newsDisplayData = (data, cont, catagory, a) => {
  data.forEach(({ urlToImage, title, description }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "A_news");
    let Catagory = document.createElement("h3");
    Catagory.innerText = catagory;
    Catagory.setAttribute("id", "catagory");
    let contentdiv = document.createElement("div");
    contentdiv.setAttribute("id", "contentdiv");

    let Image = document.createElement("img");
    let Title = document.createElement("h3");
    let Description = document.createElement("p");
    if (urlToImage == null) {
      Image.src =
        "https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/full/public/sensitive_content.jpg?itok=ovS6dVFj&mtime=1490749782";
    } else {
      Image.src = urlToImage;
    }
    Title.innerText = title;
    Description.innerText = description;
    let link = a;

    div.addEventListener("click", () => {
      DetailNews({ urlToImage, title, description });
      window.location.href = link;
    });

    contentdiv.append(Catagory, Title, Description);
    div.append(Image, contentdiv);
    cont.append(div);
  });
};

let newsSideDisplayData = (data, cont, a) => {
  let count = 1;
  data.forEach(({ urlToImage, title, description }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "side_news");

    let counting = document.createElement("h1");
    let Title = document.createElement("h2");
    let Description = document.createElement("p");

    for (let i = 1; i <= 1; i++) {
      counting.innerText = count++;
      counting.style.fontFamily = "Arial, sans-serif";
      counting.style.position = "relative";
      counting.style.top = "40px";
      counting.style.left = "10px";
      div.append(counting);
    }

    Title.innerText = title;
    Description.innerText = description;
    let link = a;
    div.addEventListener("click", () => {
      DetailNews({ urlToImage, title, description });
      window.location.href = link;
    });
    div.append(Title, Description);
    cont.append(div);
  });
};

let explore_details = (data, cont, catagory) => {
  data.forEach(({ urlToImage, title, description }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "A_news");
    let Catagory = document.createElement("h3");
    Catagory.innerText = catagory;
    Catagory.setAttribute("id", "catagory");
    let Image = document.createElement("img");
    Image.style.marginTop = "40px";
    let Title = document.createElement("h1");
    Title.style.fontSize = "40px";
    let Description1 = document.createElement("p");
    Description1.style.fontSize = "20px";
    Description1.style.marginTop = "30px";

    let Description2 = document.createElement("p");
    Description2.style.fontSize = "20px";
    Description2.style.marginTop = "30px";

    let Description3 = document.createElement("p");
    Description3.style.fontSize = "20px";
    Description3.style.marginTop = "30px";

    if (urlToImage == null) {
      Image.src =
        "https://image.slidesharecdn.com/yourfutureisparticipationandhereswhy-151204132248-lva1-app6891/95/slide-15-1024.jpg";
    } else {
      Image.src = urlToImage;
    }
    Title.innerText = title;
    Description1.innerText = description;
    Description2.innerText = description;
    Description3.innerText = `Breaking news dolor sit amet consectetur adipisicing elit. Sequi modi totam debitis delectus quas officiis optio impedit, ex accusamus facere ratione vero distinctio ipsum! Nemo quos earum assumenda architecto vero.
        Enim laudantium hic sequi, architecto vel tempore nihil cum dolores tempora, repellendus iusto, vitae libero delectus maxime voluptatem consectetur corrupti. Neque consectetur facere rerum fugit quas, tenetur illum voluptas quae.
        Error nostrum nemo voluptatibus ducimus distinctio, qui, possimus dolorem delectus, amet quam totam autem. Nobis sapiente assumenda architecto aut in minima ab libero est, nam, blanditiis iusto sed doloribus. Repellat?
        Dignissimos, debitis ea odit reprehenderit eligendi pariatur eum perspiciatis delectus optio dolorum! Corrupti laboriosam distinctio ipsam sit totam voluptate sunt cum quas! Quas architecto expedita rerum quasi, numquam fugiat facere!
        Excepturi voluptates porro laboriosam debitis cupiditate nemo id, incidunt aspernatur ullam. Culpa quis accusantium maxime explicabo minus nisi aspernatur veritatis sapiente placeat, minima, repellendus voluptatem id dignissimos voluptatum quibusdam alias!
        Earum sunt, ipsam expedita eos maxime vel, at reprehenderit quibusdam nulla distinctio quae quidem nemo ut et sint ratione quod pariatur, quos itaque accusamus aliquam incidunt rerum in? Aperiam, quas!
        A commodi recusandae iste provident nam placeat laborum. Eius totam exercitationem ad, nostrum, ipsum cum tempore neque a doloremque qui soluta facere nesciunt, aliquid provident porro possimus quaerat culpa quasi.
        Placeat cupiditate perspiciatis, culpa adipisci voluptatum laborum quibusdam error? Nemo molestiae dolore, deserunt placeat nesciunt numquam, odit at hic dicta eveniet eligendi. Necessitatibus mollitia praesentium debitis reprehenderit a inventore aut?
        Voluptates, maiores eius tempora totam facere atque, neque eos repudiandae qui possimus ad. Amet eaque, sint omnis quasi quia iusto consequatur architecto, harum accusamus obcaecati, pariatur officia unde quo aut?
        Vitae similique consequatur velit officiis placeat, fuga nostrum necessitatibus ad veritatis numquam natus labore delectus, quos provident eum facilis vel, ipsa excepturi perspiciatis nam assumenda ea est voluptatum? Esse, fuga?
        Recusandae similique dolorem accusantium ipsam? Culpa dolorum exercitationem, voluptatum omnis accusantium deleniti, provident dignissimos explicabo praesentium suscipit veniam voluptates atque voluptate error perspiciatis est maxime eveniet neque eos aliquam ipsa!
        Corrupti obcaecati ipsum totam delectus quo similique nisi in, cum temporibus eaque numquam aliquid consectetur exercitationem veritatis quibusdam eos soluta deserunt velit mollitia minus fuga vel sequi ratione possimus. Reprehenderit.
        Animi officiis ab, tempora quaerat excepturi, optio repudiandae natus ad, quis magni ullam nulla possimus officia tenetur maxime necessitatibus facere ut voluptas ea. Quas debitis voluptatum quo a adipisci ipsa!
        Optio assumenda quod laborum unde fuga asperiores quis molestias consequuntur beatae dignissimos, porro velit nihil placeat! Est omnis tenetur maiores! Libero, ducimus ratione? Vero, aliquid dolor ratione in voluptate esse!
        Ad nihil harum suscipit voluptatem totam nisi excepturi quidem inventore perferendis, magnam, repellendus vel voluptates ipsum id, numquam ut expedita consequatur! Temporibus nihil maxime amet harum expedita ipsa dolores. Molestias.
        Quas quia et a unde in. Sunt vitae dolorum id repellat, libero deserunt quod saepe consequuntur similique ipsum illo sed dolorem cum? Unde delectus consequatur tenetur consectetur debitis odit iste?
        Voluptatibus ratione porro nesciunt quod deleniti quae! Provident, architecto, consectetur iure exercitationem deserunt amet quia dolor distinctio impedit eos consequuntur alias nobis quae incidunt quod, nihil dolorum molestiae placeat delectus?
        Numquam, quis possimus iure maiores eaque debitis blanditiis cupiditate recusandae totam qui quaerat eligendi aut dolores molestiae laborum amet culpa officiis! Consequuntur, error? Temporibus nulla laboriosam ab repudiandae dolor doloremque?
        Accusantium earum maiores a porro molestiae, cum laborum quidem inventore facere incidunt hic vero doloribus, eum dignissimos ab mollitia reiciendis tempora similique fugit at minus magnam aliquid tenetur fuga? Et.
        Impedit laboriosam placeat architecto nam asperiores, nemo aliquam inventore unde est accusamus ducimus! Praesentium similique repellendus veritatis non laborum consequuntur unde numquam neque dignissimos nulla. Voluptatibus distinctio explicabo animi ad.
        Nisi maiores voluptatibus suscipit atque tempore libero cum quam. Nemo minus quae aspernatur quam impedit incidunt vel assumenda officia excepturi nesciunt neque, reiciendis voluptates, sunt quis voluptatibus doloremque tenetur deserunt!
        Quasi officia, sequi quas est rem harum perspiciatis, sed qui quidem laudantium necessitatibus adipisci! Impedit in error tempore architecto quaerat minus facere non iste sit perferendis cumque, quos nulla quas!
        Dignissimos earum vero nostrum sit voluptate possimus qui ab excepturi sed tenetur esse voluptatibus ducimus incidunt, dolores alias et quia praesentium nulla atque iusto? Repellat enim repellendus laudantium odit tempora!
        Voluptatum eos quidem quaerat aliquam nam quod nulla at aperiam dicta sequi non reiciendis fugiat, voluptatibus suscipit est accusamus autem maiores nostrum, dolorem optio accusantium. Ea porro numquam ex officia?
        Deleniti ad sed doloremque beatae, qui doloribus pariatur vel debitis commodi dolores a culpa maiores, soluta, similique officiis provident ullam! Cupiditate esse iusto necessitatibus voluptatem saepe magnam cum maiores quisquam?
        Animi, nihil fuga delectus laborum sequi et corporis earum perferendis dolores laboriosam velit soluta? Molestias ullam eius optio et sapiente, vitae non aperiam architecto soluta, minus, voluptate cumque consequatur enim.
        Porro possimus laboriosam cum, delectus doloribus pariatur consectetur nam ab nisi iure saepe nostrum magnam vero quibusdam exercitationem tenetur maxime eligendi tempore quam? Sed corporis eaque laborum cumque magnam. Sequi?
        Doloribus ipsum nihil ipsa eligendi, nobis voluptatum dolores saepe nostrum temporibus molestiae. Quaerat tempore non accusamus dicta error adipisci. Corrupti, tenetur rerum. Iusto laboriosam, dolores illo est officiis culpa consequuntur.
      `;
    div.append(
      Catagory,
      Title,
      Image,
      Description1,
      Description2,
      Description3
    );
    cont.append(div);
  });
};

let DetailNews = ({ urlToImage, title, description }) => {
  let arr = [{ urlToImage, title, description }];
  localStorage.setItem("news", JSON.stringify(arr));
  // window.location.href = "./indiaexplore.html";
};

export {
  subscribe,
  newsData,
  newsDisplayData,
  newsSideDisplayData,
  explore_details,
};
