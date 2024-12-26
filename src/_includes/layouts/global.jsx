const globalLayout = ({ title, org, bodyClasses }) => {
  return (
    <html>
      <head>
        <title>{ `${title} :: ID://PROJECTS/${ org.code }` }</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/themes/light.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/themes/dark.css" />
        <link rel="stylesheet" href="/main.css" />
        <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/shoelace-autoloader.js"></script>
      </head>
      <body className={ bodyClasses }>
        <div id="app"></div>
        <script type="module" src="/main.js"></script>
      </body>
    </html>
  )
}

export default globalLayout
