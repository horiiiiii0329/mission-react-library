import classes from "./AddBookCard.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AddBookCard = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.replace("/new");
  };

  return (
    <li className={classes.item} onClick={clickHandler}>
      <figure>
        <blockquote>
          <p>書籍を追加する</p>
        </blockquote>
      </figure>
      <Link className="btn" to="/new">
        ＋
      </Link>
    </li>
  );
};

export default AddBookCard;
