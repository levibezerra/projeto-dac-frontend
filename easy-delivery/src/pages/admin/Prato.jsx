import "./prato.css";
import imgPrato from "../../images/img/img-prato.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function Prato() {

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

      alert("Prato criado com sucesso!");
      console.log(response.data);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar um prato!");
    }
  }

  return (
    <main>
      <section id="prato">
        <div className="main-prato">

          <div className="left-prato">
            <h1>Adicione um Prato</h1>
            <img
              src={imgPrato}
              className="left-prato-image"
              alt="Animação da tela de criação de um prato"
            />
          </div>

          <div className="right-prato">
            <div className="card-prato">
              <h1>PRATO</h1>

              <InputField
                className="prato"
                label="Nome"
                type="text"
                placeholder="Nome do prato"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Descrição"
                type="text"
                placeholder="Descrição do prato"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Preço"
                type="text"
                placeholder="Preço do prato"
                name="preco"
                value={form.preco}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Imagem do Prato"
                type="text"
                placeholder="Imagem do prato"
                name="imagemUrl"
                value={form.imagemUrl}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Status do Prato"
                type="text"
                placeholder="Status do prato"
                name="statusDoPrato"
                value={form.statusDoPrato}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Categoria"
                type="text"
                placeholder="Categoria do prato"
                name="categoriaId"
                value={form.categoriaId}
                onChange={handleChange}
              />

              <Button text="Adicionar" className="btn-prato" onClick={handleSubmit} />

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