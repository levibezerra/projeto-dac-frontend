import "./pagamento.css";
import imgPagamento from "../../images/img/img-pagamento.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

export default function Pagamento() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    valor: "",
    tipoDePagamento: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/pagamentos", form);

      alert("Pagamento realizado com sucesso!");
      console.log(response.data);

      navigate("/user");
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar o pagamento!");
    }
  }

  return (
    <main>
      <section id="pagamento">
        <div className="main-pagamento">

          <div className="left-pagamento">
            <h1>Realize o Pagamento!</h1>
            <img
              src={imgPagamento}
              className="left-pagamento-image"
              alt="Animação da tela de pagamento"
            />
          </div>

          <div className="right-pagamento">
            <div className="card-pagamento">
              <h1>PAGAMENTO</h1>

              <InputField
                className="pagamento"
                label="Valor"
                type="text"
                placeholder="Informe o valor total"
                name="valor"
                value={form.valor}
                onChange={handleChange}
              />

              <InputField
                className="pagamento"
                label="Tipo de Pagamento"
                type="text"
                placeholder="CARTAO / PIX"
                name="tipoDePagamento"
                value={form.tipoDePagamento}
                onChange={handleChange}
              />

              <Button text="Finalizar" className="btn-pagamento" onClick={handleSubmit} />

              <p className="voltar-link-pagamento">
                <Link to="/meus-pedidos">Voltar</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}