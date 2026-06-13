const Input = ({value, placeholder, onChange, type = "text"}) => (
  <input type={type} value={value} placeholder={placeholder} onChange={onChange} className="input"/>
);

export default Input;