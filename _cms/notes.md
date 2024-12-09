```
"build:fields": "deno run -A --node-modules-dir npm:rollup --config rollup.config.mjs"
```

```js
const events = ['beforeBuild', 'afterLoad', 'afterBuild', 'beforeUpdate', 'afterUpdate', 'beforeRender', 'afterRender', 'beforeSave', 'cms:previewUpdated' ]
```

## TODO: Add proper slugify to nameField for all post types. Currently allows invalid symbols.

## On File Create or Update
- Read file and check for ID.
  - If ID is not found, create new post.
  - If ID is found, update post.

## On Create
- pull structure, postType and slug from file path and assign to post // is there a site.* method for this?
- create new id, confirm ID does not exist and assign to post
- push updated postdata to post
- push postData to `db`
- push updated `db` to `localStorage`

## On Update
- readFile for updated post data
- push updated postData to post in `db`
- push updated `db` to `localStorage`

## On Delete
- currently no way to track deleted posts without restarting server...

## On Server Start
- read all directories and pull post data.
- reoder post data by id
- push post data to **`db`**
- push `db` to `localStorage`