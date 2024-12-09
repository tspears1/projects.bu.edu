import * as path from "jsr:@std/path";
import { existsSync } from "jsr:@std/fs";

const root = Deno.cwd()

const posts = {
   project: {
      path: path.join(root, "collections/project"),
      type: "collection",
   },
   sprint: {
      path: path.join(root, "collections/sprint"),
      type: "collection",
   },
   phase: {
      path: path.join(root, "taxonomy/phase"),
      type: "taxonomy",
   },
   status: {
      path: path.join(root, "taxonomy/status"),
      type: "taxonomy",
   },
}

/**
 * Count the number of files in a directory and all subdirectories.
 *
 * @param {string} dir
 * @returns {Promise<number>} count
 */
async function countFiles(dir) {
   if (! existsSync(dir)) { return 0 }
   let count = 0;
   for await (const entry of Deno.readDir(dir)) {
      if (entry.isDirectory) {
         count += countFiles(`${dir}/${file.name}`);
         break;
      } else {
         count++;
      }
   }
   return count;
}

/**
 * Get the total number of posts.
 *
 * @returns {Promise<number>} count
 */
async function getPostsCount() {
   let _count = 0
   for (const key in posts) {
      const dirCount = await countFiles(posts[key].path)
      _count += dirCount
   }
   return _count
}

/**
 * Get a unique post id based on the number of posts already created.
 *
 * @returns {Promise<string>} postId
 */
const createPostId = async () => {
   const currentCount = await getPostsCount()
   const postID = (currentCount + 1).toString().padStart(3, "0")
   return postID
}

export { createPostId }