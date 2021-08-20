import classes from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export default Spinner;
