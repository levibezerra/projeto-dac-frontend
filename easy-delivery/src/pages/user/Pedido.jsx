import "./pedido.css";
import imgPedido from "../../images/img/img-pedido.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function Pedido() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    endereco: "",
    quantidade: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/pedidos", form);

      alert("Pedido realizado com sucesso!");
      console.log(response.data);

      navigate("/user");
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar o pedido!");
    }
  }

  return (
    <main>
      <section id="pedido">
        <div className="main-pedido">

          <div className="left-pedido">
            <h1>Realize seu Pedido!</h1>
            <img
              src={imgPedido}
              className="left-pedido-image"
              alt="Animação da tela de pedido"
            />
          </div>

          <div className="right-pedido">
            <div className="card-pedido">
              <h1>PEDIDO</h1>

              <InputField
                className="pedido"
                label="Endereço"
                type="text"
                placeholder="Seu endereço"
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
              />

              <InputField
                className="pedido"
                label="Quantidade"
                type="text"
                placeholder="Informe a quantidade"
                name="quantidade"
                value={form.quantidade}
                onChange={handleChange}
              />

              <Button text="Próximo" className="btn-pedido" onClick={handleSubmit} />

              <p className="voltar-link-pedido">
                <Link to="/user">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}