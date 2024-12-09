import { createPostId } from "../../middleware/post-id.js"

const status = {
   name: "status",
   store: "src:taxonomy/status/*.json",
   nameField: "label",
   fields: [
      {
         name: "type",
         type: "hidden",
         value: "status"
      },
      {
         name: "label",
         type: "text",
         label: "Label",
         required: true,
      },
      {
         name: "slug",
         type: "text",
         label: "Slug",
         required: true,
      },
      {
         name: "id",
         type: "hidden",
         init: async (field) => {
            const postID = await createPostId().then(postID => field.value = postID)
            field.value = postID
         }
      }
   ]
}

export { status }