import lumeCMS from "lume/cms/mod.ts"
import { project } from "./_cms/collections/project/index.js"
import { sprint } from "./_cms/collections/sprint/index.js"
import { phase } from "./_cms/taxonomy/phase/index.js"
import { status } from "./_cms/taxonomy/status/index.js"

import { getPostTypeData } from "./_cms/middleware/post-data.js"

const cms = lumeCMS({
   site: {
      name: "Webteam: Projects Template",
      description: "A template for a webteam project site.",
      url: "https://projects.bu.edu/admin",
      body: "<p>This is a template for a webteam project site.</p>"
   }
});

cms.collection(project)
cms.collection(sprint)
cms.collection(phase)
cms.collection(status)

// cms.data = {
//    project: await getPostTypeData('project'),
//    sprint: await getPostTypeData('sprint'),
//    phase: await getPostTypeData('phase'),
//    status: await getPostTypeData('status'),
// }

// localStorage.setItem('cms-data', JSON.stringify(cms.data))

export default cms