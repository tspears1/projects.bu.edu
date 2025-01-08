// Plugins =========================================
import basePath from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sass from "lume/plugins/sass.ts";
import { Page } from "lume/core/file.ts";

// Data ============================================
import taxonomy from "./_setup/taxonomy.js";
import projects from "./_setup/projects.js";
import config from "./_setup/config.js";

const isProduction = Deno.env.get("TASK") == "prod";

export default function () {
  return (site) => {
    site.data("taxonomy", taxonomy);
    site.data("projects", projects);
    site.data("org", config);

    site.use(esbuild({
      extensions: [".jsx"],
      options: {
        minify: isProduction,
        bundle: true,
      },
      // esm: {
      //   deps: {
      //     "@radix-ui/react-dialog": "react@18.3.1",
      //     "@radix-ui/react-dropdown-menu": "react@18.3.1",
      //     "@radix-ui/react-separator": "react@18.3.1",
      //     "@radix-ui/react-slot": "react@18.3.1",
      //     "@radix-ui/react-tooltip": "react@18.3.1",
      //     "classnames": "react@18.3.1",
      //     "react-dom": "react@18.3.1",
      //     "react-inlinesvg": "react@18.3.1",
      //     "react": "react@18.3.1",
      //   }
      // }
    }));

    site.use(sass())

    site.use(basePath({
      extensions: [".html", ".scss"], // Fix URLs inside HTML and CSS files
    }));

    site.ignore("app");

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
  };
}
