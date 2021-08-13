import classes from "./SignupForm.module.css";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";

const SignupForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;

    setIsLoading(true);
    fetch("https://api-for-missions-and-railways.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        password: enteredpassword,
      }),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication error";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
        // history.replaceState("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">名前</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        {isLoading && <p>送信中。。。</p>}
        <div className={classes.actions}>
          <button className={classes.toggle}>サインアップ</button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
