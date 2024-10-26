import { Hono } from "hono"

import { proposalsApi } from "@/api/proposals/proposals.api"

export const appApi = new Hono()

appApi.route("/", proposalsApi)
