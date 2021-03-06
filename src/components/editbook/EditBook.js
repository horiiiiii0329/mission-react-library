import classes from "./EditBook.module.css";
import { useRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Spinner from "../UI/Spinner";

const EditBook = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const { id } = useParams();

  const enterTitleInputRef = useRef();
  const enterUrlInputRef = useRef();
  const enterDetailInputRef = useRef();
  const enterReviewInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

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
    }).then((response) => {
      if (response.ok) {
        setIsLoading(false);
        history.replace("/book");
      }
    });
  };

  const deleteHandler = () => {
    setIsLoading(true);
    fetch(`https://api-for-missions-and-railways.herokuapp.com/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          history.replace("/book");
        }
        throw response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2 className={classes.title}>?????????????????????</h2>
      {bookDetail ? (
        <form className={classes.form} onSubmit={updateHandler}>
          <div className={classes.control}>
            <label htmlFor="title">????????????</label>
            <input
              type="text"
              ref={enterTitleInputRef}
              defaultValue={bookDetail.title}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="url">?????????</label>
            <input
              type="text"
              ref={enterUrlInputRef}
              defaultValue={bookDetail.url}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="link">??????</label>
            <input
              type="text"
              ref={enterDetailInputRef}
              defaultValue={bookDetail.detail}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="review">?????? </label>
            <textarea
              type="text"
              ref={enterReviewInputRef}
              defaultValue={bookDetail.review}
            />
          </div>
          {isLoading && <Spinner />}
          <div className={classes.actions}>
            <button>??????</button>
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={deleteHandler}>
              ??????
            </button>
          </div>
        </form>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditBook;
