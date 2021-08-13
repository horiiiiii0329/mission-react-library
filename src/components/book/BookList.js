import BookItem from "./BookItem";
import classes from "./BookList.module.css";
import { useEffect, useState } from "react";

// const DUMMY_DATA = [
//   {
//     id: "1",
//     title: "0 no kiseki",
//     url: "wwwwwwwwww",
//     detail: "Onece Upon a time",
//     review: "2",
//     reviewer: "user1",
//     isMine: "true",
//   },
//   {
//     id: "2",
//     title: "1 no kiseki",
//     url: "wwwwwwwwww",
//     detail: "Onece Upon a time",
//     review: "2",
//     reviewer: "user2",
//     isMine: "true",
//   },
//   {
//     id: "3",
//     title: "2 no kiseki",
//     url: "wwwwwwwwww",
//     detail: "Onece Upon a time",
//     review: "2",
//     reviewer: "user3",
//     isMine: "true",
//   },
// ];

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
