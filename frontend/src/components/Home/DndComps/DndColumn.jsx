import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DndRow from "./DndRow";

const DndColumn = ({ data }) => {
  return (
    <div className="column">
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        {data?.map((task) => (
          <DndRow key={task?.id} id={task.id} title={task?.title} />
        ))}
      </SortableContext>{" "}
    </div>
  );
};

export default DndColumn;
