import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  const text = props.text;

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.title}</p>
        </blockquote>
        <figcaption>{text.substring(0, 100)}...</figcaption>
      </figure>
      <Link className="btn" to={`/detail/${props.id}`}>
        詳細
      </Link>
    </li>
  );
};

export default BookItem;
