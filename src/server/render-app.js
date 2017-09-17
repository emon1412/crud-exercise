import { STATIC_PATH } from '../shared/config'

const renderApp = (title) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:8000${STATIC_PATH}/index.js"></script>
  </body>
</html>
`

export default renderApp
