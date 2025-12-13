import "./pedidoAdmin.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/img/logo.png";
import selecionar from "../../images/icons/selecionar.png"

export default function PedidoAdmin() {

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/pedidoAdmin");
  }

  function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

  return (
    <div className="container-pedido-admin">

      {/* NAVBAR */}
      <div className="navbar-container-pedido-admin">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-itens-pedido-admin">
            <li>
              <button onClick={goToTop} className="link-btn-pedido-admin">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/admin")} className="link-btn-pedido-admin">
                Voltar
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* BANNER */}
      <main className="main-pedido-admin">
        <div className="div-banner-pedido-admin">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PRATOS */}
        <section className="container-pratos">
          <h1>Pedidos Recebidos</h1>

          <div className="lista-pratos">
            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>ENDEREÇO: </b>Rua Teste - 10</p>
              <select id="status" name="status">
                <option value="" disabled selected>STATUS</option>
                <option value="Disponível">EM PREPARAÇÃO</option>
                <option value="Emprestado">PENDENTE</option>
                <option value="Lido">FINALIZADO</option>
                <option value="Novo">CANCELADO</option>
              </select>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/")} className="btn-icon">
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
              <select id="status" name="status">
                <option value="" disabled selected>STATUS</option>
                <option value="Disponível">EM PREPARAÇÃO</option>
                <option value="Emprestado">PENDENTE</option>
                <option value="Lido">FINALIZADO</option>
                <option value="Novo">CANCELADO</option>
              </select>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/")} className="btn-icon">
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
              <select id="status" name="status">
                <option value="" disabled selected>STATUS</option>
                <option value="Disponível">EM PREPARAÇÃO</option>
                <option value="Emprestado">PENDENTE</option>
                <option value="Lido">FINALIZADO</option>
                <option value="Novo">CANCELADO</option>
              </select>
              <p><b>QUANTIDADE: </b>2</p>
              <p><b>TOTAL: </b>51.80</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/")} className="btn-icon">
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