import "./editarPrato.css";
import imgPrato from "../../images/img/img-prato.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function EditarPrato() {

  const navigate = useNavigate();
  const { id } = useParams();

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
      toast.error("Erro ao carregar categorias");
    }
  }

  async function carregarPrato() {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(`/pratos/${id}`, {
        headers: { Authorization: token }
      });

      setForm({
        nome: response.data.nome,
        descricao: response.data.descricao,
        preco: response.data.preco,
        imagemUrl: response.data.imagemUrl,
        statusDoPrato: response.data.statusDoPrato,
        categoriaId: response.data.categoriaId
      });

    } catch (error) {
      toast.error("Erro ao carregar prato");
      navigate("/admin");
    }
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await api.patch(`/pratos/${id}`, form, {
      headers: { Authorization: token }
    });

    toast.success("Prato atualizado com sucesso!");
    navigate("/admin");

  } catch (error) {
    console.error(error);
    toast.error("Erro ao atualizar o prato");
  }
}

  useEffect(() => {
    carregarCategorias();
    carregarPrato();
  }, []);

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
            <form className="card-editar-prato" onSubmit={handleSubmit}>
              <h1>EDITAR</h1>

              <InputField
                className="textfield editar-prato"
                label="Nome"
                type="text"
                placeholder="Nome do Prato"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />

              <InputField
                className="textfield editar-prato"
                label="Descrição"
                type="text"
                placeholder="Descrição do Prato"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
              />

              <InputField
                className="textfield editar-prato"
                label="Preço"
                type="number"
                step="0.01"
                placeholder="Preço do Prato"
                name="preco"
                value={form.preco}
                onChange={handleChange}
              />

              <InputField
                className="textfield editar-prato"
                label="Imagem do Prato"
                type="text"
                placeholder="URL da imagem"
                name="imagemUrl"
                value={form.imagemUrl}
                onChange={handleChange}
              />

              {/* STATUS */}
              <div className="textfield editar-prato">
                <label>Status</label>
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
              <div className="textfield editar-prato">
                <label>Categoria</label>
                <select
                  name="categoriaId"
                  value={form.categoriaId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  {categorias.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.nome}
                    </option>
                  ))}
                </select>
              </div>

              <Button text="Salvar" type="submit" className="btn-editar-prato" />

              <p className="voltar-link-editar">
                <Link to="/admin">Voltar</Link>
              </p>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}