import "./editarCategoria.css";
import imgCategoria from "../../images/img/img-categoria.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function EditarCategoria() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [form, setForm] = useState({
    nome: "",
    descricao: ""
  });

  useEffect(() => {
    async function buscarCategoria() {
      try {
        const response = await api.get(`/categorias/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setForm({
          nome: response.data.nome,
          descricao: response.data.descricao,
        });

      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar a categoria");
        navigate("/listar-categoria");
      }
    }

    buscarCategoria();
  }, [id, navigate]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!form.nome || !form.descricao) {
      toast.warn("Preencha todos os campos!");
      return;
    }

    try {
      await api.patch(`/categorias/${id}`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      toast.success("Categoria atualizada com sucesso!");
      navigate("/listar-categoria");

    } catch (error) {
      console.error(error);
      toast.error("Erro ao editar a categoria!");
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