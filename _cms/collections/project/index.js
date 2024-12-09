import { createPostId } from "../../middleware/post-id.js"

const project = {
   name: "project",
   store: "src:collections/project/*.json",
   nameField: "title",
   fields: [
      {
         name: "type",
         type: "hidden",
         value: "project"
      },
      {
         name: "title",
         type: "text",
         label: "Title",
         required: true,
      },
      {
         name: "default",
         type: "checkbox",
         label: "Set as Default",
         // find way to validate that only one project is set as default at a time
      },
      {
         name: "archived",
         type: "checkbox",
         label: "Archived"
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

export { project }