
const Button = ({label,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className="text-sm border-slate-500 p-1 mx-auto my-2 w-full bg-gray-950 hover:bg-gray-900 text-white rounded-md hover:text-lg transition-all duration-300 h-10">
            {label}
        </button>
    </div>
  )
}

export default Button