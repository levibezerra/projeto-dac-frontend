export default function InputField({ label, type, name, value, onChange, placeholder }) {
  return (
    <div className="textfield">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}