import { SinglePostSkeleton } from "@/components/Skeleton";
import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import SinglePost from "@/components/SinglePost";
import MorePost from "@/components/MorePost";

function PostPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />

      <Suspense fallback="loading...">
        <MorePost postId={id} />
      </Suspense>
    </div>
  );
}

export default PostPage;
