let fetchingApi = async (url) => {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.results;

    } catch{
        document.getElementById('error_img').src ='https://media.istockphoto.com/photos/red-screen-with-code-and-inscription-error-picture-id941715768?b=1&k=20&m=941715768&s=170667a&w=0&h=VVYby38Rli2LbBbJwueuJMmscT0SjtVwIpk3gKLhbbE=';
    }

}



let appendToHome=(data,contain)=> {

    data.forEach(({image_url,title,description}) => {
    
        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = image_url;
        console.log(img.src);
    
        if(img.src == 'https://reliable-smakager-3fc934.netlify.app/null' || img.src == 'http://127.0.0.1:5500/fast-bucket-2531-firstpost-/null'){
            img.src = `https://www.scrolldroll.com/wp-content/uploads/2020/12/Narendra-Modi-Meme-Templates-Waah-Modi-Ji-Waah.jpg`;
        }

        let content = document.createElement('div'); 
        content.setAttribute('id','news_cards');

        let trend = document.createElement('p');
        trend.setAttribute('id','trending');
        trend.innerText = "POLITICS"; 

        let tit = document.createElement('h3');
        tit.innerText = title;
    
        let disc = document.createElement('p');
        disc.innerText = description;

        content.append(trend,tit,disc);

        div.append(img,content);
        
        contain.append(div);

        let results = {
            image_url,
            title,
            description
          }

          div.onclick = () => {
            playVideo(results);
          };
    });

}

let playVideo = (results) => {
    localStorage.setItem("newsBank", JSON.stringify(results));
    window.location.href = "politics-news.html";
    };

let fetchApi2 = async(url2) => {

    try{
        let res = await fetch(url2);
        let data = await res.json();

        return data.articles;
    } catch{
        console.log('something went wrong!');
    }

}

let appendToSide = (data, container) => {

    let nums=1
    data.forEach(({ title, description }) => {
        let div = document.createElement("div");
        div.setAttribute("id", "news");
         
        let increment = document.createElement("h1");
        increment.setAttribute('id','increase');
        let Title = document.createElement("h2");
        let Description = document.createElement("p");
        
        Title.innerText = title;
        Description.innerText = description;
        for(let i=1;i<=1;i++){
            increment.innerText= nums++; 
        }
        let aid_1 = document.createElement('img');
        aid_1.setAttribute('class','logo_style');
        aid_1.src = 'https://images.outbrainimg.com/transform/v3/eyJpdSI6IjgyNDBkZWQ2NjBmMDMzNjQwNTNmMGI3ZDkyZDAwZDY5NDAxNDJjMGJkMzFiN2MyOTNkNmQwOWMxYTIzOGExOWEiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp';
        
        let aid_2 = document.createElement('img');
        aid_2.src = 'https://wlskyinfopartners.eacdn.com/wlskyinfopartners/img/f7fa6afe-6120-4062-a10d-fcfd57480db6.jpg';
        aid_2.setAttribute('class','logo_style');
        
        let aid_3 = document.createElement('img');
        aid_3.src = 'https://images.outbrainimg.com/transform/v3/eyJpdSI6IjFmYjU1MWViZTc2ODY0NDJjYzg3NzI1ZWVhODUzNTg2MjMzMmEzYmMyMDU3N2Y1MGM3NzhlNjdhN2Y2OTcwMzciLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp';
        aid_3.setAttribute('class','logo_style');
        
        div.append(increment);
        div.append(increment,Title,Description);
        container.append(div,aid_1,aid_2,aid_3);
    });

}


export {fetchingApi,appendToHome,playVideo,fetchApi2,appendToSide}