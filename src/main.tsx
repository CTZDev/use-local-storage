import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TweetApp from "./TweetApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TweetApp />
  </StrictMode>
);
