import classes from "./LoginForm.module.css";
import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

const LoginForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;

    setIsLoading(true);

    fetch("https://api-for-missions-and-railways.herokuapp.com/signin", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = data.ErrorMessageJP;

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
        history.replace("/book");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        {isLoading && <p>送信中。。。</p>}
        {!isLoading && error && <p>{error}</p>}
        <div className={classes.actions}>
          <button className={classes.toggle}>ログイン</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
