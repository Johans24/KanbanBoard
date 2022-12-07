import { Tooltip } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const EditableText = ({
  value,
  placeholder = "",
  children,
  onChange,
  oneClick = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const valueRef = useRef(value);

  useEffect(() => {
    if (isEditing) valueRef.current.focus();
  }, [isEditing]);

  const toggleEditing = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  //TODO: Refactor this
  const handleEdit = (e) => {
    if (oneClick || e.detail > 1) {
      toggleEditing();
      return;
    }
  };

  const handleChange = () => {
    const valueChanged = valueRef.current.value;
    if (valueChanged) onChange(valueChanged);
    toggleEditing();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          className="outline-none focus:outline-none active:outline-none"
          ref={valueRef}
          defaultValue={value}
          type="text"
          onBlur={handleChange}
          onKeyDown={handleEnter}
          placeholder={placeholder}
        />
      ) : (
        <Tooltip
          label="Double Click to Edit"
          placement="top"
          color="white"
          openDelay={800}
        >
          <span onClick={handleEdit}>{children || value || placeholder}</span>
        </Tooltip>
      )}
    </>
  );
};
