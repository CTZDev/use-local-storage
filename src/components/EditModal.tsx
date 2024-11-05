import { useRef, useState } from "react";
import type { ComponentDetail } from "../types/ComponentDetail";
import type { Tweet } from "../types/Tweet";
import { Button } from "./Button";
import { Input } from "./Input";
type OptionElement = Tweet; // aqui colocar todos los que se usarian

interface Props {
  idModal: string;
  element: ComponentDetail;
  isOpen: boolean;
  onClose?: () => void;
  onUpdateValue: (updatedValue: OptionElement) => void;
}

export const EditModal: React.FC<Props> = ({
  idModal,
  element,
  isOpen,
  onClose,
  onUpdateValue,
}) => {
  const [updateValue, setUpdateValue] = useState(element.name);
  const btnEditRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataBtn = btnEditRef.current?.getAttribute("data-button");
    const json = dataBtn && JSON.parse(dataBtn);
    const { id } = json;
    const updatedValue = {
      id,
      name: updateValue.trim(),
    };
    onUpdateValue(updatedValue);
    handleClose();
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
              named="btn-close"
              hasIcon
              iconProps={{ icon: "/close.svg", altIcon: "Close Modal" }}
              onClick={() => handleClose()}
            />
            <Input
              textName="Editar: "
              named={element.id}
              value={updateValue}
              onChange={handleChange}
            />
            <Button
              ref={btnEditRef}
              type="submit"
              data={element}
              classBtn="btn"
              named="btn-edit"
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
