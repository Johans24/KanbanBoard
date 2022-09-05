import { DragDropContext } from "react-beautiful-dnd";
import { Button, useDisclosure } from '@chakra-ui/react'
import { SettingsIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { entitiesByStatus, moveEntity } from "../store/board";
import { boardInfo } from "../store/settings";
import Status from "./Status";
import SettingsModal from "./settings/SettingsModal";

const Kanban = () => {
  const dispatch = useDispatch();
  const { statuses, boardName } = useSelector(boardInfo);
  const entities = useSelector(entitiesByStatus);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onDragEnd = ({ source, destination }) => {
    const { droppableId: moveFromStatus, index: moveFromIndex } = source;
    const { droppableId: moveToStatus, index: moveToIndex } = destination;
    dispatch(
      moveEntity({ moveFromStatus, moveFromIndex, moveToStatus, moveToIndex })
    );
  };

  const gridColClass = () => `grid-cols-${statuses.length}`;
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="max-w-[100rem] h-full mx-auto py-20">
          <div className="w-full flex flex-row justify-between mb-5">
            <h1 className="text-4xl font-bold">{boardName}</h1>
            <Button onClick={onOpen} variant="solid" colorScheme="brand">
              <SettingsIcon className="mr-2" aria-label="Board Settings" />
              <span className="font-normal">
                Settings
              </span>
            </Button>
          </div>
          <div className={`grid ${gridColClass()} grid-rows-1 gap-4`}>
            {statuses.map((status) => (
              <Status
                key={status.id}
                status={status}
                entities={entities[status.id]}
              />
            ))}
          </div>
        </main>
      </DragDropContext>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Kanban;
