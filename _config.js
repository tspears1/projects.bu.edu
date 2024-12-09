import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import inline from "lume/plugins/inline.ts";
import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import relations from "lume/plugins/relations.ts";
import sass from "lume/plugins/sass.ts";
import terser from "lume/plugins/terser.ts";
import transform_images from "lume/plugins/transform_images.ts";

const site = lume();

site.use(attributes());
site.use(base_path());
site.use(inline());
site.use(nav());
site.use(picture());
site.use(relations({
   foreignKeys: {
      "project": "project",
      "sprint": "sprint",
      "phase": "phase",
      "status": "status",
   }
}));
site.use(sass());
site.use(terser());
site.use(transform_images());

// const config = JSON.parse(Deno.readTextFileSync("./project.config.json"));
// console.log(config.project.brand);

export default site;
