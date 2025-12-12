import "./user.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/img/logo.png";
import selecionar from "../../images/icons/selecionar.png"

export default function HomeUser() {

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/user");
  }

  function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

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
              <button onClick={() => navigate("")} className="link-btn-user">
                Visualizar Pedidos
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
            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>STATUS: </b>DISPONÍVEL</p>
              <p><b>PREÇO: </b>25.90</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pedido")} className="btn-icon">
                  <img src={selecionar} alt="Selecionar prato para compra" />
                </button>
              </div>
            </div>

            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>STATUS: </b>DISPONÍVEL</p>
              <p><b>PREÇO: </b>25.90</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pedido")} className="btn-icon">
                  <img src={selecionar} alt="Selecionar prato para compra" />
                </button>
              </div>
            </div>

            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>STATUS: </b>DISPONÍVEL</p>
              <p><b>PREÇO: </b>25.90</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pedido")} className="btn-icon">
                  <img src={selecionar} alt="Selecionar prato para compra" />
                </button>
              </div>
            </div>
            
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