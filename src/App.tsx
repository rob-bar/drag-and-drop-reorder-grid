import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";

export function App() {
  const [items, setItems] = useState(ITEMS);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <div className="container mx-auto px-24 py-8">
      <SortableList
        onSortEnd={onSortEnd}
        className="grid grid-cols-4 gap-4"
        draggedItemClassName="!cursor-grabbing"
      >
        {items.map((item) => (
          <SortableItem key={item.id}>
            <div className="bg-white p-4 aspect-square grid place-items-center rounded-xl shadow-lg text-3xl font-bold cursor-grab">
              {item.name}
            </div>
          </SortableItem>
        ))}
      </SortableList>
    </div>
  );
}

const ITEMS = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
  { id: 8, name: "item 8" },
  { id: 9, name: "item 9" },
  { id: 10, name: "item 10" },
  { id: 11, name: "item 11" },
  { id: 12, name: "item 12" },
  { id: 13, name: "item 13" },
  { id: 14, name: "item 14" },
  { id: 15, name: "item 15" },
  { id: 16, name: "item 16" },
  { id: 17, name: "item 17" },
  { id: 18, name: "item 18" },
  { id: 19, name: "item 19" },
  { id: 20, name: "item 20" },
];
