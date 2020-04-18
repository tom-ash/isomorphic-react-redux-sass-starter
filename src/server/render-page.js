export function renderPage({
  html,
  css,
  serverState,
  title,
  description
}) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        ${html}
        <script>
          window.serverState = ${JSON.stringify(serverState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `
}
