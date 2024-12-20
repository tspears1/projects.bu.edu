import lumeCMS from "lume/cms/mod.ts"
import sprint from "./_cms/collections/sprint/index.js"

import config from './src/_setup/config.js'
import projects from './src/_setup/projects.js'
import taxonomy from './src/_setup/taxonomy.js'

const cms = lumeCMS({
   site: {
      name: "Webteam: Projects Template",
      description: "A template for a webteam project site.",
      url: "https://id-projects.bu.edu/{slug}",
      body: "<p>This is a template for a webteam project site.</p>"
   },
   data: {
      projects,
      taxonomy,
      config,
   }
});

cms.collection(sprint)

export default cms