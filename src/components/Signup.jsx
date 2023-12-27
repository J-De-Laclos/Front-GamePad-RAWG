import { useState } from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import steam from "../assets/images/steam.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    if (!email || !username || !password) {
      setErrorMessage("Please complete all fields.");
    } else if (!email.includes("@")) {
      setErrorMessage("Your email is not valid.");
    } else {
      try {
        const response = await axios.post(
          "https://site--back-gamepad-rawg--f5vs5q45f4mj.code.run/user/signup",
          {
            email: email,
            username: username,
            password: password,
          }
        );
        // const response = await axios.post("http://localhost:3000/user/signup", {
        //   email: email,
        //   username: username,
        //   password: password,
        // });
        if (response.data.token) {
          handleToken(response.data.token);
        }

        alert("Your account has been created");
        navigate("/");
      } catch (error) {
        console.log(error.response.data.message);
        const message = error.response.data.message;
        if (message === "This email already exist") {
          setErrorMessage(message);
        }
      }
    }
  };

  return (
    <div className="background-signup">
      <div className="signup">
        <section className="signup-left">
          <h2>Sign up</h2>
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
              value={username}
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              className="input-signup"
              value={password}
              type="password"
              placeholder="Create a password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            {/* message d'erreur */}
            <p className="error-message">{errorMessage}</p>

            <input
              type="submit"
              value="Sign up"
              className="btn-signup"
              onClick={handleClick}
            />
          </form>
          <Link to="/user/login">
            <p className="already">Already have an account? Log in</p>
          </Link>
        </section>

        <section className="signup-right">
          <h2>You can use social accounts to sign up</h2>
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

export default Signup;
