import classes from "./BookDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

const BookDetail = () => {
  const authCtx = useContext(AuthContext);
  const { id } = useParams();
  const [bookDetail, setBookdetail] = useState(null);

  useEffect(() => {
    fetch(`https://api-for-missions-and-railways.herokuapp.com/books/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBookdetail(data))
      .catch((err) => alert(err));
  });

  return (
    <>
      {bookDetail && (
        <div className={classes.detail}>
          <div className={classes.title}>
            <h3>タイトル</h3>
            <p>{bookDetail.title}</p>
            <a href={bookDetail.url}>{bookDetail.url.substring(0, 40)}...</a>
            <hr></hr>
          </div>
          <div>
            <h3>詳細</h3>
            <p>{bookDetail.detail}</p>
          </div>
          <div className={classes.comments}>
            <h3>レビュー</h3>
            <span>{bookDetail.reviewer}</span>
            <p>{bookDetail.review}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetail;
