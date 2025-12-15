import "./listarCategoria.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/img/logo.png";
import listarCategoria from "../../images/img/img-listar-categoria.jpg";
import iconEditar from "../../images/icons/editar.png";
import iconDeletar from "../../images/icons/deletar.png";
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function ListarCategoria() {

  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function carregarCategorias() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/categorias", {
        headers: {
          Authorization: token
        }
      });

      setCategorias(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar categorias");
    }
  }

  useEffect(() => {
    carregarCategorias();
  }, []);

  return (
    <div className="container-listar-categorias">

      {/* NAVBAR */}
      <div className="navbar-container-listar-categorias">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-itens-listar-categorias">
            <li>
              <button onClick={goToTop} className="link-btn-listar-categorias">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/admin")} className="default-btn-listar-categorias" >
                Voltar
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main-admin-listar-categorias">
        <div className="div-banner-listar-categorias">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* LISTAGEM */}
        <section className="container-listar-categorias">
          <h1>Categorias</h1>

          <div className="listar-categorias">

            {categorias.length === 0 && (
              <p>Nenhuma categoria cadastrada.</p>
            )}

            {categorias.map((categoria) => (
              <div className="card-listar-categorias" key={categoria.id}>
                <img
                  src={listarCategoria}
                  alt="Imagem da categoria"
                />

                <h2>{categoria.nome}</h2>

                <p>
                  <b>DESCRIÇÃO: </b>{categoria.descricao}
                </p>

                <div className="acoes-card-listar-categorias">
                  <button
                    onClick={() => navigate(`/editar-categoria/${categoria.id}`)}
                    className="btn-icon"
                  >
                    <img src={iconEditar} alt="Editar" />
                  </button>

                  <button
                    className="btn-icon deletar"
                    onClick={() => toast.info("Implementar exclusão")}
                  >
                    <img src={iconDeletar} alt="Deletar" />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer>
        <p>Projeto DAC <br/>
           EasyDelivery &copy;2025</p>
      </footer>
    </div>
  );
}