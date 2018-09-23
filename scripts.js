
var url = "https://newsapi.org/v2/everything?sources=hacker-news&apiKey=c93fb299b821424a91eb4fe2d7bd1a67"

fetch(url)
    .then(r => {
        return r.json();
    })
    .then(data => {
       console.log(data);
       let articles = data.articles;
       let newsStream = document.createElement("ul");
       let body = document.querySelector('#content');
       let count = 0;
       body.appendChild(newsStream);
       articles.map(articleNode => {
           count++;
           let article = document.createElement("li");
           article.innerHTML = '<a href="' + articleNode.url + '">' + "<span>" +count + '.    ' + "</span>" +articleNode.title +"</a>";
           article.innerHTML += '<p> by ' + articleNode.author + '</p>';
            newsStream.appendChild(article);
            
       })
    })
    .catch(e => {console.log(`An error occurred: ${e}`);});

function topHeadlines(){
    url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=c93fb299b821424a91eb4fe2d7bd1a67"

    fetch(url)
        .then(r => {
            return r.json();
        })
        .then(data => {
            console.log(data);
            let articles = data.articles;
            let newsStream = document.createElement("ul");
            let body = document.querySelector('#content');
            let count = 0;
            body.innerHTML = "";
            body.appendChild(newsStream);
            articles.map(articleNode => {
                count++;
                let article = document.createElement("li");
                article.innerHTML = '<a href="' + articleNode.url + '">' + "<span>" + count + '.    ' + "</span>" + articleNode.title + "</a>";
                article.innerHTML += '<p> by ' + articleNode.author + '</p>';
                newsStream.appendChild(article);

            })
        })
        .catch(e => {
            console.log(`An error occurred: ${e}`);
        });
}

function everyHeadline(){
    url = "https://newsapi.org/v2/everything?sources=hacker-news&apiKey=c93fb299b821424a91eb4fe2d7bd1a67"

    fetch(url)
        .then(r => {
            return r.json();
        })
        .then(data => {
            console.log(data);
            let articles = data.articles;
            let newsStream = document.createElement("ul");
            let body = document.querySelector('#content');
            let count = 0;
            body.innerHTML = "";
            body.appendChild(newsStream);
            articles.map(articleNode => {
                count++;
                let article = document.createElement("li");
                article.innerHTML = '<a href="' + articleNode.url + '">' + "<span>" + count + '.    ' + "</span>" + articleNode.title + "</a>";
                article.innerHTML += '<p> by ' + articleNode.author + '</p>';
                newsStream.appendChild(article);

            })
        })
        .catch(e => {
            console.log(`An error occurred: ${e}`);
        });
}
