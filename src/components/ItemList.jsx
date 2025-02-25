import ic_heart from "@/assets/ic_heart.svg";

function Item({ item }) {
  return (
    <li
      key={item.id}
      className="flex shrink-1 grow-1 basis-full flex-col items-start sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
    >
      <img
        className="mb-2.5 aspect-square w-full rounded-2xl object-cover"
        src={item.images[0]}
        alt=""
      />
      <div className="flex flex-col items-start gap-1.5">
        <div className="text-sm text-gray-800">{item.name}</div>
        <div className="font-bold text-gray-800">{item.price}</div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <img src={ic_heart} alt="" />
          <div>{item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
}

function ItemList({ items, grid }) {
  return (
    <ul className={GRID[grid]}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

const GRID = {
  base1: "grid grid-cols-1 grid-rows-1 gap-2.5",
  base2: "grid grid-cols-2 grid-rows-2 gap-2.5",
  md1: "grid grid-cols-2 grid-rows-1 gap-2.5",
  md2: "grid grid-cols-3 grid-rows-2 gap-2.5",
  xl1: "grid grid-cols-4 grid-rows-1 gap-6",
  xl2: "grid grid-cols-4 grid-rows-2 gap-6",
};

export default ItemList;
