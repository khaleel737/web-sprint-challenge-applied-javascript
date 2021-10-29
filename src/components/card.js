import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Headline
  // authorPhoto
  // authorName


  const cards = document.createElement('div');
  const headlines = document.createElement('div');
  const authors = document.createElement('div');
  const imageContainer = document.createElement('div');
  const images = document.createElement('img');
  const authorName = document.createElement('span');

  cards.appendChild(headlines);
  cards.appendChild(authors);
  authors.appendChild(imageContainer);
  imageContainer.appendChild(images);
  authors.appendChild(authorName);

  cards.classList.add('card');
  headlines.classList.add('headline');
  authors.classList.add('author');
  imageContainer.classList.add('img-container');

  headlines.textContent = article.headline;
  images.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  return cards;
}


// Card({headline: 'helloooo', authorPhoto: "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg", authorName: 'Mike Solovan'});

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const articleSelector = document.querySelector(`.cards-container`);

  axios.get(`http://localhost:5000/api/articles`).then(art => {
    console.log(art.data.articles.bootstrap);
    for(let i = 0; i < art.data.length; i++) {
      const articlesAuthors = {
        headline: art.data.articles.bootstrap[i].headline,
        authorPhoto: art.data.articles.bootstrap[i].authorPhoto,
        authorName: art.data.articles.bootstrap[i].authorName
      };
      // console.log(articlesAuthors)
      const cards = Card(articlesAuthors)
      articleSelector.appendChild(cards);
    }
  }
  ).catch(error => {
    console.error(error);
  })



}

cardAppender('.cards-container')

export { Card, cardAppender }
