export default function Button({ text, onClick }) {
  return (
    <button className="btn-cadastro" onClick={onClick}>
      {text}
    </button>
  );
}