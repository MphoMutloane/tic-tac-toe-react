import { useState } from "react";
import ModalTemplate from "../components/Modal/ModalTemplate";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("I'M A MODAL");

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };
  return { modal, modalContent, handleModal };
};

