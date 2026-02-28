const express = require("express")
const routes = express.Router()
const member = require("../controllers/MemberControllers")
routes.get("/api/member",member.getAll)

module.exports = routes