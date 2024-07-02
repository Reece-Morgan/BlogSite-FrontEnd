"use client";

import { callApiRouteForCreation } from "@blog/api";
import styles from "../popup.module.css";
import { useState } from "react";

interface Props {
  username: string;
  showPopup: (show: boolean) => void;
}

export const CreatePopup = ({ username, showPopup }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const createPost = async () => {
    const res = await callApiRouteForCreation(
      "createBlogItem",
      title,
      content,
      username
    );
    console.log("debug: ", res);
    showPopup(false);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.popup}>
        <h2>Create Blog Post</h2>
        <form onSubmit={createPost} className={styles.form}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Blog Post Title"
              id="title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Content (max 500 chars)</label>
            <textarea
              rows={10}
              cols={50}
              placeholder="Blog Post Content"
              id="content"
              maxLength={500}
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles.createButtons}>
            <button type="submit">Create</button>
            <button onClick={() => showPopup(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
