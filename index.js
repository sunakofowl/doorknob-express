const fastify = require('fastify')

const app = fastify({ logger: true })

app.get('/random', async () => {
  return 53
})

app.listen(3000, 'localhost')