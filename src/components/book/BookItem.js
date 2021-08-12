import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.title}</p>
        </blockquote>
        <figcaption>{props.text}</figcaption>
      </figure>
      <Link className="btn" to="/">
        詳細
      </Link>
    </li>
  );
};

export default BookItem;
