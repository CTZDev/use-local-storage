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

  const handleUpdateTweet = (updateTweet: Tweet) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === updateTweet.id) {
        const newData = {
          ...tweet,
          name: updateTweet.name,
        };
        return newData;
      }

      return tweet;
    });
    setTweets(updatedTweets);
  };

  return (
    <>
      <Header />
      <TweetContainer>
        <AddTweet onNewTweet={handleNewTweet} />
        <ListTweets tweets={tweets} onUpdateTweeet={handleUpdateTweet} />
      </TweetContainer>
    </>
  );
};

export default TweetApp;
