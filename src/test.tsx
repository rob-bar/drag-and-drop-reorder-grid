import { Reorder } from "framer-motion";
import React, { useState } from "react";

export function List(): JSX.Element {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group drag values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
