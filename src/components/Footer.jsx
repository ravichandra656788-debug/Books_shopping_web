import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Book Shopping</h3>
          <p>Find, compare, and purchase your favorite books.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <p className="footer-bottom">
        © 2026 Book Shopping. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;