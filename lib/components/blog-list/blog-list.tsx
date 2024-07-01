"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { callApiRoute } from "@blog/api";
import { BlogItem, BlogList as AllBlogs } from "@blog/types";

export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: AllBlogs = await callApiRoute("getAllBlogItems");
      setBlogList(res.response);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h2>Blog List</h2>
      <ul>
        {blogList.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
