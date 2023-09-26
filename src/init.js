import { Home } from "./pages/home.js";
import  VaderRouter from "router"
import { About } from "./pages/about.js";
let app = new VaderRouter('/home');
app.use('/home')
app.use('/about')
app.get("/home", async (req, res)=>{
     res.render('#root',   await new Home().render())
})
app.on('/home', async (req, res)=>{
        res.render('#root',  await new Home().render())
})

app.get('/about', async (req, res)=>{
        res.render('#root', await new About().render())
})
 
app.on('/about', async (req, res)=>{
        res.render('#root', await new About().render())
})
app.start()