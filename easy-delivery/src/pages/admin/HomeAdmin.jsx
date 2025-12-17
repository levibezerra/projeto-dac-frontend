import "./admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/img/logo.png";
import iconEditar from "../../images/icons/editar.png";
import iconDeletar from "../../images/icons/deletar.png";
import api from "../../services/easyApi";
import { toast } from "react-toastify";


export default function HomeAdmin() {

  const navigate = useNavigate();
  const [pratos, setPratos] = useState([]);

  function goToTop() {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }

  async function carregarPratos() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/pratos", {
        headers: {
          Authorization: token
        }
      });

      setPratos(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar pratos");
    }
  }

  async function deletarPrato(id) {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/pratos/${id}`, {
        headers: { Authorization: token }
      });

      toast.success("Prato excluído com sucesso!");
      carregarPratos();

    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir prato");
    }
  }

  useEffect(() => {
    carregarPratos();
  }, []);

  return (
    <div className="container">

      {/* NAVBAR */}
      <div className="navbar-container">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-items">
            <li>
              <button onClick={goToTop} className="link-btn">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/categorias")} className="link-btn">
                Adicionar Categoria
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/pratos")} className="link-btn">
                Criar Prato
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/listar-categoria")} className="link-btn">
                Listar Categorias
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/pedidos-admin")} className="link-btn">
                Pedidos
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/")} className="default-btn" >
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* BANNER */}
      <main className="main-admin">
        <div className="div-banner">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PRATOS */}
        <section className="container-pratos">
          <h1>Cardápio</h1>

          <div className="lista-pratos">

            {pratos.length === 0 && (
              <p>Nenhum prato cadastrado.</p>
            )}

            {pratos.map((prato) => (
              <div className="card" key={prato.id}>
                <img
                  src={prato.imagemUrl}
                  alt={prato.nome}
                />

                <h2>{prato.nome}</h2>
                <p><b>DESCRIÇÃO:</b> {prato.descricao}</p>
                <p><b>CATEGORIA:</b> {prato.categoriaNome}</p>
                <p><b>STATUS:</b> {prato.statusDoPrato}</p>
                <p><b>PREÇO:</b> R$ {Number(prato.preco).toFixed(2)}</p>

                <div className="acoes-card">
                  <button
                    onClick={() => navigate(`/editar-prato/${prato.id}`)}
                    className="btn-icon"
                  >
                    <img src={iconEditar} alt="Editar" />
                  </button>

                  <button
                    className="btn-icon deletar"
                    onClick={() => deletarPrato(prato.id)}
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