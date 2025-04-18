import './button.css'

const Button = ({ label = 'Clique aqui', onClick }) => {
    return <button className='btn' onClick={onClick}>{label}</button>

}

export default Button