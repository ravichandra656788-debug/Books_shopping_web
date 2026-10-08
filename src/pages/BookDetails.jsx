import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../services/supabase";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook();
  }, [id]);

  async function getBook() {
    const { data, error } = await supabase
      .from("books")
      .select("*")
      .eq("id", id);

    if (error) {
      console.log(error);
    } else if (data.length > 0) {
      setBook(data[0]);
    }
  }

  function addToCart() {
    if (!book) {
      return;
    }

    const savedCart = localStorage.getItem("cart");

    let cart = [];

    if (savedCart) {
      cart = JSON.parse(savedCart);
    }

    const existingBook = cart.find((item) => item.id === book.id);

    if (!existingBook) {
      cart.push(book);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Book added to cart");
    } else {
      alert("Book is already in the cart");
    }
  }

  if (!book) {
    return (
      <div className="book-details-page">
        <h1>Book not found</h1>
        <Link to="/books">Back to Books</Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <div className="book-details">
        <img
          src={book.image}
          alt={book.title}
          className="book-details-image"
        />

        <div className="book-details-content">
          <h1>{book.title}</h1>

          <p>Author: {book.author}</p>

          <p>Category: {book.category}</p>

          <p>Price: ₹{book.price}</p>

          <p>Rating: {book.rating}/5</p>

          <p>{book.description}</p>

          <button onClick={addToCart}>
            Add to Cart
          </button>

          <Link to="/books">
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;