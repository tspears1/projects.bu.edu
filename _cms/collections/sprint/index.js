import { snakeDate } from '../../../_cms/utils/date.js'
import { slugify } from '../../../_cms/utils/slugify.js'

const sprints = {
   name: "sprint",
   store: `src:_data/projects/**/**/*.json`,
   nameField: (data) => `${data.project}/${data.phase}/${snakeDate(data.date)}-${slugify(data.title)}.json`,
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
      {
         name: "project",
         type: "select",
         label: "Project",
         required: true,
         init: (field, {data}) => {
            field.value = data.projects.find(project => project.selected)?.slug ?? null
            field.options = data.projects.map(project => {
               return {
                  label: project.title,
                  value: project.slug,
                  selected: project.selected
               }
            })
         }
      },
      {
         name: "phase",
         type: "select",
         label: "Phase",
         required: true,
         init: (field, {data}) => {
            field.options = [
               { value: 0, label: 'Select a phase...', disabled: true, selected: true },
               ...data.taxonomy.phase
            ]
            field.value = field.options[0].value
         }
      },
      {
         name: "sprint-list",
         type: "object-list",
         label: "Sprint Assets",
         required: true,
         fields: [
            {
               name: "title",
               type: "text",
               label: "Asset Title",
               required: true,
            },
            {
               name: "description",
               type: "text",
               label: "Asset Description",
            },
            {
               name: "last-modified",
               type: "current-datetime",
               attributes: {
                  readonly: true
               }
            },
            {
               name: "file-url",
               type: 'url',
               label: 'File URL',
               required: true,
            },
            {
               name: "status",
               type: "select",
               label: "Status",
               required: true,
               init: (field, {data}) => {
                  field.options = [
                     { value: 0, label: 'Select a status...', disabled: true, selected: true },
                     ...data.taxonomy.status
                  ]
                  field.value = field.options[0].value
               }
            }
         ],
      }
   ]
}

export default sprints