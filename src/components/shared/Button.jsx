const Button = ({
  label,
  onClick,
  type = "button",
  disabled = true,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`button ${className}`}
  >
    {label}
  </button>
);

export default Button;
