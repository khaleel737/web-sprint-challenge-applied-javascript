const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const head = document.createElement('div');
  const time = document.createElement('span');
  const mainText = document.createElement('h1');
  const temperature = document.createElement('span');

  head.appendChild(time);
  head.appendChild(mainText);
  head.appendChild(temperature);

  head.classList.add('header');
  time.classList.add('date');
  temperature.classList.add('temp');

  mainText.textContent = title;
  time.textContent = date;
  temperature.textContent = temp;

  return head;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const select = document.querySelector('.header-container')

  select.appendChild(Header('12:07:32 PM', '10/29/2021', '67F'))

}
// headerAppender('header-container')

export { Header, headerAppender }
