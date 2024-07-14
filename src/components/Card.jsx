
const Card = ({children}) => {
  return (
    <div className="shadow-sm shadow-black w-1/3 mx-auto flex flex-col my-4 p-2">
        {children}
    </div>
  )
}

export default Card