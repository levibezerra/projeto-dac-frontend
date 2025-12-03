import "./login.css";
import imgLogin from "../../images/img/img-login.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/admin");
  }

  return (
    <main>
      <section id="login">
        <div className="main-login">

          <div className="left-login">
            <h1>Faça Login</h1>
            <img
              src={imgLogin}
              className="left-login-image"
              alt="Animação da tela de login"
            />
          </div>

          <div className="right-login">
            <div className="card-login">
              <h1>LOGIN</h1>

              <div className="textfield-login">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" placeholder="E-mail" />
              </div>

              <div className="textfield-login">
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" placeholder="Senha" />
              </div>

              <button className="btn-login" onClick={handleLogin}>Login</button>

              <p className="voltar-link-login">
                <Link to="/">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}