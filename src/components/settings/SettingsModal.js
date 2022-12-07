import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { setBoardInfo } from '../../store/settings';

import BoardInfoSettings from './BoardInfoSettings';

const SettingsModal = ({ isOpen, onClose }) => {
  const { boardName, boardEntity, statuses } = useSelector(boardInfo);
  const boardNameRef = useRef(boardName);
  const boardEntityRef = useRef(boardEntity);
  const [localStatuses, setLocalStatuses] = useState(statuses);
  
  const saveSettings = (newBoardInfo) => {
    setBoardInfo({ newBoardInfo });
  }
  return (
    <Modal closeOnOverlayClick={false} size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BoardInfoSettings />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="solid" colorScheme="brand" onClick={saveSettings}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
