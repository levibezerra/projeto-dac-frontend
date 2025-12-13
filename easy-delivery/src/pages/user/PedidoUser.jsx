import "./pedidoUser.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/img/logo.png";
import selecionar from "../../images/icons/selecionar.png"

export default function PedidoUser() {

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/pedidoUser");
  }

  function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

  return (
    <div className="container-pedido-user">

      {/* NAVBAR */}
      <div className="navbar-container-pedido-user">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-itens-pedido-user">
            <li>
              <button onClick={goToTop} className="link-btn-pedido-user">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/user")} className="link-btn-pedido-user">
                Voltar
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* BANNER */}
      <main className="main-pedido-user">
        <div className="div-banner-pedido-user">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PRATOS */}
        <section className="container-pratos">
          <h1>Meus Pedidos</h1>

          <div className="lista-pratos">
            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>ENDEREÇO: </b>Rua Teste - 10</p>
              <p><b>STATUS: </b>EM PREPARAÇÃO</p>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pagamento")} className="btn-icon">
                  <img src={selecionar} alt="Realizar pagamento" />
                </button>
              </div>
            </div>

            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>ENDEREÇO: </b>Rua Teste - 10</p>
              <p><b>STATUS: </b>EM PREPARAÇÃO</p>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pagamento")} className="btn-icon">
                  <img src={selecionar} alt="Realizar pagamento" />
                </button>
              </div>
            </div>

            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>ENDEREÇO: </b>Rua Teste - 10</p>
              <p><b>STATUS: </b>EM PREPARAÇÃO</p>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/pagamento")} className="btn-icon">
                  <img src={selecionar} alt="Realizar pagamento" />
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