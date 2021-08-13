import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const [userName, setUserName] = useState(null);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    fetch("https://api-for-missions-and-railways.herokuapp.com/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.name);
      });
  });

  return (
    <header className={classes.header}>
      <Link to={!isLoggedIn ? "/" : "/book"}>
        <div className={classes.logo}>React Library</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && <li>{userName}　さん</li>}
          {!isLoggedIn && (
            <li>
              <Link to="/login">ログイン</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/signup">登録</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">プロファイル</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
