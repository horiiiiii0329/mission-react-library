import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://app.swaggerhub.com/apis-docs/Takumaron/TechTrain-RailwayMission/1.0.0#/book/get_public_books",
  //     {
  //       method: "GET",
  //       headers: {},
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBook(data);
  //     });
  // });

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
