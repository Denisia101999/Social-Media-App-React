import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.scss";
import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const usernameInputRef = useRef();
const passwordInputRef= useRef();

  const toggleAuthState = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let usernameValue= usernameInputRef.current.value;
    let passwordValue = passwordInputRef.current.value;
    usernameValue = "eve.holt@reqres.in";
    passwordValue = "cityslicka";

    setIsLoading(true);
    if(isLogin) {
      //Login request 
      axios
      .post("https://reqres.in/api/login", {
        username: usernameValue,
        password: passwordValue
      })
      .then(function (response) {
        setIsLoading(false);
       navigate("/");
      })
      .catch(function (error) {
        setIsError(true);
        setIsLoading(false);
        usernameInputRef.current.value = "";
        passwordInputRef.current.value = "";
      });

    } else {
      //Register reques
      axios
      .post('https://reqres.in/api/register', {
        username: usernameValue,
        password: passwordValue
      })
      .then(function (response) {
        setIsLoading(false);
       navigate("/");
      })
      .catch(function (error) {
        setIsError(true);
        setIsLoading(false);
        usernameInputRef.current.value = "";
        passwordInputRef.current.value = "";
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h2>{isLogin ? "Login" : "Sign up"}</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter your email </label>
          <input type="email" id="email" ref={usernameInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Enter your password </label>
          <input type="password" id="password"  ref={passwordInputRef} required></input>
        </div>

        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create new account"}</button>
          {isError && <p>Please try again</p>}
          {isLoading && <p>Sending reques...</p>}
          <button className={classes.toggle} onClick={toggleAuthState}>
            {isLogin ? "Create new account" : "Login with an existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
