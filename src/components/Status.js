import pluralize from "pluralize";
import Entity from "./Entity";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { boardInfo } from "../store/settings";

const Status = ({ status = {}, entities = [] }) => {
  const { name: statusName, id: statusId } = status;
  const { boardEntity: entityName } = useSelector(boardInfo);
  return (
    <div className="max-h-full max-w-full relative flex flex-col gap-3">
      <div className="flex justify-between mb-0.5">
        <span className="font-bold capitalize">{statusName}</span>
        <span className="rounded-full px-2 py-1 bg-darkGrey font-bold text-xs">
          {entities.length}
        </span>
      </div>

      <button className="border-none w-full bg-darkGrey hover:bg-darkerGrey transition-colors text-darkestGrey font-bold text-center py-1 px-2">
        + Add {pluralize(entityName, 1)}
      </button>

      <Droppable
        key={`${statusName}-${statusId}`}
        droppableId={`${statusId}`}
      >
        {(provided) => (
          <div className="flex flex-col gap-2" ref={provided.innerRef} {...provided.droppableProps}>
            {!!entities.length &&
              entities.map((entity, index) => (
                <Entity key={`${entity.id}`} entityInfo={entity} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Status;
