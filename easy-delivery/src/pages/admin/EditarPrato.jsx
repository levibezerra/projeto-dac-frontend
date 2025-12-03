import "./editarPrato.css";
import imgPrato from "../../images/img/img-prato.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function EditarPrato() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagemUrl: "",
    statusDoPrato: "",
    categoriaId: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/pratos", form);

      alert("Prato editado com sucesso!");
      console.log(response.data);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Erro ao editar um prato!");
    }
  }

  return (
    <main>
      <section id="editar-prato">
        <div className="main-editar-prato">

          <div className="left-editar-prato">
            <h1>Editar Prato</h1>
            <img
              src={imgPrato}
              className="left-editar-prato-image"
              alt="Animação da tela de edição de um prato"
            />
          </div>

          <div className="right-editar-prato">
            <div className="card-editar-prato">
              <h1>EDITAR</h1>

              <InputField
                className="editar-prato"
                label="Nome"
                type="text"
                placeholder="Nome do prato"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="editar-prato"
                label="Descrição"
                type="text"
                placeholder="Descrição do prato"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <InputField
                className="editar-prato"
                label="Preço"
                type="text"
                placeholder="Preço do prato"
                name="preco"
                value={form.preco}
                onChange={handleChange}
              />

              <InputField
                className="editar-prato"
                label="Imagem do Prato"
                type="text"
                placeholder="Imagem do prato"
                name="imagemUrl"
                value={form.imagemUrl}
                onChange={handleChange}
              />

              <InputField
                className="editar-prato"
                label="Status do Prato"
                type="text"
                placeholder="Status do prato"
                name="statusDoPrato"
                value={form.statusDoPrato}
                onChange={handleChange}
              />

              <InputField
                className="editar-prato"
                label="Categoria"
                type="text"
                placeholder="Categoria do prato"
                name="categoriaId"
                value={form.categoriaId}
                onChange={handleChange}
              />

              <Button text="Salvar" className="btn-editar-prato" onClick={handleSubmit} />

              <p className="voltar-link-editar">
                <Link to="/admin">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}