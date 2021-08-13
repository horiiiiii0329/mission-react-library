import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const history = useHistory();

  const newNameInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewName = newNameInputRef.current.value;

    // add validation

    fetch("https://api-for-missions-and-railways.herokuapp.com/public/users", {
      method: "PUT",
      body: JSON.stringify({
        name: enteredNewName,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
    }).then((res) => {
      history.replace("/");
    });
  };

  return (
    <section className={classes.profile}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">ユーザー名</label>
          <input
            type="text"
            id="new-name"
            ref={newNameInputRef}
            placeholder="???"
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
