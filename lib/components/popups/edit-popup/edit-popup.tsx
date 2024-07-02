"use client";

import { callApiRouteForEdits } from "@blog/api";
import styles from "../popup.module.css";
import { useState } from "react";

interface Props {
  username: string,
  id: string;
  showPopup: (show: boolean) => void;
}

export const EditPopup = ({ username, id, showPopup }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const editPost = async () => {
    const res = await callApiRouteForEdits(
      title,
      content,
      username,
      id
    );
    console.log("debug: ", res);
    showPopup(false);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.popup}>
        <h2>Edit Blog Post</h2>
        <form onSubmit={editPost} className={styles.form}>
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
            <button type="submit">Edit</button>
            <button onClick={() => showPopup(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
