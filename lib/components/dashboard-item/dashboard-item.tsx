"use client";

import { BlogItem } from "@blog/types";
import styles from "./dashboard-item.module.css";
import { format } from "date-fns";
import Link from "next/link";
import { DeletePopup } from "../popups/delete-popup/delete-popup";
import { useState } from "react";
import { EditPopup } from "../popups/edit-popup/edit-popup";

interface Props {
  blogList: BlogItem[];
  username: string;
}

export const DashboardItem = ({ blogList, username }: Props) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  return (
    <section className={styles.posts}>
      <h2>Your Blog Posts</h2>
      <ul>
        {blogList.map((item) => (
          <div key={item.id}>
            <li>
              <Link href={`/blog/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{format(item.dateCreated, "dd/MM/yyyy kk:mm")}</p>
              </Link>
              <div>
                <button onClick={() => setShowEdit(true)}>Edit</button>
                <button onClick={() => setShowDelete(true)}>Delete</button>
              </div>
            </li>
            {showEdit && (
              <EditPopup
                username={username}
                id={item.id.toString()}
                showPopup={setShowEdit}
              />
            )}
            {showDelete && (
              <DeletePopup id={item.id.toString()} showPopup={setShowDelete} />
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};
