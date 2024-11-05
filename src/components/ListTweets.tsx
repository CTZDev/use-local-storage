import { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { Button } from "./Button";
import { DeleteModal } from "./Modals/DeleteModal";
import { EditModal } from "./Modals/EditModal";

interface Props {
  tweets: Array<Tweet>;
  onUpdateTweeet: (updatedValue: Tweet) => void;
  onDeleteTweet: (idDeleteValue: string) => void;
}

const ListTweets: React.FC<Props> = ({ tweets, onUpdateTweeet, onDeleteTweet }) => {
  const [activeEditTweetId, setActiveEditTweetId] = useState<string | null>(null);
  const [activeDeleteTweetId, setActiveDeleteTweetId] = useState<string | null>(null);

  const openModalEdit = (tweetId: string) => {
    setActiveEditTweetId(tweetId);
  };

  const closeModalEdit = () => {
    setActiveEditTweetId(null);
  };

  const openModalDelete = (tweetId: string) => {
    setActiveDeleteTweetId(tweetId);
  };

  const closeModalDelete = () => {
    setActiveDeleteTweetId(null);
  };

  return (
    <div className="listTweet">
      <h2 className="listTweet-title">Listado de Twitters</h2>
      <table id="table">
        <thead>
          <tr className="table-title">
            <th className="table-title-option">TWEET</th>
            <th className="table-title-option">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {tweets.length === 0 ? (
            <tr>
              <td colSpan={2} style={{ fontSize: "1.2rem", padding: ".7rem" }}>
                {" "}
                No se encontraron Tweets 😓😓😓
              </td>
            </tr>
          ) : (
            tweets.map((tweet) => (
              <tr key={tweet.id} className="table-items">
                <td className="table-item">{tweet.name}</td>
                <td className="table-item table-item-buttons">
                  <Button
                    onlyIcon
                    type="submit"
                    classBtn="btn-edit"
                    hasIcon
                    iconProps={{ icon: "/edit.svg", altIcon: "Edit Tweet" }}
                    named={tweet.id}
                    onClick={() => openModalEdit(tweet.id)}
                  />

                  <Button
                    onlyIcon
                    type="submit"
                    classBtn="btn-delete"
                    hasIcon
                    iconProps={{ icon: "/delete.svg", altIcon: "Delete Tweet" }}
                    named={tweet.id}
                    onClick={() => openModalDelete(tweet.id)}
                  />

                  {/* For Edit values */}
                  {activeEditTweetId === tweet.id && (
                    <EditModal
                      idModal={tweet.id}
                      element={tweet}
                      isOpen={true}
                      onClose={closeModalEdit}
                      onUpdateValue={onUpdateTweeet}
                    />
                  )}

                  {/* For Delete values */}
                  {activeDeleteTweetId === tweet.id && (
                    <DeleteModal
                      idModal={tweet.id}
                      element={tweet}
                      isOpen={true}
                      onClose={closeModalDelete}
                      onDeleteValue={onDeleteTweet}
                    />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTweets;
