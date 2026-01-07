import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import DndColumn from "./DndColumn";

const DndController = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, title: <span className="bg-red-900 w-40  h-10">dddd</span> },
    { id: 2, title: "this is me" },
    { id: 3, title: "this is me" },
  ]);
  const getItemPos = (id) => menuItems.findIndex((task) => task.id === id);
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
    setMenuItems((items) => {
      const originalPos = getItemPos(active.id);
      const newPos = getItemPos(over.id);
      return arrayMove(items, originalPos, newPos);
    });
  };
  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <DndColumn data={menuItems} />
    </DndContext>
  );
};

export default DndController;
