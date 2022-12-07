import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { EditableText } from "../general/EditableText";
import { DragHandleIcon, DeleteIcon } from "@chakra-ui/icons";
import { v1 as uuidv1 } from "uuid";

export const StatusSettings = ({ statuses, onChangeStatuses }) => {
  const changeStatusName = (newStatusName, id) => {
    const newStatuses = statuses.reduce((acc, curr) => {
      if (curr.id === id) curr.name = newStatusName;
      acc.push(curr);
      return acc;
    }, []);

    onChangeStatuses(newStatuses);
  };

  const addNewStatus = (newStatus) => {
    const newStatusObj = {
      name: newStatus,
      id: `${newStatus.toLowerCase()}-${uuidv1()}`,
    };

    onChangeStatuses([...statuses, newStatusObj]);
  };

  const deleteStatus = (statusId) => {
    const newStatusObj = statuses.filter(({ id }) => statusId !== id);

    onChangeStatuses(newStatusObj);
  };

  const moveStatus = ({ source, destination }) => {
    const { index: sourceIndex } = source;
    const { index: destinationIndex } = destination;
    const newStatuses = [...statuses];
    const [movedStatus] = newStatuses.splice(sourceIndex, 1);
    newStatuses.splice(destinationIndex, 0, movedStatus);
    onChangeStatuses(newStatuses);
  };

  return (
    <>
      <h6 className="mb-2 bold">Statuses</h6>
      <p className="mb-3">
        Here's the list of statuses on your board. You can add/remove statuses,
        re-order them or changing the name by double clicking.
      </p>
      <div className="max-h-80 overflow-auto">
        <DragDropContext onDragEnd={moveStatus}>
          <Droppable droppableId="statusesOrder">
            {(provided) => (
              <div
                className="flex flex-col gap-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {statuses.map((status, index) => (
                  <Draggable
                    key={status.id}
                    draggableId={status.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="border-2 bg-white border-darkGrey p-3 rounded-lg flex justify-between"
                      >
                        <EditableText
                          value={status.name}
                          onChange={(newStatusName) =>
                            changeStatusName(newStatusName, status.id)
                          }
                        />
                        <div className="status-actions flex gap-2">
                          <Popover>
                            <PopoverTrigger>
                              <DeleteIcon className="cursor-pointer" />
                            </PopoverTrigger>
                            <PopoverContent>
                              <PopoverArrow />
                              <PopoverCloseButton />
                              <PopoverHeader>Confirmation!</PopoverHeader>
                              <PopoverBody>
                                Are you sure you want to delete this status?
                              </PopoverBody>
                              <PopoverFooter
                                display="flex"
                                justifyContent="flex-end"
                              >
                                <Button
                                  onClick={() => deleteStatus(status.id)}
                                  size="sm"
                                  colorScheme="red"
                                >
                                  Delete
                                </Button>
                              </PopoverFooter>
                            </PopoverContent>
                          </Popover>
                          <DragHandleIcon />
                        </div>
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
      <div className="border-2 mt-3 bg-white border-darkGrey p-3 rounded-lg flex justify-between cursor-pointer">
        <EditableText onChange={addNewStatus} oneClick>
          <span className="text-brand">+ Add new status</span>
        </EditableText>
      </div>
    </>
  );
};
