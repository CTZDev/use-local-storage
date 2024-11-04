import { useState } from "react";
import { Button } from "./Button";
import { TextArea } from "./TextArea";

interface Props {
  onNewTweet: (newTweet: string) => void;
}

export const AddTweet: React.FC<Props> = ({ onNewTweet }) => {
  const [textTweet, setTextTweet] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextTweet(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textTweet.trim().length === 0) return;
    onNewTweet(textTweet);
    setTextTweet("");
  };

  return (
    <>
      <form action="/" onSubmit={handleSubmit} className="form-tweet">
        <TextArea id="txt_tweet" textName="Tweet" value={textTweet} onChange={handleChange} />
        <Button
          type="submit"
          textButton="Agregar"
          hasIcon
          iconProps={{ icon: "/add.svg", altIcon: "Agregar Tweet" }}
        />
      </form>
    </>
  );
};
