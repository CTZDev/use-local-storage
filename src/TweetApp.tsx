import React, { useState } from "react";
import "./TweetApp.css";
import { AddTweet } from "./components/AddTweet";
import { Header } from "./components/Header";
import { ListTweets } from "./components/ListTweets";
import { TweetContainer } from "./components/TweetContainer";

const TweetApp: React.FC = () => {
  const [tweets, setTweets] = useState<Array<string>>([]);

  const handleNewTweet = (newTweet: string) => {
    const tweet = newTweet.toUpperCase();
    if (tweets.includes(tweet)) return alert("Ya existe el tweet, prueba con otro 😎");
    setTweets((prev) => [...prev, tweet]);
  };

  return (
    <>
      <Header />
      <TweetContainer>
        <AddTweet onNewTweet={handleNewTweet} />
        <ListTweets tweets={tweets} />
      </TweetContainer>
    </>
  );
};

export default TweetApp;
