import "./pedido.css";
import imgPedido from "../../images/img/img-pedido.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function Pedido() {

  const navigate = useNavigate();
  const { id: pratoId } = useParams();

  const [form, setForm] = useState({
    enderecoEntrega: "",
    quantidade: 1
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.enderecoEntrega.trim()) {
      toast.warn("Informe o endereço de entrega.");
      return;
    }

    if (form.quantidade < 1) {
      toast.warn("Quantidade inválida.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token")?.trim();
      const clienteId = Number(localStorage.getItem("clienteId"));

      if (!token || !clienteId) {
        toast.error("Sessão expirada. Faça login novamente.");
        navigate("/");
        return;
      }

      const authHeader = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const pedidoResponse = await api.post(
        "/pedidos",
        {
          enderecoEntrega: form.enderecoEntrega,
          clienteId
        },
        authHeader
      );

      const pedido = pedidoResponse.data;

      await api.post(
        "/itemPedidos",
        {
          quantidade: Number(form.quantidade),
          pratoId: Number(pratoId),
          pedidoId: pedido.id
        },
        authHeader
      );

      toast.success("Pedido realizado com sucesso!");
      
      navigate("/meus-pedidos");

    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
      toast.error("Erro ao realizar o pedido!");
    } finally {
      setLoading(false);
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
            <form className="card-pedido" onSubmit={handleSubmit}>
              <h1>PEDIDO</h1>

              <InputField
                className="pedido"
                label="Endereço de Entrega"
                type="text"
                placeholder="Seu endereço"
                name="enderecoEntrega"
                value={form.enderecoEntrega}
                onChange={handleChange}
                required
              />

              <InputField
                className="pedido"
                label="Quantidade"
                type="number"
                placeholder="Informe a quantidade"
                name="quantidade"
                value={form.quantidade}
                onChange={handleChange}
                required
                min="1"
              />

              <Button
                text="Finalizar Pedido"
                type="submit"
                className="btn-pedido"
              />

              <p className="voltar-link-pedido">
                <Link to="/user">Voltar</Link>
              </p>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}