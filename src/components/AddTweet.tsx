import { useState } from "react";

interface Props {
  onNewTweet: (newTweet: string) => void;
}

export const AddTweet: React.FC<Props> = ({ onNewTweet }) => {
  const [textTweet, setTextTweet] = useState("");

  const handleChange = ({ target }: { target: HTMLTextAreaElement }) => {
    setTextTweet(target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textTweet.trim().length === 0) return;
    onNewTweet(textTweet);
    setTextTweet("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Tweet:
          <textarea
            name="txt_tweet"
            cols={10}
            rows={5}
            value={textTweet}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};
