import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form>
      <div classname={classes.control}>
        <label htmlFor="name"></label>
      </div>
    </form>
  );
};

export default LoginForm;
