import "./categoria.css";
import imgCategoria from "../../images/img/img-categoria.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/easyApi";

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

    if (!form.nome || !form.descricao) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Usuário não autenticado!");
        navigate("/login");
        return;
      }

      await api.post(
        "/categorias",
        {
          nome: form.nome,
          descricao: form.descricao
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      toast.success("Categoria criada com sucesso!");

      setForm({
        nome: "",
        descricao: ""
      });

      navigate("/admin");

    } catch (error) {
      console.error(error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao criar categoria!");
      }
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