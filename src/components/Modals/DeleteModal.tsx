import { useRef } from "react";
import type { ComponentDetail } from "../../types/ComponentDetail";
import { Button } from "../Button";

interface Props {
  idModal: string;
  element: ComponentDetail;
  isOpen: boolean;
  onClose?: () => void;
  onDeleteValue: (idDeleteValue: string) => void;
}

export const DeleteModal: React.FC<Props> = ({
  idModal,
  element,
  isOpen,
  onClose,
  onDeleteValue,
}) => {
  const btnDeleteRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataBtn = btnDeleteRef.current?.getAttribute("data-button");
    const json = dataBtn && JSON.parse(dataBtn);
    const { id } = json;
    onDeleteValue(id);
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
            <h3 className="modal-delete-title">¿Deseas eliminar el Tweet: "{element.name}"?</h3>

            <div className="modal-delete-buttons">
              <Button
                type="submit"
                ref={btnDeleteRef}
                data={element}
                classBtn="btn"
                textButton="Eliminar"
                hasIcon
                iconProps={{ icon: "/delete.svg", altIcon: "Eliminar" }}
                onSubmit={handleSubmit}
              />

              <Button
                ref={btnDeleteRef}
                data={element}
                classBtn="btn"
                textButton="Cancelar"
                hasIcon
                iconProps={{ icon: "/close.svg", altIcon: "Eliminar" }}
                onClick={() => handleClose()}
              />
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};
