interface Props {
  named: string;
  textName: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({ textName, named, value, onChange }) => {
  return (
    <label className="text-label">
      {textName}
      <input
        name={named}
        style={{ display: "block" }}
        className="input-container"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
