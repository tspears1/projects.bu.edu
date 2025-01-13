import { gray } from 'jsr:@std/fmt@1.0.4/colors'

// Plugins =========================================
import basePath from "lume/plugins/base_path.ts";
import sass from "lume/plugins/sass.ts";
import { Page } from "lume/core/file.ts";

// Data ============================================
import taxonomy from "./_setup/taxonomy.js";
import projects from "./_setup/projects.js";
import config from "./_setup/config.js";

const isProduction = Deno.env.get("TASK") == "prod";

const viteBuild = (og = '/main.jsx', ng = '/main.js') => {
  console.info("Site updated");
  console.info("Running vite build...");
  const command = new Deno.Command('deno', {
    args: ["run", "-A", "--node-modules-dir", "npm:vite", "build"],
  })
  command.outputSync();
  console.info(`🪩  Vite build complete.`);
  Deno.copyFileSync(`_build/${ng}`, `_site/${ng}`);
  console.info(`🔥 ${ng} <- ${gray(og)}`);
  return
}

const runViteBuild = (e, initial = false) => {
  // if initial, run build once.
  initial && viteBuild();

  // if not initial, only run build on jsx update.
  if ( !e?.files || [...e?.files.values()]?.filter((file) => file.endsWith(".jsx")).length === 0) return
  viteBuild()
}

export default function () {
  return (site) => {
    site.data("taxonomy", taxonomy);
    site.data("projects", projects);
    site.data("org", config);

    site.use(sass())

    site.use(basePath({
      extensions: [".html", ".scss"], // TODO: Fix URLs inside HTML and CSS files
    }));

    site.ignore("app");
    site.ignore("_build");
    site.ignore("vite.config.js");

    site.copy("app/fonts", "fonts");

    site.process([".html"], (pages, allPages) => {
      if (!pages[0]) return;
      const data = pages[0].data;
      const output = {
        sprints: data.sprints,
        projects: data.projects,
        taxonomy: data.taxonomy,
        org: data.org,
      };
      const dataPage = Page.create({
        url: "/data.json",
        content: JSON.stringify(output),
      });

      allPages.push(dataPage);
    });

    site.addEventListener("afterBuild", (e) => runViteBuild(e, true))
    site.addEventListener("afterUpdate", (e) => runViteBuild(e))
  };
}
