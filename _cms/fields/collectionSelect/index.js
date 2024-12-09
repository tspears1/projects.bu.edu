const collectionSelect = {
   tag: "collection-select",
   jsImport: '/fields/collectionSelect.js',
   applyChanges: (data, changes, field) => {
      console.log('collectionSelect', data, changes, field)
      const { name } = field
      const value = changes[name]
      data[name] = value
   }
}

export { collectionSelect }