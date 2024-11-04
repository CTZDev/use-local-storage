import React, { useEffect, useState } from "react";
import "./TweetApp.css";
import { AddTweet } from "./components/AddTweet";
import { Header } from "./components/Header";
import ListTweets from "./components/ListTweets";
import { TweetContainer } from "./components/TweetContainer";
import type { Tweet } from "./types/Tweet";

const TweetApp: React.FC = () => {
  const getTweetsOfLocalStorage = localStorage.getItem("tweets")
    ? JSON.parse(localStorage.getItem("tweets") as string)
    : [];

  const [tweets, setTweets] = useState<Array<Tweet>>(getTweetsOfLocalStorage);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const handleNewTweet = (newTweet: string) => {
    const tweetData = {
      id: crypto.randomUUID(),
      name: newTweet.trim(),
    };

    if (tweets.some((tweet) => tweet.name === tweetData.name))
      return alert("Ya existe el tweet, prueba con otro 😎");
    setTweets((prev) => [...prev, tweetData]);
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
