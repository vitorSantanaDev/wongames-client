global.fetch = require('jest-fetch-mock')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
