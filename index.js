function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    })
    .then((json) => renderBooks(json))
    .catch((error) => console.error("Error fetching books:", error));
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

fetchBooks();