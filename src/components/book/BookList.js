import BookItem from "./BookItem";
import classes from "./BookList.module.css";
import { useEffect, useState, useContext } from "react";
import AddBookCard from "../addbook/AddBookCard";
import AuthContext from "../../store/auth-context";

const BookList = (props) => {
  const [book, setBook] = useState("");
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("https://api-for-missions-and-railways.herokuapp.com/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((err) => alert(err));
  });

  return (
    <ul className={classes.list}>
      <AddBookCard />
      {book &&
        book.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            url={book.url}
            title={book.title}
            text={book.detail}
            isMine={book.isMine}
          />
        ))}
    </ul>
  );
};

export default BookList;
