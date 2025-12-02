import "./cadastro.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import imgCadastro from "../../images/img/img-cadastro.svg";

export default function Cadastro() {
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
      const response = await api.post("/usuarios", form);

      alert("Cadastro realizado com sucesso!");
      console.log(response.data);
    } catch (error) {
      alert("Erro no cadastro!");
    }
  }

  return (
    <main>
      <section id="cadastro">
        <div className="main-cadastro">

          <div className="left-cadastro">
            <h1>Realize seu cadastro</h1>
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