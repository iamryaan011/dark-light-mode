//styles
import styles from "../Login/Login.module.scss";

const Login = () => {
  const changeTheme = () => {
    let html = document.querySelector("html");

    html.classList.toggle("dark-mode");
  };

  return (
    <form className={styles.Login}>
      <input type="button" value="Change theme" onClick={changeTheme} />

      <h1>Login Form</h1>

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

      <button type="button">Login</button>

      <div>
        <a href="/sign">Sign Up</a>
        <a href="#forget-pass">Forget password?</a>
      </div>
    </form>
  );
};

export default Login;
