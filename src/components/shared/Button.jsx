
const Button = ({label, onClick, type = "button", disabled = true}) => (
  <button type={type} onClick={onClick} disabled={disabled} className="button">
    {label}
  </button>
);

export default Button;
