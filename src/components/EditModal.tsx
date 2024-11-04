import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

interface ComponentDetail {
  id: string;
  name: string;
  description?: string;
}

interface Props {
  idModal: string;
  element: ComponentDetail;
  isOpen: boolean;
  onClose?: () => void;
}

export const EditModal: React.FC<Props> = ({ idModal, element, isOpen, onClose }) => {
  const [updateValue, setUpdateValue] = useState(element.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className={`modal-container ${isOpen ? "open" : "close"}`}>
      {isOpen && (
        <dialog id={idModal} open className="modal">
          <form onSubmit={handleSubmit} className="modal-form">
            <Button
              type="button"
              classBtn="btn-closeModal"
              hasIcon
              iconProps={{ icon: "/close.svg", altIcon: "Close Modal" }}
              onClick={() => handleClose()}
            />
            <Input
              textName="Editar: "
              id={element.id}
              value={updateValue}
              onChange={handleChange}
            />
            <Button
              type="submit"
              classBtn="btn"
              textButton="Guardar"
              hasIcon
              iconProps={{ icon: "/edit.svg", altIcon: "Editar" }}
              onSubmit={handleSubmit}
            />
          </form>
        </dialog>
      )}
    </div>
  );
};
