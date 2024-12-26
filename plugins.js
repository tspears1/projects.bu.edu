// Plugins =========================================
import googleFonts from "lume/plugins/google_fonts.ts";
import esbuild from "lume/plugins/esbuild.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import { Page } from "lume/core/file.ts";

// Data ============================================
import taxonomy from './src/_setup/taxonomy.js'
import projects from './src/_setup/projects.js'
import config from './src/_setup/config.js'

const isProduction = Deno.env.get('TASK') == 'prod'

export default function () {
   return (site) => {
      site.data('taxonomy', taxonomy)
      site.data('projects', projects)
      site.data('org', config)

      site.use(googleFonts({
         cssFile: "./main.css",
         placeholder: "/* google-fonts */",
         fonts: {
            mona: "https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
         }
      }));

      site.use(esbuild({
         extensions: [".js", ".jsx"],
         options: {
            jsxDev: !isProduction,
            minify: isProduction,
         },
         esm: {
            cjsExports: {
               'preact': ['render'],
               'preact/hooks': ['useEffect', 'useState', 'useReducer', 'useRef', 'useLayoutEffect', 'useMemo', 'useCallback', 'useContext'],
               '@preact/signals-core': ['signal', 'computed', 'effect', 'batch'],
            }
         }
      }));

      site.use(icons({ folder: "icons"}));
      site.use(inline());
      site.use(jsx({
         pageSubExtension: ".page",
      }));

      site.copy('./main.css');
      site.copy('_includes/css', 'css' )

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