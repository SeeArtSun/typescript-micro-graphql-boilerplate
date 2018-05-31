const booksFakeData = [
  {
    isbn: "1",
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    isbn: "2",
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const books = () => {
  return booksFakeData;
};

const book = (_, { isbn }, __, { cacheControl }) => {
  cacheControl.setCacheHint({ maxAge: 60 });
  return booksFakeData.find(book => book.isbn === isbn);
};

export { book, books };
