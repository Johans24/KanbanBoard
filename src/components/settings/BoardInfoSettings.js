import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  FormControl,
  FormLabel,
  Input,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { boardInfo } from "../../store/settings";

const BoardInfoSettings = () => {
  const { statuses, boardName, boardEntity } = useSelector(boardInfo);
  const onChange = () => {
    throw new Error("Setting changed WIP");
  }
  return (
    <form>
      <div className="grid grid-cols-2 gap-3">
        <FormControl>
          <FormLabel htmlFor="boardName">Board Name</FormLabel>
          <Input id="boardName" value={boardName} onChange={onChange} placeholder="Board Name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="boardEntity">
            What are you managing in this board?
          </FormLabel>
          <Input
            id="boardEntity"
            value={boardEntity}
            onChange={onChange}
            placeholder="Jobs, Tasks, Characters..."
          />
        </FormControl>
        <div className="col-span-2">
          <h6 className="mb-2">Statuses</h6>
          <DragDropContext>
            <Droppable droppableId="statusesOrder">
              {(provided) => (
                <div
                  className="flex flex-col gap-2"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {statuses.map((status, index) => (
                    <Draggable draggableId={`${status.id}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="border-2 bg-white border-darkGrey p-3 rounded-lg"
                        >
                          <Editable defaultValue={status.name}>
                            <EditablePreview />
                            <EditableInput />
                          </Editable>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </form>
  );
};

export default BoardInfoSettings;
