"use client";

import { BlogItem } from "@blog/types";
import styles from "./dashboard-item.module.css";
import { format } from "date-fns";
import Link from "next/link";
import { DeletePopup } from "../popups/delete-popup/delete-popup";
import { useState } from "react";

interface Props {
  blogList: BlogItem[];
}

export const DashboardItem = ({ blogList }: Props) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  return (
    <section className={styles.posts}>
      <h2>Your Blog Posts</h2>
      <ul>
        {blogList.map((item) => (
          <>
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{format(item.dateCreated, "dd/MM/yyyy kk:mm")}</p>
              </Link>
              <div>
                <button>Edit</button>
                <button onClick={() => setShowDelete(true)}>Delete</button>
              </div>
            </li>
            {showDelete && (
              <DeletePopup id={item.id.toString()} showPopup={setShowDelete} />
            )}
          </>
        ))}
      </ul>
    </section>
  );
};
