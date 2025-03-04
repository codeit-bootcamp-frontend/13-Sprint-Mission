function DropDown({ items, onItemSelect }) {
  const handleClickItem = (e) => {
    const targetItem = e.target.id;
    onItemSelect(targetItem);
  };

  return (
    <ul className="absolute top-14 right-0 w-full min-w-32 rounded-xl border-1 border-gray-200 bg-white">
      {items.map((item) => (
        <li>
          <button
            id={item.id}
            className="m-auto my-2 w-full cursor-pointer"
            onClick={handleClickItem}
          >
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default DropDown;
