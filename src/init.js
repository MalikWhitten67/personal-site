import { Error404 } from "./pages/404.js";
import { Home } from "./pages/home.js";
 
import  VaderRouter from "router"
let app = new VaderRouter('/home');
app.use('/home')
 
app.get("/home", async (req, res)=>{
     res.render('#root', await Home.render())
})
app.on('/home', async (req, res)=>{
        res.render('#root', await Home.render())
})
 
 
app.start()
