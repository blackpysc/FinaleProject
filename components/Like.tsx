import { PostWithExtras } from "@/lib/definitions";
import React from "react";

function LikeButton({
  post,
  userId,
}: {
  post: PostWithExtras;
  userId?: string;
}) {
  return <div>Love</div>;
}

export default LikeButton;
