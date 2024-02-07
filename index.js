function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const titlesList = document.createElement("ul");
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    titlesList.appendChild(listItem);
  });
  document.body.appendChild(titlesList);
}

fetchBooks()