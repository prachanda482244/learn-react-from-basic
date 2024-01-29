const Button = ({ name, onClick }) => {
    return (
        <button className="bg-black p-2 if text-white rounded-lg" onClick={onClick}>
            {name}
        </button>
    )
}
export default Button
