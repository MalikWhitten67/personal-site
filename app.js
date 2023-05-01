ErrorTrace()
const router = new ReactRouter()
router.bindRoot("app")
let App = require('./components/App.jsx')
let Portfolio = require('./components/Portfolio.jsx')
   
router.root("/home", (req, res) => {
     res.title("Home")
     res.return()
     res.jsx(<App />)
     res.return()

})
 
 
router.on("/portfolio", (req, res) => {
    res.title("Portfolio")
    res.return()
    res.jsx(<Portfolio />)
})
   
   
   
router.on("/home", (req, res) => {
     res.title("Home")
    res.return()
    res.jsx(<App />)
    res.return()

})