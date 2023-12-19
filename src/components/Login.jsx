import { useState } from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import steam from "../assets/images/steam.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please complete all fields.");
    } else if (!email.includes("@")) {
      setErrorMessage("Your email is not valid.");
    } else {
      try {
        const response = await axios.post(
          "https://site--back-gamepad-rawg--f5vs5q45f4mj.code.run/user/login",
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          handleToken(response.data.token);
        }

        alert("You are connect.");
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="background-login">
      <div className="signup">
        <section className="signup-left">
          <h2>Login</h2>
          <form className="form-signup">
            <input
              className="input-signup"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <input
              className="input-signup"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            {/* message d'erreur */}
            <p className="error-message">{errorMessage}</p>

            <input
              type="submit"
              value="Log in"
              className="btn-signup"
              onClick={handleClick}
            />
          </form>
          <Link to="/user/signup">
            <p className="already">Don't have an account? Sign up.</p>
          </Link>
        </section>

        <section className="signup-right">
          <h2>You can use social accounts to log in</h2>
          <div className="social-account">
            <img src={facebook} alt="" />
            <span>Continue with Facebook</span>
          </div>
          <div className="social-account-twitter">
            <img src={twitter} alt="" />
            <span>Continue with Twitter</span>
          </div>
          <div className="social-account-steam">
            <img src={steam} alt="" />
            <span>Continue with Steam</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
