import { STATIC_PATH, WDS_PORT } from '../shared/config'

const renderApp = (title) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:${WDS_PORT}/dist/bundle.js"></script>
  </body>
</html>
`

export default renderApp
