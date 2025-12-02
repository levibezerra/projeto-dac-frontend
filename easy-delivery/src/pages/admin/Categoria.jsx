import "./categoria.css";
import imgCategoria from "../../images/img/img-categoria.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Categoria() {

  const navigate = useNavigate();

  function handleCategoria() {
    navigate("/admin");
  }

  return (
    <main>
      <section id="categoria">
        <div className="main-categoria">

          <div className="left-categoria">
            <h1>Adicione uma Categoria</h1>
            <img
              src={imgCategoria}
              className="left-categoria-image"
              alt="Animação da tela de categoria"
            />
          </div>

          <div className="right-categoria">
            <div className="card-categoria">
              <h1>CATEGORIA</h1>

              <div className="textfield">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" placeholder="Nome" />
              </div>

              <div className="textfield">
                <label htmlFor="descricao">Descrição</label>
                <input type="text" name="decricao" placeholder="Descricao" />
              </div>

              <button className="btn-categoria" >Adicionar</button>

              <p className="voltar-link" onClick={handleCategoria}>
                <Link to="/">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}