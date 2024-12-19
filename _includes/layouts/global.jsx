export default (data, helpers) => {
  const { title, bodyClasses, org_code, org_brand, org_brand_secondary } = data;

  return(
    <html>
      <head>
        <title>{`[ ID://PROJECTS ] - ${org_code} - ${title}`}</title>
      </head>
      <body className={bodyClasses}>
        <div id="app"></div>
        <script type="module" src="./src/main.js" prerender></script>
        <script>
          window.lume = {{ data }};
        </script>
      </body>
    </html>
  )
}