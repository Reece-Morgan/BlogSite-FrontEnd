"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { callApiRoute } from "@blog/api";
import { BlogItem, BlogList as AllBlogs } from "@blog/types";

export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res: AllBlogs = await callApiRoute("getAllBlogItems");
      setBlogList(res.response);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <p>fetching blog posts...</p>
      ) : (
        <>
          <h2>Blog List</h2>
          {blogList.length === 0 ? (
            <p>There are no blog posts to display</p>
          ) : (
            <ul>
              {blogList.map((item: any) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;
