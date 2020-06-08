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

let myCardMakerFunc = function(headline, name, photo) {
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
    myHeadline.className = "headline";
    myAuthor.className = "author";
    myImg.className = "img-container";

    /**
     * !attaching elements to arguments
     */

    myHeadline.textContent = "headline";
    myAuthorName.textContent = "name";
    myImgSrc.src = "photo";

    /**
     * !creating the card container
     */

    let myCardContainer = document.querySelector(".cards-container ")

};

/**
 * !grabbing the promise data from the server
 */


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {


        /**
         * ?bootstrap article
         */


        let myBootStrapArticles = response.data.articles.bootstrap;
        console.log("The bootstrap article data response.", response.data);

        myBootStrapArticles.forEach(function(item) {

            let articleCard = myCardMakerFunc(item.headline, item.name, item.photo)
            myCardContainer.appendChild(articleCard);
            console.log('this is item', item);
        });


        /**
         * ?javascript article
         */


        let myJavascriptArticles = response.data.articles.javascript;
        console.log("The javascript article data response.", response.data);

        myJavascriptArticles.forEach(function(item) {
            let articleCard = myCardMakerFunc(item.headline, item.authorName, item.authorPhoto);
            myCardContainer.appendChild(articleCard);
            console.log('this is item', item);
        });


        /**
         * ?jquery article
         */



        let myJqueryArticles = response.data.articles.jquery;
        console.log("The jquery article data response.", response.data);

        myJqueryArticles.forEach(function(item) {
            let articleCard = myCardMakerFunc(item.headline, item.authorName, item.authorPhoto);
            myCardContainer.appendChild(articleCard);
            console.log('this is item', item);
        });


        /**
         * ?node article
         */


        let myNodeArticles = response.data.articles.node;
        console.log("The node article data response.", response.data);

        myNodeArticles.forEach(function(item) {
            let articleCard = myCardMakerFunc(item.headline, item.authorName, item.authorPhoto);
            myCardContainer.appendChild(articleCard);
            console.log('this is item', item);
        });


        /**
         * ?technology article
         */


        let myTechnologyArticles = response.data.articles.technology;
        console.log("The technology article data response.", response.data);

        myTechnologyArticles.forEach(function(item) {
            let articleCard = myCardMakerFunc(item.headline, item.authorName, item.authorPhoto);
            myCardContainer.appendChild(articleCard);
            console.log('this is item', item);
        });

        /**
         * ? end of then response
         */

    })


/**
 * ? catch error
 */

.catch(error => {
    console.log("There is an error with the API", error);

}, []);