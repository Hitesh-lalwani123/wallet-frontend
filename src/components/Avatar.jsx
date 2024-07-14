
const Avatar = ({name}) => {
  return (
    <div className="rounded-full bg-green-300 px-2 ml-2 inline-block w-8 h-8 font-medium">
        {name[0].toUpperCase()}
    </div>
  )
}

export default Avatar