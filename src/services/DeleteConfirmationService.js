import React, { useState, useContext } from "react";
import DeleteConfirmationModal from "../components/track/modals/DeleteConfirmationModal";

const ModalContext = React.createContext();

export function DeleteConfirmationService({ children }) {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const openConfirmationModal = (entityName) => {
    setEntityName(entityName);
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setEntityName("");
    setConfirmationModalOpen(false);
    setConfirmDelete(false);
  };

  const confirm = () => {
    setConfirmDelete(true);
    closeConfirmationModal();
  };

  return (
    <ModalContext.Provider value={openConfirmationModal}>
      {children}
      <DeleteConfirmationModal
        show={isConfirmationModalOpen}
        onHide={closeConfirmationModal}
        entityName={entityName}
        onConfirm={confirm}
      />
    </ModalContext.Provider>
  );
}

export function useDeleteConfirmationModal() {
  return useContext(ModalContext);
}
