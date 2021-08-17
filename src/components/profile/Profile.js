import { useRef, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const history = useHistory();

  const newNameInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    fetch("https://api-for-missions-and-railways.herokuapp.com/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setUserName(data.name);
      })
      .catch((err) => console.log(err));
  }, [authCtx.token]);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewName = newNameInputRef.current.value;

    fetch("https://api-for-missions-and-railways.herokuapp.com/users", {
      method: "PUT",
      body: JSON.stringify({
        name: enteredNewName,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          history.replace("/book");
        }
        throw response;
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={classes.profile}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">ユーザー名:{userName}</label>
          <input
            type="text"
            id="new-name"
            ref={newNameInputRef}
            placeholder="ユーザー名"
          />
        </div>
        <div className={classes.action}>
          <button>更新</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
