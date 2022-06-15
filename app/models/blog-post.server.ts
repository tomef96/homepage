import { prisma } from "~/db.server";

export type { BlogPost } from "@prisma/client";

export async function getBlogPosts() {
  return prisma.blogPost.findMany();
}
