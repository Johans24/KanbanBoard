import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { boardInfo } from "../../store/settings";
import { StatusSettings } from "./StatusSettings";

const BoardInfoSettings = ({ boardInfo, refs, onChangeStatuses }) => {
  const { boardName, boardEntity, statuses } = useSelector(boardInfo);
  const boardNameRef = useRef(boardName);
  const boardEntityRef = useRef(boardEntity);
  const [localStatuses, setLocalStatuses] = useState(statuses);

  const changeStatuses = (newStatuses) => setLocalStatuses(newStatuses);

  const saveSettings = () => {
    throw new Error("Setting changed WIP");
  };
  return (
    <form>
      <div className="grid grid-cols-2 gap-3">
        <FormControl>
          <FormLabel htmlFor="boardName">Board Name</FormLabel>
          <Input
            id="boardName"
            ref={refs.boardName}
            defaultValue={boardName}
            placeholder="Board Name"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="boardEntity">
            What are you managing in this board?
          </FormLabel>
          <Input
            id="boardEntity"
            ref={refs.boardEntity}
            defaultValue={boardEntity}
            placeholder="Jobs, Tasks, Characters..."
          />
        </FormControl>
        <div className="col-span-2">
          <StatusSettings
            statuses={localStatuses}
            onChangeStatuses={changeStatuses}
          />
        </div>
      </div>
    </form>
  );
};

export default BoardInfoSettings;
