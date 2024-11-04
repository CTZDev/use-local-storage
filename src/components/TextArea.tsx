interface Props {
  textName: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<Props> = ({ textName, id, value, onChange }) => {
  return (
    <label className="text-label">
      {textName}:
      <textarea
        name={id}
        style={{ display: "block" }}
        className="textarea-container"
        cols={50}
        rows={10}
        value={value}
        onChange={onChange}
      ></textarea>
    </label>
  );
};
