import { serve } from "@hono/node-server"
import { Hono } from "hono"

const app = new Hono(),
  port = 3000

app.get("/", (ctx) => {
  return ctx.text("Hello Hono!")
})

serve({
  fetch: app.fetch,
  port,
})

console.log(`Server is running on port ${port}`)
