import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      setCart([]);
    }
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((book) => book.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/books">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map((book) => (
            <div className="cart-item" key={book.id}>
              <h2>{book.title}</h2>

              <p>Author: {book.author}</p>

              <p>Price: ₹{book.price}</p>

              <button onClick={() => removeFromCart(book.id)}>
                Remove from Cart
              </button>
            </div>
          ))}

          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;