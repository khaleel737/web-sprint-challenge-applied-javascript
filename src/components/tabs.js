const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // const topic = document.createElement('div');
  // const tabOne = document.createElement('div');
  // const tabTwo = document.createElement('div');
  // const tabThree = document.createElement('div');

  // topic.appendChild(tabOne);
  // topic.appendChild(tabTwo);
  // topic.appendChild(tabThree);

  // topic.classList.add('topics');



  // for (let i = 0; i < topics.length; i++) {
  //   const allTopics = [
  //     tabOne.textContent = topics[i],
  //     tabTwo.textContent = topics[i],
  //     tabThree.textContent = topics[i],
  //   ];
  //   topic.appendChild(allTopics);
  // }
  // return topic;
}

// Tabs(['javascript', 'bootstrap', 'technology'])

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
