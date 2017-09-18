import { WDS_PORT, WEB_PORT } from '../shared/config'

const renderApp = (title) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:${WDS_PORT}/dist/bundle.js"></script>
  </body>
</html>
`

export default renderApp
