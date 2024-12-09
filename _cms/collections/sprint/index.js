import { createPostId } from "../../middleware/post-id.js"
import { buildSelectOptions, getPostData } from "../../middleware/post-data.js"
import { snakeDate as __sn } from "../../utils/date.js"

// const buildNameField = async (data) => {
//    const { id: projectID } = await getPostData(data.project, 'project')
//    const date = __sn(data.date)
//    return `pr${projectID ?? data.project}-${data.phase}-${date}-${slugify(data.title)}`
// }

const sprint = {
   name: "sprint",
   store: "src:collections/sprint/*.json",
   nameField: 'title',
   fields: [
      {
         name: "type",
         type: "hidden",
         value: "sprint"
      },
      {
         name: "layout",
         type: "hidden",
         value: "layouts/sprint.vto"
      },
      {
         name: "title",
         type: "text",
         label: "Title",
         required: true,
      },
      {
         name: "date",
         type: "date",
         label: "Sprint Date",
         required: true,
         init: (field) => {
            field.value = new Date().toISOString().split('T')[0]
         }
      },
      // {
      //    name: "project",
      //    type: "collection-select",
      //    label: "Project",
      //    collection: "project",
      //    required: true,
      // },
      // {
      //    name: "phase",
      //    type: "select",
      //    label: "Phase",
      //    required: true,
      //    init: async (field) => {
      //       const phase = await buildSelectOptions('phase')
      //       field.options = phase
      //    }
      // },
      {
         name: "id",
         type: "hidden",
         init: async (field) => {
            const postID = await createPostId()
            field.value = postID
         }
      }
   ]
}

export { sprint }