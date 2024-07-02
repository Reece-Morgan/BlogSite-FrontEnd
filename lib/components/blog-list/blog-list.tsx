"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { callApiRoute } from "@blog/api";
import { BlogItem as BlogPost, BlogList as AllBlogs } from "@blog/types";
import { BlogItem } from "@blog/components";

export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogPost[]>([]);
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
            <BlogItem blogList={blogList} />
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;
