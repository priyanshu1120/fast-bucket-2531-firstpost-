let fetchingApi = async (url) => {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.articles;

    } catch{
        document.getElementById('error_img').src ='https://media.istockphoto.com/photos/red-screen-with-code-and-inscription-error-picture-id941715768?b=1&k=20&m=941715768&s=170667a&w=0&h=VVYby38Rli2LbBbJwueuJMmscT0SjtVwIpk3gKLhbbE=';
    }

}



let appendToHome=(data,contain)=> {

    data.forEach(({urlToImage,title,description}) => {
    
        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = urlToImage;
        
        if(img.src == "null"){
            urlToImage = `https://media.istockphoto.com/photos/red-screen-with-code-and-inscription-error-picture-id941715768?b=1&k=20&m=941715768&s=170667a&w=0&h=VVYby38Rli2LbBbJwueuJMmscT0SjtVwIpk3gKLhbbE=`;
        }

        let content = document.createElement('div');
        content.setAttribute('id','news_cards');

        let trend = document.createElement('p');
        trend.setAttribute('id','trending');
        trend.innerText = "TRENDING";

        let tit = document.createElement('h3');
        tit.innerText = title;
    
        let disc = document.createElement('p');
        disc.innerText = description;
        content.append(trend,tit,disc);

        div.append(img,content);
        
        contain.append(div);
    });

}

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
        div.append(increment);
        div.append(increment,Title,Description);
        container.append(div);
    });

}


export {fetchingApi,appendToHome,appendToSide,fetchApi2}