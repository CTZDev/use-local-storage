import { forwardRef } from "react";
import type { ComponentDetail } from "../types/ComponentDetail";

type OptionButton = "button" | "reset" | "submit";

type Icon = {
  width?: number;
  height?: number;
  icon?: string;
  altIcon?: string;
};

interface Props {
  type?: OptionButton;
  data?: ComponentDetail;
  named?: string;
  textButton?: string;
  onlyIcon?: boolean;
  hasIcon?: boolean;
  iconProps?: Icon;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  classBtn?: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { type = "button", named, data, textButton, onlyIcon, hasIcon, iconProps, onClick, classBtn },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={classBtn}
      onClick={onClick}
      name={named}
      data-button={JSON.stringify(data)}
    >
      {onlyIcon ? (
        hasIcon && iconProps && <img src={iconProps.icon} alt={iconProps.altIcon} />
      ) : (
        <p className="btn-icon">
          {hasIcon && iconProps && <img src={iconProps.icon} alt={iconProps.altIcon} />}
          {textButton}
        </p>
      )}
    </button>
  );
});
