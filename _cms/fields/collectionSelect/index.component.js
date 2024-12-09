import { Component } from 'lume_cms/components/component.js'
import { view, push, pushOptions, oninvalid } from 'lume_cms/components/utils.js'
import { buildSelectOptions } from '../../middleware/post-data.js'

class CollectionSelect extends Component {
   async init() {
      this.classList.add("field");
      const { schema, value, namePrefix, isNew } = this;
      const name = `${namePrefix}.${schema.name}`;
      const id = `field_${name}`;

      // Show or hide the field based on current view.
      view(this)

      push(this, "label", { for: id }, schema.label);

      if (schema.description) {
         push(this, "div", { class: "field-description" }, schema.description);
      }

      const select = push(this, "select", {
         ...schema.attributes,
         id,
         name,
         class: "select is-narrow",
         oninvalid,
      });

      let options = [];

      if (schema.placeholder) {
         push(select, "option", { value: null, selected: true, disabled: true, hidden: true }, schema.placeholder);
      }

      // Check if schema.collection is a string or an array. If string, convert to array.
      const collections = Array.isArray(schema.collection) ? schema.collection : [schema.collection];
      for (const collection of collections) {
         options = [...options, ...(await buildSelectOptions(collection, schema.includeData))]
      }

      pushOptions(select, schema.options);
      select.value = (isNew ? schema.value : value) ?? "";
   }
}

customElements.define('collection-select', CollectionSelect)