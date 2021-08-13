import classes from "./BookDetail.module.css";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();

  //   async function getSingleQuote(quoteId) {
  //     const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || "Could not fetch quote.");
  //     }

  //     const loadedQuote = {
  //       id: quoteId,
  //       ...data,
  //     };

  //     return loadedQuote;
  //   }

  return (
    <div className={classes.detail}>
      <div className={classes.title}>
        <h3>タイトル</h3>
        <p>LOLLOLOLOL</p>
        <a>wwwwwwwwwwwwwwwwwwwwwwww</a>
        <hr></hr>
      </div>
      <div>
        <h3>詳細</h3>
        <p>
          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </p>
      </div>
      <div className={classes.comments}>
        <h3>レビュー</h3>
        <span>ユーザー名</span>
        <p>めっちゃよかったです。</p>
      </div>
    </div>
  );
};

export default BookDetail;
