interface Props {
  tweets: Array<string>;
}

export const ListTweets: React.FC<Props> = ({ tweets }) => {
  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet}>{tweet}</li>
      ))}
    </ul>
  );
};
