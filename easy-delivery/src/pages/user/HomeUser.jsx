import "./user.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/img/logo.png";
import selecionar from "../../images/icons/selecionar.png"
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function HomeUser() {

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

      if (!token) {
        toast.error("Sessão expirada. Faça login novamente.");
        navigate("/");
        return;
      }

      const response = await api.get("/pratos", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const pratosDisponiveis = response.data.filter(
        prato => prato.statusDoPrato === "DISPONIVEL"
      );

      setPratos(pratosDisponiveis);

    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar cardápio");
    }
  }

  useEffect(() => {
    carregarPratos();
  }, []);

  return (
    <div className="container-user">

      {/* NAVBAR */}
      <div className="navbar-container-user">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-itens-user">
            <li>
              <button onClick={goToTop} className="link-btn-user">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/meus-pedidos")} className="link-btn-user">
                Meus Pedidos
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/")} className="default-btn-user" >
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* BANNER */}
      <main className="main-user">
        <div className="div-banner-user">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PRATOS */}
        <section className="container-pratos">
          <h1>Cardápio</h1>

          <div className="lista-pratos">

            {pratos.length === 0 && (
              <p>Nenhum prato disponível no momento.</p>
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
                    onClick={() => navigate(`/pedido/${prato.id}`)}
                    className="btn-icon"
                  >
                    <img
                      src={selecionar}
                      alt="Selecionar prato para compra"
                    />
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