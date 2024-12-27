// Plugins =========================================
import googleFonts from "lume/plugins/google_fonts.ts";
import basePath from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import { Page } from "lume/core/file.ts";

// Data ============================================
import taxonomy from './_setup/taxonomy.js'
import projects from './_setup/projects.js'
import config from './_setup/config.js'

const isProduction = Deno.env.get('TASK') == 'prod'

export default function () {
   return (site) => {
      site.data('taxonomy', taxonomy)
      site.data('projects', projects)
      site.data('org', config)

      // site.use(googleFonts({
      //    cssFile: "./main.css",
      //    placeholder: "/* google-fonts */",
      //    fonts: {
      //       mona: "https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
      //    }
      // }));

      site.use(esbuild({
         extensions: [".jsx"],
         options: {
            minify: isProduction,
         },
      }));

      site.use(basePath({
         extensions: [".html", ".css"], // Fix URLs inside HTML and CSS files
      }));

      // site.use(relativeUrls({
      //    extensions: [".html", ".css"], // Fix URLs inside HTML and CSS files
      // }));

      site.ignore('app');

      site.copy('./main.css');
      site.copy('app/css', 'css' )
      site.copy('app/fonts', 'fonts' )

      site.process(['.html'], (pages, allPages) => {
         if (!pages[0]) return
         const data = pages[0].data
         const output = {
            sprints: data.sprints,
            projects: data.projects,
            taxonomy: data.taxonomy,
            org: data.org
         }
         const dataPage = Page.create({
            url: '/data.json',
            content: JSON.stringify(output),
         })

         allPages.push(dataPage)
      })
   }
}