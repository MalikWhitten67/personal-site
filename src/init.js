import { Error404 } from "./pages/404.js";
import { About } from "./pages/about.js";
import { Home } from "./pages/home.js";
import  VaderRouter from "router"
let app = new VaderRouter('/home');
app.use('/home')
app.use('/about')
app.get("/home", async (req, res)=>{
     res.render('#root', await Home.render())
})
app.on('/home', async (req, res)=>{
        res.render('#root', await Home.render())
})
 
app.get('/about', async (req, res)=>{
        res.render('#root', await About.render())
})
app.on('/about', async (req, res)=>{
        res.render('#root', await About.render())
})
 
app.start()