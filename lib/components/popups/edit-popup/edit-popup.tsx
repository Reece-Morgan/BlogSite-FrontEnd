"use client";

import styles from "../popup.module.css";
import { SyntheticEvent, useState } from "react";

interface Props {
  username: string;
  id: number;
  showPopup: (show: boolean) => void;
  updateList: () => void;
}

export const EditPopup = ({ username, id, showPopup, updateList }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const editPost = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:5189/api/blog/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        content,
        author: username,
        dateCreated: new Date(),
        readLength: 2,
      }),
    });
    updateList();
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
