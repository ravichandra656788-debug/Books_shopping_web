import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isRegister) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (data.user) {
        alert("Registration successful. You can now login.");
        setIsRegister(false);
        setPassword("");
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (data.user) {
        localStorage.setItem("userEmail", data.user.email);
        navigate("/profile");
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isRegister ? "Register" : "Login"}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p>
          {isRegister
            ? "Already have an account?"
            : "New user?"}
        </p>

        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Back to Login" : "New User? Register"}
        </button>
      </div>
    </div>
  );
}

export default Login;