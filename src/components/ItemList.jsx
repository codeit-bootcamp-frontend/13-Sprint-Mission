import ic_heart from "@/assets/ic_heart.svg";
import img_item_default from "@/assets/img_item_default.png";

function Item({ item }) {
  return (
    <li
      key={item.id}
      className="flex shrink-1 grow-1 basis-full flex-col items-start sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
    >
      <img
        className="mb-2.5 aspect-square w-full rounded-2xl object-cover"
        src={item.images[0] || img_item_default}
        alt=""
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = img_item_default;
        }}
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

function ItemList({ items, itemsLayout }) {
  return (
    <ul className={itemsLayout}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
