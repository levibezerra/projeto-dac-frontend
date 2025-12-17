import "./prato.css";
import imgPrato from "../../images/img/img-prato.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/easyApi";
import { toast } from "react-toastify";

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

  const [categorias, setCategorias] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function carregarCategorias() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/categorias", {
        headers: { Authorization: token }
      });

      setCategorias(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar categorias");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post("/pratos", form, {
        headers: {
          Authorization: token
        }
      });

      toast.success("Prato criado com sucesso!");
      navigate("/admin");

    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar o prato");
    }
  }

  useEffect(() => {
    carregarCategorias();
  }, []);

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
            <form className="card-prato" onSubmit={handleSubmit}>
              <h1>PRATO</h1>

              <InputField
                className="prato"
                label="Nome"
                type="text"
                placeholder="Nome do Prato"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Descrição"
                type="text"
                placeholder="Descrição do Prato"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Preço"
                type="number"
                step="0.01"
                placeholder="Preço do Prato"
                name="preco"
                value={form.preco}
                onChange={handleChange}
              />

              <InputField
                className="prato"
                label="Imagem do Prato"
                type="text"
                placeholder="URL da imagem"
                name="imagemUrl"
                value={form.imagemUrl}
                onChange={handleChange}
              />

              {/* STATUS */}
              <div className="textfield prato">
                <label>Status do Prato</label>
                <select
                  name="statusDoPrato"
                  value={form.statusDoPrato}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="DISPONIVEL">DISPONÍVEL</option>
                  <option value="INDISPONIVEL">INDISPONÍVEL</option>
                </select>
              </div>

              {/* CATEGORIA */}
              <div className="textfield prato">
                <label>Categoria</label>
                <select
                  name="categoriaId"
                  value={form.categoriaId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </select>
              </div>

              <Button text="Adicionar" className="btn-prato" type="submit" />

              <p className="voltar-link">
                <Link to="/admin">Voltar</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}