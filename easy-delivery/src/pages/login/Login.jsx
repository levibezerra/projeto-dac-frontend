import "./login.css";
import imgLogin from "../../images/img/img-login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/easyApi";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    if (!form.email || !form.senha) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/auth", {
        email: form.email,
        senha: form.senha
      });

      const { token } = response.data;

      const decoded = jwtDecode(token);

      localStorage.setItem("token", token);
      localStorage.setItem("role", decoded.role);
      localStorage.setItem("email", decoded.sub);

      toast.success("Login realizado com sucesso!");

      if (decoded.role === "ADMIN") {
        navigate("/admin");
      } else if (decoded.role === "CLIENTE") {
        navigate("/user");
      } else {
        toast.error("Perfil de usuário não reconhecido");
      }

    } catch (error) {
      console.error(error);
      toast.error("E-mail ou senha inválidos!");
    }
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
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="textfield-login">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={form.senha}
                  onChange={handleChange}
                />
              </div>

              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>

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