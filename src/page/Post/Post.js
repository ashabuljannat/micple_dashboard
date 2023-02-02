import React from "react";
import Review from "../../Components/User/Review";
import { AllUserData } from "../../Context/UserContext";
import styles from "./Post.module.css";

const Post = () => {
  const all = AllUserData();

  return (
    <>
      Post
      <span className={"kk"}>{all && <Review allCountryUser={all} />}</span>
    </>
  );
};

export default Post;
