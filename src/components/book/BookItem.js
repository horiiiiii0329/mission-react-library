import { useEffect, useState } from "react";

const BookItem = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(
      "https://app.swaggerhub.com/apis-docs/Takumaron/TechTrain-RailwayMission/1.0.0#/book/get_public_books",
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  });

  return <h1>1</h1>;
};

export default BookItem;
