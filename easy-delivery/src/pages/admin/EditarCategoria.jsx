import "./editarCategoria.css";
import imgCategoria from "../../images/img/img-categoria.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function EditarCategoria() {

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

      alert("Categoria editada com sucesso!");
      console.log(response.data);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Erro ao editar uma categoria!");
    }
  }

  return (
    <main>
      <section id="editar-categoria">
        <div className="main-editar-categoria">

          <div className="left-editar-categoria">
            <h1>Edite uma Categoria</h1>
            <img
              src={imgCategoria}
              className="left-editar-categoria-image"
              alt="Animação da tela de categoria"
            />
          </div>

          <div className="right-editar-categoria">
            <div className="card-editar-categoria">
              <h1>CATEGORIA</h1>

              <InputField
                className="editar-categoria"
                label="Nome"
                type="text"
                placeholder="Nome da categoria"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="editar-categoria"
                label="Descrição"
                type="text"
                placeholder="Descrição da categoria"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <Button text="Salvar" className="btn-editar-categoria" onClick={handleSubmit} />

              <p className="voltar-link-editar-categoria">
                <Link to="/listar-categoria">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}