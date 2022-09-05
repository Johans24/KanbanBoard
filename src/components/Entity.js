import { Draggable } from "react-beautiful-dnd";

const Entity = ({ entityInfo = {}, index }) => {
  const { name, fields, id } = entityInfo;
  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-full border-none shadow-lg rounded-lg bg-white p-4"
        >
          <h6 className="font-bold">{name}</h6>

          {fields.map((field) => (
            <span key={field.label}>
              {field.label}: {field.value}
            </span>
          ))}
        </article>
      )}
    </Draggable>
  );
};

export default Entity;
