import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z
    .string({
      required_error: "the file URL you have isnt valid",
    })
    .url(),
  caption: z.string().optional(),
});

export const CreatePost = PostSchema.omit({ id: true });
export const UpdatePost = PostSchema;
export const DeletePost = PostSchema.pick({ id: true });
