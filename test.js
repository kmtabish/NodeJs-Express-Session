const Express = require('express')
const app = Express();
// const router = Express.Router()
// const router2 = Express.Router()
const PORT = 1234;
// router.get('/', (req, res)=>{
//   res.send("Hello-1")
// })
// router.get('/about', (req, res)=>{
//   res.send("About-1")
// })
// router2.get('/', (req, res)=>{
//   res.send("Hello-2")
// })
// router2.get('/about', (req, res)=>{
//   res.send("about-2")
// })
// app.use("/router1", router)
// app.use("/router2", router2)

app.listen(PORT, ()=>{
  console.log("Server is running on port " + PORT);
})
