
export function TextInput({ value, onChange, placeholder }) {

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return <section className="product__observation">
            <label htmlFor="observation">Observações sobre o pedido</label>
            <textarea 
            id="observation" 
            value={value}
            onChange={handleChange}
            placeholder="Digite suas observações. Ex.: Enviar açúcar"
            rows={3}  />
          </section>
}

export default TextInput;