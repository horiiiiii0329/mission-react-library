import BookItem from "./BookItem";
import classes from "./BookList.module.css";
import { useEffect, useState } from "react";

const BookList = (props) => {
  const [book, setBook] = useState("");

  useEffect(() => {
    fetch("https://api-for-missions-and-railways.herokuapp.com/public/books", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  return (
    <ul className={classes.list}>
      {book &&
        book.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            url={book.url}
            title={book.title}
            text={book.detail}
          />
        ))}
    </ul>
  );
};

export default BookList;
