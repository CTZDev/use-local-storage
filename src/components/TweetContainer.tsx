interface Props {
  children: React.ReactNode;
}

export const TweetContainer: React.FC<Props> = ({ children }) => {
  return <main className="tweet-container">{children}</main>;
};
