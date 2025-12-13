import "./admin.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/img/logo.png";
import iconEditar from "../../images/icons/editar.png";
import iconDeletar from "../../images/icons/deletar.png";

export default function HomeAdmin() {

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/admin");
  }

  function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

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
              <button onClick={() => navigate("/user")} className="link-btn">
                User
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
            <div className="card">
              <img src="https://speedy.uenicdn.com/99def3c9-86a1-4c19-9317-d5376c18c298/c512_a/image/upload/v1582164126/business/99def3c9-86a1-4c19-9317-d5376c18c298/hamburguer-shutterstockjpg.jpg" alt="Nome do prato"/>
              <h2>Hambúrguer Clássico</h2>
              <p><b>DESCRIÇÃO: </b>Hambúrguer artesanal com queijo</p>
              <p><b>CATEGORIA: </b>Lanches</p>
              <p><b>STATUS: </b>DISPONÍVEL</p>
              <p><b>PREÇO: </b>25.90</p>
              <div className="acoes-card">
                <button onClick={() => navigate("/editar-pratos")} className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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
                <button className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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
                <button className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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
                <button className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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
                <button className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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
                <button className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
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