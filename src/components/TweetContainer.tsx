interface Props {
  children: React.ReactNode;
}

export const TweetContainer: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};
