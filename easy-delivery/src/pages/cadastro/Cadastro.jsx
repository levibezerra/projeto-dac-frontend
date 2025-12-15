import "./cadastro.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import imgCadastro from "../../images/img/img-cadastro.svg";
import api from "../../services/easyApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      await api.post("/usuarios", {
        email: form.email,
        senha: form.senha
      });

      const authResponse = await api.post("/auth", {
        email: form.email,
        senha: form.senha
      });

      const token = authResponse.data.token;

      await api.post(
        "/clientes",
        {
          nome: form.nome,
          cpf: form.cpf
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Cadastro realizado com sucesso!");

      setForm({
        nome: "",
        cpf: "",
        email: "",
        senha: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error(error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao realizar o cadastro!");
      }
    }
  }

  return (
    <main>
      <section id="cadastro">
        <div className="main-cadastro">

          <div className="left-cadastro">
            <h1>Realize seu Cadastro</h1>
            <img
              src={imgCadastro}
              className="left-cadastro-image"
              alt="Imagem cadastro"
            />
          </div>

          <div className="right-cadastro">
            <div className="card-cadastro">
              <h1>CADASTRE-SE</h1>

              <InputField
                className="cadastro"
                label="Nome"
                type="text"
                placeholder="Nome completo"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="cadastro"
                label="CPF"
                type="text"
                placeholder="000.000.000-00"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
              />

              <InputField
                className="cadastro"
                label="E-mail"
                type="email"
                placeholder="E-mail"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <InputField
                className="cadastro"
                label="Senha"
                type="password"
                placeholder="Senha"
                name="senha"
                value={form.senha}
                onChange={handleChange}
              />

              <Button text="Cadastre-se" className="btn-cadastro" onClick={handleSubmit} />

              <p className="login-link">
                Já tem uma conta?
                <a href="/login"> Fazer login</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}