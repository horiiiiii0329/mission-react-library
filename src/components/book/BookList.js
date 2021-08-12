import BookItem from "./BookItem";
import classes from "./BookList.module.css";
// import { useEffect, useState } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    title: "0 no kiseki",
    url: "wwwwwwwwww",
    detail: "Onece Upon a time",
    review: "2",
    reviewer: "user1",
    isMine: "true",
  },
  {
    id: "2",
    title: "1 no kiseki",
    url: "wwwwwwwwww",
    detail: "Onece Upon a time",
    review: "2",
    reviewer: "user2",
    isMine: "true",
  },
  {
    id: "3",
    title: "2 no kiseki",
    url: "wwwwwwwwww",
    detail: "Onece Upon a time",
    review: "2",
    reviewer: "user3",
    isMine: "true",
  },
];

const bookList = (props) => {
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
    <ul className={classes.list}>
      {DUMMY_DATA.map((book) => (
        <BookItem key={book.id} title={book.title} text={book.detail} />
      ))}
    </ul>
  );
};

export default bookList;
