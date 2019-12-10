import user from './mockmodules/user'
import globals from './mockmodules/globals'

const mocks = [
  ...user,
  ...globals
]

const responseFake = (url, type, respond) => {
  const obj = {
    url: new RegExp(`${url}`),
    type: type || 'get',
    response(req, res) {
      res.json(respond instanceof Function ? respond(req, res) : respond)
    }
  }
  return obj
}

export default mocks.map((route) => responseFake(route.url, route.type, route.response))
