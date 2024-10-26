import * as process from "node:process"

import { serve } from "@hono/node-server"

import { appApi } from "@/api/common/app.api"

const getPort = () => {
  const DEFAULT_PORT = 3000
  let port = DEFAULT_PORT
  if (process.env.PORT) {
    port = parseInt(process.env.PORT, 10)
  }
  return port
}

const port = getPort()
const server = serve({
  fetch: appApi.fetch,
  port,
})

const address = server.address()
if (address && typeof address !== "string") {
  console.log(`Server is running on ${address.address}${address.port} 🚀`)
}
