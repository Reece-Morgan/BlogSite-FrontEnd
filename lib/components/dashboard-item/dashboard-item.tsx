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
  updateList: () => void;
}

export const DashboardItem = ({ blogList, username, updateList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const openDeletePopup = (id: number) => {
    setId(id);
    setShowDelete(true);
  };

  const openEditPopup = (id: number) => {
    setId(id);
    setShowEdit(true)
  };

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
                <button onClick={() => openEditPopup(item.id)}>Edit</button>
                <button onClick={() => openDeletePopup(item.id)}>Delete</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      {showEdit && (
        <EditPopup
          username={username}
          id={id}
          showPopup={setShowEdit}
          updateList={updateList}
        />
      )}
      {showDelete && (
        <DeletePopup
          id={id}
          showPopup={setShowDelete}
          updateList={updateList}
        />
      )}
    </section>
  );
};
