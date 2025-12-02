import "./categoria.css";
import imgCategoria from "../../images/img/img-categoria.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function Categoria() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/categorias", form);

      alert("Categoria criada com sucesso!");
      console.log(response.data);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar categoria!");
    }
  }

  return (
    <main>
      <section id="categoria">
        <div className="main-categoria">

          <div className="left-categoria">
            <h1>Adicione uma Categoria</h1>
            <img
              src={imgCategoria}
              className="left-categoria-image"
              alt="Animação da tela de categoria"
            />
          </div>

          <div className="right-categoria">
            <div className="card-categoria">
              <h1>CATEGORIA</h1>

              <InputField
                className="categoria"
                label="Nome"
                type="text"
                placeholder="Nome da categoria"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="categoria"
                label="Descrição"
                type="text"
                placeholder="Descrição da categoria"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <Button text="Adicionar" className="btn-categoria" onClick={handleSubmit} />

              <p className="voltar-link">
                <Link to="/admin">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}