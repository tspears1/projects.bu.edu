import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './app/js/App.jsx'

const ssr = ReactDOMServer.renderToString(React.createElement(App));

export default function (_data, { url }) {
   return `<!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
			   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>ID://PROJECTS</title>
            <link rel="stylesheet" href="${url('/main.css')}" />
         </head>
         <body>
            <div id="app">${ssr}</div>
            <script type="module" src="${url('/main.js')}"></script>
         </body>
      </html>
   `
}