const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'src/mock')

function registerRoutes(app) {
  let mockLastIndex
  const { default: mocks } = require('./index.js')
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response)
    // eslint-disable-next-line no-underscore-dangle
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocks).length
  return {
    mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = (app) => {
  // es6 polyfill node模块不支持import方法
  require('@babel/register')

  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  let mockRoutes = registerRoutes(app)
  let { mockRoutesLength } = mockRoutes
  let { mockStartIndex } = mockRoutes

  // watch files, hot reload mock server
  chokidar.watch(mockDir, {
    ignored: /mockServer/,
    ignoreInitial: true
  }).on('all', (event, paths) => {
    if (event === 'change' || event === 'add') {
      try {
        // remove mock routes stack
        // eslint-disable-next-line no-underscore-dangle
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        // clear routes cache
        unregisterRoutes()

        mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${paths}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
