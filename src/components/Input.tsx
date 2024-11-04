interface Props {
  id: string;
  textName: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({ textName, id, value, onChange }) => {
  return (
    <label className="text-label">
      {textName}
      <input
        name={id}
        style={{ display: "block" }}
        className="input-container"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
