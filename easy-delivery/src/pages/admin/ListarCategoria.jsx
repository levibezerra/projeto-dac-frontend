import "./listarCategoria.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/img/logo.png";
import listarCategoria from "../../images/img/img-listar-categoria.jpg";
import iconEditar from "../../images/icons/editar.png";
import iconDeletar from "../../images/icons/deletar.png";

export default function ListarCategoria() {

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

      {/* BANNER */}
      <main className="main-admin-listar-categorias">
        <div className="div-banner-listar-categorias">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PRATOS */}
        <section className="container-listar-categorias">
          <h1>Categorias</h1>

          <div className="listar-categorias">
            <div className="card-listar-categorias">
              <img src={listarCategoria} alt="Imagem da categoria"/>
              <h2>Lanches</h2>
              <p><b>DESCRIÇÃO: </b>Pratos rápidos como sanduíches, hambúrgueres e salgados</p>
              <div className="acoes-card-listar-categorias">
                <button onClick={() => navigate("/editar-categoria")} className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
                </button>
              </div>
            </div>

            <div className="card-listar-categorias">
              <img src={listarCategoria} alt="Imagem da categoria"/>
              <h2>Carnes</h2>
              <p><b>DESCRIÇÃO: </b>Pratos que têm carne bovina, suína ou de cordeiro</p>
              <div className="acoes-card-listar-categorias">
                <button onClick={() => navigate("/editar-pratos")} className="btn-icon">
                  <img src={iconEditar} alt="Editar" />
                </button>
                <button className="btn-icon deletar">
                  <img src={iconDeletar} alt="Deletar" />
                </button>
              </div>
            </div>

            <div className="card-listar-categorias">
              <img src={listarCategoria} alt="Imagem da categoria"/>
              <h2>Aves</h2>
              <p><b>DESCRIÇÃO: </b>Pratos preparados com frango, peru ou outras aves</p>
              <div className="acoes-card-listar-categorias">
                <button onClick={() => navigate("/editar-pratos")} className="btn-icon">
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