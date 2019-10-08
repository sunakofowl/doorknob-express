const fastify = require('fastify')
const cors = require('fastify-cors')

const app = fastify({ logger: true })

app.register(cors, { origin: true })

app.get('/random', async () => {
  return 53
})

app.listen(3000, 'localhost')