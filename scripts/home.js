let api = `662aa30ca2b1499189f1cbba8cb46f5a`;

let fetchingApi = async (api) => {
    try{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${api}`;
    
        let res = await fetch(url);
    
        let data = await res.json();
    
        // appendToHome({data:{articles}});
        appendToHome(data.articles);

        console.log(data.articles);
    } catch{
        document.getElementById('error_img').src ='https://media.istockphoto.com/photos/red-screen-with-code-and-inscription-error-picture-id941715768?b=1&k=20&m=941715768&s=170667a&w=0&h=VVYby38Rli2LbBbJwueuJMmscT0SjtVwIpk3gKLhbbE=';
    }

}

fetchingApi(api);


let appendToHome=(data)=> {

    data.forEach(({urlToImage,title,description}) => {

        let contain = document.getElementById('left-tank');
    
        let div = document.createElement('div');
    
        let img = document.createElement('img');
        img.src = urlToImage;
    
        let tit = document.createElement('h3');
        tit.innerText = title;
    
        let disc = document.createElement('p');
        disc.innerText = description;

        div.append(img,tit,disc);
        
        contain.append(div);
    });

}