const Input = ({ value, placeholder, onChange, type = "text" }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className="input"
  />
);

export default Input;
