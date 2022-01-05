const dotenv = require("dotenv")
dotenv.config()

const express = require("express")

const routes = require("./routes")
const openDBConnection = require("./helpers/db")

const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI

async function main() {
  try{
      await openDBConnection(uri)

      const app = express()

      app.use(express.json())
      app.use(routes)

      app.listen(port, () => {
          console.log("server is listening on port", port)
      })
      
  }catch(err) {
      console.log(err)
  }
}

main()