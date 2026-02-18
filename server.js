try {
   process.loadEnvFile() //permet d utilser de svariables
} catch (error) {
    console.log(".env file not found value")
}
//import jsonserver
const jsonServer = require("json-server")
//create server
const server = jsonServer.create()

//configuration
const middlewares = jsonServer.defaults()
server.use(middlewares)






//route
const router = jsonServer.router("db.json")
server.use(router)

const PORT = process.env.PORT || 5005
server.listen(PORT, () =>{
    console.log(`json server running : http://localhost:${PORT}`)
})