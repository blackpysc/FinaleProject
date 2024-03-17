import React from "react";
import { fetchPost } from "@/lib/data";

async function Posts() {
  const posts = await fetchPost();

  // console.log(posts);
  return <>{/* Map through post */}</>;
}

export default Posts;
