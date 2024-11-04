type OptionButton = "button" | "reset" | "submit";

type Icon = {
  width?: number;
  height?: number;
  icon?: string;
  altIcon?: string;
};

interface Props {
  type: OptionButton;
  textButton?: string;
  hasIcon?: boolean;
  iconProps: Icon;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  classBtn?: string;
}

export const Button: React.FC<Props> = ({
  type,
  textButton,
  hasIcon,
  iconProps,
  onClick,
  onSubmit,
  classBtn,
}) => {
  return (
    <button type={type} className={`btn ${classBtn}`} onClick={onClick} onSubmit={onSubmit}>
      <p className="btn-icon">
        {hasIcon && iconProps && <img src={iconProps.icon} alt={iconProps.altIcon} />}
        {textButton}
      </p>
    </button>
  );
};
