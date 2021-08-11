import classes from "./SignupForm.module.css";
import { useState, useRef } from "react";

const SignupForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;

    setIsLoading(true);
    fetch(
      "https://app.swaggerhub.com/apis-docs/Takumaron/TechTrain-RailwayMission/1.0.0#/user/post_users",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredpassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = data.ErrorMessageJP;
          setErrorMessage(errorMessage);
          throw new Error(errorMessage);
        });
      }
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
        {isLoading && <p>{errorMessage}</p>}
        <div className={classes.actions}>
          <button className={classes.toggle}>サインアップ</button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
