
const InputBox = ({label,placeholder,onChange}) => {
  return (
    <div className="w-full flex flex-col">
        <div>{label}</div>
        <input type="text" onChange = {onChange} placeholder={placeholder} className="border-2 border-slate-500 rounded-sm p-1 m-1"/>
    </div>
  )
}
export default InputBox