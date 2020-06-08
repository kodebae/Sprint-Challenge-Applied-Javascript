// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

/**
 *! creating the card function  
 */

let myCardMakerFunc = function(headlineInfo, name, photo) {
    let myCard = document.createElement("div");
    let myHeadline = document.createElement("div");
    let myAuthor = document.createElement("div");
    let myImg = document.createElement("div");
    let myImgSrc = document.createElement("img");
    let myAuthorName = document.createElement("span")

    /**
     * !append the child containers
     */

    myCard.appendChild(myHeadline);
    myCard.appendChild(myAuthor);
    myAuthor.appendChild(myImg);
    myImg.appendChild(myImgSrc);
    myAuthor.appendChild(myAuthorName);


    /**
     * !adding the class names 
     */

    myCard.className = "card";

};




axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {

        const myBootstrapArticle = response.data.articles.bootstrap;

        const myJavascriptArticle = response.data.articles.javascript;

        const myJqueryArticle = response.data.articles.jquery;

        const myNodeArticle = response.data.articles.node;

        const myTechnologyArticle = response.data.articles.technology;


        response.data.article.forEach(item => {
            const myCards = document.createElement("div");
            myCards.className = "cards-container";
            const myHeadline = document.createElement(`${headline}`);

        })
    })

.catch(error => {
    console.log("There is an error with the API", error);

}, []);