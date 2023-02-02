import React from "react";
import styles from "./PostShow.module.css";
import { FiMoreVertical } from "react-icons/fi";
import { IoCheckmarkCircleOutline, IoMdShareAlt } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { BiWorld, BiCommentDetail, BiRocket } from "react-icons/bi";
import {
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
  BsEmojiAngryFill,
  BsEmojiLaughingFill,
  BsEmojiFrownFill,
  BsFillEmojiDizzyFill,
} from "react-icons/bs";

const PostShow = () => {
  return (
    <div className={styles.pDiv}>
      <div className={styles.pHeader}>
        <div className={styles.pHName}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNg1_sTuHQe1xYCq1HMU_tGgqJwCuIFeCiw&usqp=CAU"
            alt=""
            className={styles.pPhoto}
          />
          <div className={styles.hName}>
            <h4>
              Name <IoCheckmarkCircleOutline className={styles.pIcon} />
            </h4>
            <h6>
              2 week <BiWorld className={styles.pIcon} />
            </h6>
          </div>
        </div>
        <div className="opt">
          <FiMoreVertical />
        </div>
      </div>
      <div className={styles.pMain}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNg1_sTuHQe1xYCq1HMU_tGgqJwCuIFeCiw&usqp=CAU"
          alt=""
          className={"pPhoto"}
        />
      </div>
      <div className={styles.pFooter}>
        <div className={styles.emoji}>
          <BsEmojiSmileFill className={styles.emojiIcon} />
          <p>Like</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BsEmojiHeartEyesFill className={styles.emojiIcon} />
          <p>Love</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BsFillEmojiDizzyFill className={styles.emojiIcon} />
          <p>Wow</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BsEmojiFrownFill className={styles.emojiIcon} />
          <p>Sad</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BsEmojiLaughingFill className={styles.emojiIcon} />
          <p>Haha</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BsEmojiAngryFill className={styles.emojiIcon} />
          <p>Angry</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BiCommentDetail className={styles.emojiIcon} />
          <p>Comments</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <RiShareForwardLine className={styles.emojiIcon} />
          <p>Share</p>
          <p>5</p>
        </div>
        <div className={styles.emoji}>
          <BiRocket className={styles.emojiIcon} />
          <p>Promote</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
