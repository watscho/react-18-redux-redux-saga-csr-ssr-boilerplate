export const layout = ({ data, helmet, reduxStore, html }) =>
  data
    .replace(/(<html\b[^><]*)>/i, `<html ${helmet.htmlAttributes.toString()}>`)
    .replace(
      /(<head>*\b[^><]*)>/,
      `<head>${helmet.meta.toString()}${helmet.link.toString()}`
    )
    .replace(/<title>.*<\/title>/, helmet.title.toString())
    .replace(/(<body>*\b[^><]*)>/, `<body><script>${reduxStore}</script>`)
    .replace(/(<body\b[^><]*)>/i, `<body ${helmet.bodyAttributes.toString()}>`)
    .replace(/(<div>*\b[^><]*)>/, `<div>${html}`)
