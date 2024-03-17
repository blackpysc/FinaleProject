"use server";

import prisma from "./prisma";
import { getUserId } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { CreatePost, DeletePost } from "./schema";

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();

  const validatedField = CreatePost.safeParse(values);

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Missing Field. Failed to Create Post.",
    };
  }

  const { fileUrl, caption } = validatedField.data;

  try {
    await prisma.post.create({
      data: {
        caption,
        fileUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Database Error : Failed to Create Post.",
    };
  }
  revalidatePath("/homepage");
  redirect("/homepage");
}

export async function deletePost(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeletePost.parse({
    id: formData.get("id"),
  });

  const post = await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  try {
    await prisma.post.delete({
      where: {
        id,
        userId,
      },
    });
    revalidatePath("/homepage");
    return { message: "post deleted successfully" };
  } catch (error) {}
  return { message: "Database error failed to delete post" };
}
