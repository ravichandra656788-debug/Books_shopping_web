import { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name && address && phone) {
      setOrderPlaced(true);
    }
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {orderPlaced ? (
        <div className="order-success">
          <h2>Order Submitted</h2>
          <p>
            Your order information has been submitted successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;