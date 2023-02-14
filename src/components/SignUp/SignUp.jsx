//styles
import styles from "../SignUp/SignUp.module.scss";

const SignUp = () => {
  const changeTheme = () => {
    let html = document.querySelector("html");

    html.classList.toggle("dark-mode");
  };
  return (
    <form className={styles.SignUp}>
      <input type="button" value="Change Theme" onClick={changeTheme}/>

      <h1>Sign Up Form</h1>

      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username or Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirm password"
      />

      <button type="button">Sign Up</button>

      <div>
        <a href="/">Login</a>
        <a href="#">Forget password?</a>
      </div>
    </form>
  );
};

export default SignUp;
