import { createPostId } from "../../middleware/post-id.js"

const phase = {
   name: "phase",
   store: "src:taxonomy/phase/*.json",
   nameField: "label",
   fields: [
      {
         name: "type",
         type: "hidden",
         value: "phase"
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
         attributes: {},
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

export { phase }