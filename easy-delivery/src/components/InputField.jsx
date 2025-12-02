export default function InputField({ label, type, name, value, onChange, placeholder, className }) {
  return (
    <div className={`textfield ${className}`}>
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