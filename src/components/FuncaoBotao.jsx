function Button() {
    const handleClick = () => {
        alert("Produto adicionado ao carrinho!");
    }
    
    return (
        <button onClick={handleClick} style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease'
        }}>Comprar</button>
    )
}

export default Button;