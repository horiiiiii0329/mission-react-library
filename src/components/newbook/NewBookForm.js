import { useRef, useContext } from "react";
// import NewBookPage from "../../pages/NewBookPage";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./NewBookForm.module.css";

const NewBookForm = () => {
  const history = useHistory();

  const enterTitleInputRef = useRef();
  const enterUrlInputRef = useRef();
  const enterDetailInputRef = useRef();
  const enterReviewInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = enterTitleInputRef.current.value;
    const enteredUrl = enterUrlInputRef.current.value;
    const enteredDetail = enterDetailInputRef.current.value;
    const enteredReview = enterReviewInputRef.current.value;

    fetch("https://api-for-missions-and-railways.herokuapp.com/books", {
      method: "POST",
      body: JSON.stringify({
        title: enteredTitle,
        url: enteredUrl,
        detail: enteredDetail,
        review: enteredReview,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
    }).then(history.replace("/book"));
  };

  return (
    <>
      <h2 className={classes.title}>書籍登録</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">タイトル</label>
          <input type="text" ref={enterTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="url">リンク</label>
          <input type="text" ref={enterUrlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="link">詳細</label>
          <textarea type="text" ref={enterDetailInputRef} rows="5" />
        </div>
        <div className={classes.control}>
          <label htmlFor="review">感想 </label>
          <input type="text" ref={enterReviewInputRef} />
        </div>
        <div className={classes.actions}>
          <button>登録</button>
        </div>
      </form>
    </>
  );
};

export default NewBookForm;
