import { useState } from "react";
import books from "../data/books";

function Compare() {
  const [selectedBooks, setSelectedBooks] = useState([]);

  function handleSelect(bookId) {
    const alreadySelected = selectedBooks.includes(bookId);

    if (alreadySelected) {
      setSelectedBooks(
        selectedBooks.filter((id) => id !== bookId)
      );
    } else if (selectedBooks.length < 2) {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  }

  const booksToCompare = books.filter((book) =>
    selectedBooks.includes(book.id)
  );

  return (
    <div className="compare-page">
      <h1>Compare Books</h1>

      <div className="compare-selection">
        {books.map((book) => (
          <div className="compare-option" key={book.id}>
            <h3>{book.title}</h3>
            <button
              type="button"
              onClick={() => handleSelect(book.id)}
            >
              {selectedBooks.includes(book.id)
                ? "Remove"
                : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {booksToCompare.length > 0 ? (
        <div className="comparison-container">
          {booksToCompare.map((book) => (
            <div className="comparison-card" key={book.id}>
              <img src={book.image} alt={book.title} />

              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Price: ₹{book.price}</p>
              <p>Rating: {book.rating}/5</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Select books to compare.</p>
      )}
    </div>
  );
}

export default Compare;