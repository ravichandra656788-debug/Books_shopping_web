import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("userEmail");
    navigate("/login");
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Profile</h1>

        <h2>Book Shopper</h2>

        <p>
          Email: {email}
        </p>

        <div className="profile-links">
          <Link to="/books">Browse Books</Link>

          <Link to="/cart">View Cart</Link>

          <Link to="/checkout">Checkout</Link>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;