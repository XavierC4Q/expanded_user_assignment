const pgp = require("pg-promise")({})
const dbString = "postgres:///test_users"


module.exports = pgp(dbString)