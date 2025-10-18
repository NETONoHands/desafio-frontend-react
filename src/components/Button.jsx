export function Button({ texto = "Comprar", handleClick }) {
  return (
    <button 
      className="product__button" 
      type="button"
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}

export default Button;