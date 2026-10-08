import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import books from "../data/books";

function Home() {
  const featuredBooks = books.filter((book, index) => index < 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Book Shopping</h1>
          <p>
            Discover, compare, and purchase your favorite books in one place.
          </p>

          <Link to="/books" className="hero-button">
            Browse Books
          </Link>
        </div>
      </section>

      <section className="featured-books">
        <h2>Featured Books</h2>

        <div className="book-grid">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;