"use client";

import { BlogItem } from "@blog/types";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DashboardItem } from "../dashboard-item/dashboard-item";
import { CreatePopup } from "../popups/create-popup/create-popup";

export const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const getUser = async () => {
    const data = await fetch("http://localhost:5189/api/user", {
      credentials: "include",
    });
    const res = await data.json();

    if (res.status !== 401) {
      setUsername(res.username);
      const response = await fetch(
        `http://localhost:5189/api/blog/get-by-user/${res.username}`,
        {
          credentials: "include",
        }
      );
      const items = await response.json();
      setBlogList(items);
      setIsLoading(false);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className={styles.dashboard}>
          <button onClick={() => setShowCreate(true)}>New Blog Post</button>
          {blogList.length === 0 ? (
            <p>You haven&#39;t written any blog posts yet!</p>
          ) : (
            <DashboardItem blogList={blogList} username={username} updateList={getUser} />
          )}
          {showCreate && (
            <CreatePopup username={username} showPopup={setShowCreate} updateList={getUser} />
          )}
        </div>
      )}
    </>
  );
};
