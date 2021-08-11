import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Library</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">ログイン</Link>
          </li>
          <li>
            <Link to="/signup">登録</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
