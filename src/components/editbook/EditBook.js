import classes from "./EditBook.module.css";
import { useRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const EditBook = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const { id } = useParams();

  const enterTitleInputRef = useRef();
  const enterUrlInputRef = useRef();
  const enterDetailInputRef = useRef();
  const enterReviewInputRef = useRef();

  const [bookDetail, setBookdetail] = useState(null);

  useEffect(() => {
    fetch(`https://api-for-missions-and-railways.herokuapp.com/books/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setBookdetail(data))
      .catch((err) => console.log(err));
  }, [authCtx.token, id]);

  const updateHandler = (e) => {
    e.preventDefault();

    const enteredTitle = enterTitleInputRef.current.value;
    const enteredUrl = enterUrlInputRef.current.value;
    const enteredDetail = enterDetailInputRef.current.value;
    const enteredReview = enterReviewInputRef.current.value;

    fetch(`https://api-for-missions-and-railways.herokuapp.com/books/${id}`, {
      method: "PUT",
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

  const deleteHandler = () => {
    fetch(`https://api-for-missions-and-railways.herokuapp.com/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    }).then(history.replace("/book"));
  };

  return (
    <>
      <h2 className={classes.title}>書籍情報を変更する</h2>
      {bookDetail && (
        <form className={classes.form} onSubmit={updateHandler}>
          <div className={classes.control}>
            <label htmlFor="title">タイトル</label>
            <input
              type="text"
              ref={enterTitleInputRef}
              defaultValue={bookDetail.title}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="url">リンク</label>
            <input
              type="text"
              ref={enterUrlInputRef}
              defaultValue={bookDetail.url}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="link">詳細</label>
            <input
              type="text"
              ref={enterDetailInputRef}
              defaultValue={bookDetail.detail}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="review">感想 </label>
            <textarea
              type="text"
              ref={enterReviewInputRef}
              defaultValue={bookDetail.review}
            />
          </div>
          <div className={classes.actions}>
            <button>更新</button>
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={deleteHandler}>
              消去
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditBook;
