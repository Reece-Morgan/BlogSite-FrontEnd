"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Header } from "@blog/components";
import { callApiRoute } from "@blog/api";
import { BlogItem as BlogPost, SingleBlogItem } from "@blog/types";
import { format } from "date-fns";

interface Props {
  params: Params;
}

type Params = {
  id: string;
};

export default function BlogItem({ params }: Props) {
  const [blogItem, setBlogItem] = useState<BlogPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getItem = async () => {
      const res: SingleBlogItem = await callApiRoute(
        "getBlogItemById",
        params.id
      );
      console.log("debug: ", res);
      setBlogItem(res.response);
      setIsLoading(false);
    };
    getItem();
  }, []);
  return (
    <>
      <Header />
      {!isLoading && (
        <main className={styles.main}>
          <div className={styles.title}>
            <h2>{blogItem?.title}</h2>
            <div className={styles.byline}>
              <p>Written by {blogItem?.author}</p>
              {blogItem?.dateCreated && (
                <p>
                  First published on{" "}
                  {format(blogItem?.dateCreated, "dd/MM/yyyy kk:mm")}
                </p>
              )}
            </div>
          </div>
          <div className={styles.content}>
            <p>{blogItem?.content}</p>
          </div>
        </main>
      )}
    </>
  );
}
