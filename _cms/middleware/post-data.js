import * as path from "https://deno.land/x/_std@1.1.1/path/mod.js";

const root = Deno.cwd()

/**
 * Get the post types from the parent directories.
 *
 * @returns {Promise<object>} postTypes
 */
const getPostTypes = async () => {
   const parentTypes = ["collections", "taxonomy"]
   const postTypes = {}
   for (const parent of parentTypes) {
      const parentDir = path.join(root, parent)
      for await (const entry of Deno.readDir(parentDir)) {
         if (entry.isDirectory) {
            postTypes[entry.name] = {
               path: path.join(parentDir, entry.name),
               type: parent
            }
         }
      }
   }
   return postTypes
}

/**
 * Build post object from file.
 *
 * @param {string} postTypeDir
 * @param {object} entry
 * @returns
 */
const buildPostData = async (postTypeDir, entry) => {
   const file = await Deno.readTextFile(`${postTypeDir}/${entry.name}`)
   const post = JSON.parse(file)
   // create slug from entry.name minus extension
   const postSlug = entry.name.replace(/\.[^/.]+$/, '')
   return { [postSlug]: post }
}

/**
 * Get the post data for each post type.
 *
 * @param {string} postType
 * @returns {Promise<object>} postData
 */
const getPostTypeData = async (postType) => {
   const postData = {}
   const postTypeDir = await getPostTypes().then(postTypes => postTypes[postType].path)
   for await (const entry of Deno.readDir(postTypeDir)) {
      if (entry.isFile) {
         const post = await buildPostData(postTypeDir, entry)
         Object.assign(postData, post)
      }
   }
   return postData
}

/**
 * Get individual post data
 *
 * @param {string} slug
 * @param {string} type
 * @returns {Promise<object>} postData
 */
const getPostData = async (slug, type) => {
   const postData = await getPostTypeData(type)
   return postData[slug]
}

/**
 * Build a select field options array from the post data with value and label properties.
 *
 * @param {string} postType
 * @param {boolean} placeholder
 * @returns {Promise<array>} options
 */
const buildSelectOptions = async (postType, includeData = true) => {
   const postData = await getPostTypeData(postType)
   let options = []
   for (const postSlug in postData) {
      const post = postData[postSlug]
      options = [...options, {
         value: post.slug ?? postSlug,
         label: post.label ?? post.title,
         ...(includeData && { ['post-data']: post })
      }]
      options.sort((a, b) => a.id - b.id)
   }
   return options
}

export { getPostTypes, getPostTypeData, buildSelectOptions, getPostData, buildPostData }