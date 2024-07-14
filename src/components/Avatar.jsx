const Avatar = ({ name }) => {
  const colors = ["red", "green", "blue", "slate", "yellow"];

  return (
    <div
      className={`bg-neutral-400 text-black h-8 w-14 mx-2 rounded-md font-bold flex flex-row justify-center`}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
