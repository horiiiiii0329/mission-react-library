import classes from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <section className={classes.auth}>
      <form>
        <div classname={classes.control}>
          <label htmlFor="name">名前</label>
          <input type="text" id="name" />
        </div>
        <div classname={classes.control}>
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email" />
        </div>
        <div classname={classes.control}>
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <button type="button" className={classes.toggle}>
            サインアップ
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
