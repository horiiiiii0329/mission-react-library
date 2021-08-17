import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation onUserName={props.userName} />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
