import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-card-image"
      />

      <div className="book-card-content">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Price: ₹{book.price}</p>

        <Link to={`/books/${book.id}`} className="book-card-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;