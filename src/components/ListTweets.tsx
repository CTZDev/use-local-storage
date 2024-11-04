import { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { EditModal } from "./EditModal";

interface Props {
  tweets: Array<Tweet>;
}

const ListTweets: React.FC<Props> = ({ tweets }) => {
  const [activeTweetId, setActiveTweetId] = useState<string | null>(null);

  const openModal = (tweetId: string) => {
    setActiveTweetId(tweetId);
  };

  const closeModal = () => {
    setActiveTweetId(null);
  };

  return (
    <div className="listTweet">
      <h2 className="listTweet-title">Listado de Twitters</h2>
      <table id="table">
        <thead>
          <tr className="table-title">
            <th className="table-title-option">TWEET</th>
            <th className="table-title-option">OPCIONES</th>
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
                  <button
                    style={{ display: "inline-block", marginRight: "0.4rem" }}
                    title="Editar"
                    id={tweet.id}
                    onClick={() => openModal(tweet.id)}
                  >
                    <img src="/edit.svg" alt="Edit Tweet" />
                  </button>
                  <button
                    style={{ display: "inline-block", marginLeft: "0.4rem" }}
                    title="Eliminar"
                    id={tweet.id}
                  >
                    <img src="/delete.svg" alt="Delete Tweet" />
                  </button>
                  {activeTweetId === tweet.id && (
                    <EditModal
                      idModal={tweet.id}
                      element={tweet}
                      isOpen={true}
                      onClose={closeModal}
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
